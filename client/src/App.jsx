import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import { Settings, Star } from 'lucide-react'

// Import Refactored Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessTimeline from './components/ProcessTimeline'
import QualityAssurance from './components/QualityAssurance'
import Industries from './components/Industries'
import FactoryGallery from './components/FactoryGallery'
import ExportMap from './components/ExportMap'
import Contact from './components/Contact'
import QuoteWizard from './components/QuoteWizard'
import Footer from './components/Footer'

// Import New Style Path
import './styles/App.css'

function App() {
  // Theme state: default to 'light' (Pristine silver/white mode)
  const [theme, setTheme] = useState('light');
  // Loading progress
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  // Mobile Nav Open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Sticky Nav Scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // Active product filter
  const [productFilter, setProductFilter] = useState('All');
  // Active process timeline step
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  // Quality active material
  const [activeQAElastomer, setActiveQAElastomer] = useState('viton');
  // Quote wizard state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [quoteForm, setQuoteForm] = useState({
    category: 'Rubber Gaskets',
    material: 'EPDM Rubber',
    quantity: 1000,
    outerDia: '',
    innerDia: '',
    thickness: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    customNotes: '',
    drawingName: ''
  });
  const [quoteSuccessData, setQuoteSuccessData] = useState(null);

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Set Theme Attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 3. Loading bar progress simulator
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 300);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 8;
        });
      }, 70);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // 4. Header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle Wizard Input
  const handleWizardInput = (e) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const selectMaterialInWizard = (mat) => {
    setQuoteForm((prev) => ({ ...prev, material: mat }));
  };

  const simulateFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setQuoteForm((prev) => ({ ...prev, drawingName: e.target.files[0].name }));
    }
  };

  const handleNextStep = () => {
    if (wizardStep < 4) setWizardStep(wizardStep + 1);
  };

  const handlePrevStep = () => {
    if (wizardStep > 1) setWizardStep(wizardStep - 1);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const referenceId = 'MEW-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    const estimatedWeeks = quoteForm.material === 'Viton (FKM)' || quoteForm.material === 'Silicon Rubber' ? '2 - 3 Weeks' : '1 - 2 Weeks';
    
    setQuoteSuccessData({
      refId: referenceId,
      leadTime: estimatedWeeks,
      ...quoteForm
    });
    setWizardStep(4);
  };

  const resetQuoteWizard = () => {
    setQuoteModalOpen(false);
    setWizardStep(1);
    setQuoteForm({
      category: 'Rubber Gaskets',
      material: 'EPDM Rubber',
      quantity: 1000,
      outerDia: '',
      innerDia: '',
      thickness: '',
      company: '',
      email: '',
      country: '',
      phone: '',
      customNotes: '',
      drawingName: ''
    });
    setQuoteSuccessData(null);
  };

  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = '/MEW_Maruti_Rubber_Components_Product_Catalogue.pdf';
    link.download = 'MEW_Maruti_Rubber_Components_Product_Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* 1. LOADING SCREEN */}
      {loading && (
        <div className="loader-wrapper">
          <Settings className="loader-logo-spin" />
          <h2 className="loader-title">MARUTI ENGINEERING WORKS</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', letterSpacing: '0.15em' }}>
            PRECISION INDUSTRIAL RUBBER MANUFACTURE
          </p>
          <div className="loader-bar">
            <div className="loader-progress" style={{ width: `${Math.min(loadProgress, 100)}%` }}></div>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            Loading... {Math.min(loadProgress, 100)}%
          </span>
        </div>
      )}

      {/* 2. NAVIGATION HEADER */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        setQuoteModalOpen={setQuoteModalOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isScrolled={isScrolled}
      />

      {/* 3. HERO UNIT */}
      <Hero
        setQuoteModalOpen={setQuoteModalOpen}
        handleDownloadCatalogue={handleDownloadCatalogue}
      />

      {/* 4. ABOUT COMPANY */}
      <About />

      {/* 5. PRODUCT DISPLAY & INSPECTOR */}
      <Products
        productFilter={productFilter}
        setProductFilter={setProductFilter}
        setQuoteForm={setQuoteForm}
        setQuoteModalOpen={setQuoteModalOpen}
      />

      {/* 6. WHY PARTNER WITH MEW */}
      <WhyChooseUs />

      {/* 7. MANUFACTURING timeline */}
      <ProcessTimeline
        activeProcessStep={activeProcessStep}
        setActiveProcessStep={setActiveProcessStep}
      />

      {/* 8. LABS & TESTING METRICS */}
      <QualityAssurance
        activeQAElastomer={activeQAElastomer}
        setActiveQAElastomer={setActiveQAElastomer}
      />

      {/* 9. MARKET SECTORS */}
      <Industries />

      {/* 10. MACHINE INFRASTRUCTURE */}
      <FactoryGallery />

      {/* 11. PARTNER BRANDS MARQUEE */}
      <section className="clients-sec">
        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {['MAHINDRA OEM', 'TATA INDUSTRIAL', 'SIEMENS POWER', 'L&T INFRA', 'HAL AEROSPACE', 'BOSCH CORE', 'PUNJAB TRACTORS'].map((client, idx) => (
              <div className="client-logo-item" key={`orig-${idx}`}>
                <Settings className="client-logo-icon" />
                <span>{client}</span>
              </div>
            ))}
            {['MAHINDRA OEM', 'TATA INDUSTRIAL', 'SIEMENS POWER', 'L&T INFRA', 'HAL AEROSPACE', 'BOSCH CORE', 'PUNJAB TRACTORS'].map((client, idx) => (
              <div className="client-logo-item" key={`dup-${idx}`}>
                <Settings className="client-logo-icon" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. B2B PROCUREMENT TESTIMONIALS */}
      <section className="section-padding" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="about-subtitle">TRUST VERIFICATION</span>
            <h2 className="section-title center">B2B Procurement Feedback</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Hear from global supply chain managers who rely on MEW for high-volume custom rubber seals and gaskets.
            </p>
          </div>

          <div className="test-grid">
            <div className="test-card">
              <div className="test-rating">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="test-text">
                "We transitioned our agricultural spacer washers procurement from local EU manufacturers to Maruti Engineering. Not only did they reduce toolroom lead times, but the dimensional profile projector reports they send with each container show absolute quality compliance."
              </p>
              <div className="test-author-box">
                <div className="test-avatar">HM</div>
                <div>
                  <h4 className="test-author-name">Hans Müller</h4>
                  <span className="test-author-title">Global Procurement Director, Agritra GmbH (Germany)</span>
                </div>
              </div>
            </div>

            <div className="test-card">
              <div className="test-rating">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="test-text">
                "Maruti's compounding engineers formulated a custom high-temp EPDM ring profile that operates in high steam environments. They successfully managed to design the metal-bonded steel interface collar inside Rajkot toolrooms. Truly outstanding precision."
              </p>
              <div className="test-author-box">
                <div className="test-avatar">AR</div>
                <div>
                  <h4 className="test-author-name">Ananth Raman</h4>
                  <span className="test-author-title">Chief Engineer, L&T Infrastructure (India)</span>
                </div>
              </div>
            </div>

            <div className="test-card">
              <div className="test-rating">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="test-text">
                "Sourcing custom rubber seals that handle intense chemical fluids at high pressure was a major bottleneck for us. Maruti's speed in sending compound samples, and their FDA compliance documentation, allowed us to secure our domestic wastewater project timelines without a single defect."
              </p>
              <div className="test-author-box">
                <div className="test-avatar">MV</div>
                <div>
                  <h4 className="test-author-name">Marcus Vance</h4>
                  <span className="test-author-title">VP of Supply Chain, HydroFlow Systems (USA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. LOGISTICS EXPORT ROUTES */}
      <ExportMap />

      {/* 14. CONTACT US & GET IN TOUCH */}
      <Contact />

      {/* 15. Rich Footer */}
      <Footer
        setProductFilter={setProductFilter}
        setQuoteModalOpen={setQuoteModalOpen}
      />

      {/* 16. MULTI-STEP RFQ MODAL */}
      <QuoteWizard
        quoteModalOpen={quoteModalOpen}
        resetQuoteWizard={resetQuoteWizard}
        wizardStep={wizardStep}
        setWizardStep={setWizardStep}
        quoteForm={quoteForm}
        handleWizardInput={handleWizardInput}
        selectMaterialInWizard={selectMaterialInWizard}
        simulateFileUpload={simulateFileUpload}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
        handleQuoteSubmit={handleQuoteSubmit}
        quoteSuccessData={quoteSuccessData}
      />

      {/* 17. FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919426732792?text=Hello%20Maruti%20Engineering%20Works,%20I%20am%20interested%20in%20your%20rubber%20components."
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="mew-whatsapp-float"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}

export default App
