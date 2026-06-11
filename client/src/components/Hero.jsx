import { Shield, ArrowRight, Download, Check, Settings, Layers } from 'lucide-react'

function Hero({ setQuoteModalOpen, handleDownloadCatalogue }) {
  return (
    <section className="hero-sec" id="hero">
      <div className="hero-mesh"></div>
      <div className="hero-glow"></div>
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="hero-tag anim-fade-in-up">
            <Shield size={14} className="trust-icon" />
            <span>ISO 9001:2015 Registered Factory</span>
          </div>
          <h1 className="hero-title anim-fade-in-up">
            Precision Rubber <br />
            <span>Engineering Solutions</span>
          </h1>
          <p className="hero-sub anim-fade-in-up">
            Manufacturing and exporting high-performance molded rubber components, custom gaskets, O-rings, and engineering seals for heavy OEM and process industries globally.
          </p>
          <div className="hero-buttons anim-fade-in-up">
            <button
              className="btn btn-primary"
              onClick={() => setQuoteModalOpen(true)}
              id="mew-hero-rfq-btn"
            >
              Request Quote
              <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-hero-outline"
              onClick={handleDownloadCatalogue}
              id="mew-hero-catalog-btn"
            >
              <Download size={16} />
              Download Catalogue
            </button>
          </div>
          <div className="hero-trust anim-fade-in-up">
            <div className="trust-item">
              <Check className="trust-icon" />
              <span>ISO Certified</span>
            </div>
            <div className="trust-item">
              <Check className="trust-icon" />
              <span>Custom Curing</span>
            </div>
            <div className="trust-item">
              <Check className="trust-icon" />
              <span>Fast Lead Times</span>
            </div>
            <div className="trust-item">
              <Check className="trust-icon" />
              <span>Export Packaging</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-radial-bg"></div>
          <div className="hero-technical-drawing">
            <div className="drawing-circle drawing-circle-1"></div>
            <div className="drawing-circle drawing-circle-2"></div>
            <div className="drawing-circle drawing-circle-3"></div>

            <svg viewBox="0 0 100 100" className="drawing-gear-svg">
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="M50,10 L50,15 M50,85 L50,90 M10,50 L15,50 M85,50 L90,50 M21.7,21.7 L25.2,25.2 M78.3,78.3 L81.8,85.2 M21.7,78.3 L25.2,74.8 M78.3,21.7 L81.8,25.2"
                stroke="currentColor"
                strokeWidth="2"
              />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                <path
                  key={i}
                  d="M47,20 L53,20 L55,10 L45,10 Z"
                  fill="currentColor"
                  transform={`rotate(${deg} 50 50)`}
                />
              ))}
            </svg>

            <div className="drawing-component draw-comp-1">
              <Layers className="draw-comp-icon" />
              <span className="draw-comp-label">Gaskets</span>
            </div>
            <div className="drawing-component draw-comp-2">
              <Settings className="draw-comp-icon" />
              <span className="draw-comp-label">O-Rings</span>
            </div>
            <div className="drawing-component draw-comp-3">
              <Shield className="draw-comp-icon" />
              <span className="draw-comp-label">Viton Seal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
