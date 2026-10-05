import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { AreasSection } from "@/components/areas-section"
import { WorkSection } from "@/components/work-section"
import { TrustSection } from "@/components/trust-section"
import { QuoteSection } from "@/components/quote-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"

// Section order follows the spec: price and location are answered before the visitor is asked for anything.
export default function Page() {
  return (
    <main>
      <Navigation />
      <SmoothScroll>
        <Hero />
        <ServicesSection />
        <PricingSection />
        <AreasSection />
        <WorkSection />
        <TrustSection />
        <QuoteSection />
        <Footer />
      </SmoothScroll>
    </main>
  )
}
