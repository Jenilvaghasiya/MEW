import { Check } from 'lucide-react'

function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-graphics-panel">
            <div className="about-factory-img-sim">
              <div className="about-blueprint-bg"></div>
              <div className="about-factory-tag">Est. 1991</div>
              

              <div className="about-factory-info-overlay">
                <h4 className="about-overlay-title">Engineering Excellence</h4>
                <p className="about-overlay-desc">
                  Over 35 years of dedicated engineering in rubber polymers development and custom metal mould tooling.
                </p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="about-subtitle">ABOUT OUR COMPANY</span>
            <h2 className="section-title">Engineering Excellence Since 1991</h2>
            <p className="about-lead">
              Maruti Engineering Works (MEW) has grown from a local specialized toolroom in Rajkot to an international-level supplier of precision elastomer components.
            </p>
            <p className="about-desc">
              We design, formulate, mold, and test high-integrity industrial seals and rubber dampers that safeguard critical processes. We work side-by-side with global OEMs to compound custom elastomers that resist intense temperatures, abrasive fluids, and cyclic pressure.
            </p>

            <div className="about-key-points">
              <div className="key-point-item">
                <div className="key-point-icon">
                  <Check size={16} />
                </div>
                <p className="key-point-text">
                  <strong>Precision Toolroom:</strong> In-house VMC machining ensuring tight dimensional tolerances.
                </p>
              </div>
              <div className="key-point-item">
                <div className="key-point-icon">
                  <Check size={16} />
                </div>
                <p className="key-point-text">
                  <strong>Specialty Compounding:</strong> Custom EPDM, Viton, NBR, and FDA-compliant Silicone.
                </p>
              </div>
              <div className="key-point-item">
                <div className="key-point-icon">
                  <Check size={16} />
                </div>
                <p className="key-point-text">
                  <strong>Quality Audits:</strong> Curing curves, tensile strength, and projector dimensional inspections.
                </p>
              </div>
              <div className="key-point-item">
                <div className="key-point-icon">
                  <Check size={16} />
                </div>
                <p className="key-point-text">
                  <strong>Global Logistics:</strong> Ocean/air freight container shipping to 25+ international markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">35+</div>
            <div className="stat-label">Years Experience</div>
            <div className="stat-sub">Established 1991</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">25+</div>
            <div className="stat-label">Export Markets</div>
            <div className="stat-sub">USA, EU, GCC, APAC</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">50M+</div>
            <div className="stat-label">Annual Output</div>
            <div className="stat-sub">Precision Rubber Units</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">120+</div>
            <div className="stat-label">Skilled Workforce</div>
            <div className="stat-sub">Engineers & Chemists</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
