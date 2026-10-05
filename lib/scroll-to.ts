/** Event fired when an in-page link is followed: detail = { id, params } */
export const NAVIGATE_EVENT = "arthur:navigate"

export type NavigateDetail = { id: string; params: URLSearchParams }

/**
 * Scrolls the window to an element. Page content lives inside the fixed
 * SmoothScroll container, so native hash jumps cannot reach it; we measure
 * the element's offset within that container instead.
 */
export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const container = el.closest<HTMLElement>("[data-smooth-scroll]")
  const top = container
    ? el.getBoundingClientRect().top - container.getBoundingClientRect().top
    : el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: Math.max(0, top - offset), behavior: "smooth" })
}
