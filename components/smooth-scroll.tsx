"use client"

import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { NAVIGATE_EVENT, scrollToId, type NavigateDetail } from "@/lib/scroll-to"

function announce(id: string, params: URLSearchParams) {
  window.dispatchEvent(new CustomEvent<NavigateDetail>(NAVIGATE_EVENT, { detail: { id, params } }))
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries))
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
    }
    return () => resizeObserver.disconnect()
  }, [resizePageHeight])

  // Route same-page anchor links (including "?service=...#quote") through scrollToId,
  // since content inside the fixed container cannot be reached by native hash jumps.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]")
      if (!anchor || anchor.target === "_blank") return
      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return

      const id = decodeURIComponent(url.hash.slice(1))
      if (!document.getElementById(id)) return
      e.preventDefault()
      window.history.replaceState(null, "", `${url.search}${url.hash}`)
      announce(id, url.searchParams)
      scrollToId(id)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Honour a hash in the initial URL once the page has been measured.
  const handledInitialHash = useRef(false)
  useEffect(() => {
    if (handledInitialHash.current || pageHeight === 0) return
    handledInitialHash.current = true
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    setTimeout(() => {
      announce(id, new URLSearchParams(window.location.search))
      scrollToId(id)
    }, 300)
  }, [pageHeight])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { mass: 0.1, stiffness: 40, damping: 20, restDelta: 0.001 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <motion.div
        ref={scrollRef}
        data-smooth-scroll
        style={{ y: spring }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}
