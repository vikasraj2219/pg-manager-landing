import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CapabilityStrip from './components/CapabilityStrip'
import ProblemSolution from './components/ProblemSolution'
import ProductShowcase from './components/ProductShowcase'
import BentoFeatures from './components/BentoFeatures'
import MultiProperty from './components/MultiProperty'
import FinancialCarousel from './components/FinancialCarousel'
import OperationsBento from './components/OperationsBento'
import OwnerDashboard from './components/OwnerDashboard'
import Analytics from './components/Analytics'
import AudienceCarousel from './components/AudienceCarousel'
import HowItWorks from './components/HowItWorks'
import ProductWorkflow from './components/ProductWorkflow'
import Security from './components/Security'
import PricingPreview from './components/PricingPreview'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <ProblemSolution />
        <ProductShowcase />
        <BentoFeatures />
        <MultiProperty />
        <FinancialCarousel />
        <OperationsBento />
        <OwnerDashboard />
        <Analytics />
        <AudienceCarousel />
        <HowItWorks />
        <ProductWorkflow />
        <Security />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
