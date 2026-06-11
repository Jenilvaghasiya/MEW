const MATERIAL_PROPERTIES = {
  natural: {
    name: 'Natural Rubber',
    temp: '-50°C to 80°C',
    oil: 15,
    tensile: 95,
    tempBar: 30,
    elongation: 98,
    compSet: 85
  },
  nitrile: {
    name: 'Nitrile Rubber',
    temp: '-30°C to 110°C',
    oil: 95,
    tensile: 85,
    tempBar: 45,
    elongation: 75,
    compSet: 80
  },
  epdm: {
    name: 'EPDM Rubber',
    temp: '-50°C to 150°C',
    oil: 20,
    tensile: 80,
    tempBar: 70,
    elongation: 90,
    compSet: 75
  },
  viton: {
    name: 'Viton (FKM)',
    temp: '-20°C to 230°C',
    oil: 98,
    tensile: 90,
    tempBar: 95,
    elongation: 60,
    compSet: 92
  },
  silicone: {
    name: 'Silicon Rubber',
    temp: '-60°C to 250°C',
    oil: 35,
    tensile: 55,
    tempBar: 98,
    elongation: 95,
    compSet: 65
  },
  neoprene: {
    name: 'Neoprint Rubber',
    temp: '-40°C to 120°C',
    oil: 70,
    tensile: 88,
    tempBar: 55,
    elongation: 80,
    compSet: 78
  }
};

function QualityAssurance({ activeQAElastomer, setActiveQAElastomer }) {
  return (
    <section className="section-padding" id="quality">
      <div className="container">
        <div className="qa-grid">
          <div className="qa-content">
            <span className="about-subtitle">TESTING & CERTIFICATION</span>
            <h2 className="section-title">Committed To Quality Excellence</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              We operate a state-of-the-art polymer lab holding testing equipment calibrated to ASTM and ISO standards. Every product batch undergoes rigorous checking prior to delivery.
            </p>

            <div className="qa-list">
              <div className="qa-item">
                <div className="qa-item-num">1</div>
                <div>
                  <h4 className="qa-item-title">Material Rheometer Test</h4>
                  <p className="qa-item-desc">Verifying rubber curing velocity and viscosity characteristics before casting into heated steel cavities.</p>
                </div>
              </div>
              <div className="qa-item">
                <div className="qa-item-num">2</div>
                <div>
                  <h4 className="qa-item-title">Dimensional Profile Inspection</h4>
                  <p className="qa-item-desc">Checking diameter dimensions, lip angles, and seal thicknesses down to micron tolerances using projectors.</p>
                </div>
              </div>
              <div className="qa-item">
                <div className="qa-item-num">3</div>
                <div>
                  <h4 className="qa-item-title">Thermal Oven Deflection</h4>
                  <p className="qa-item-desc">Exposing components to high-heat chambers for 72 hours to verify elastomer hardening resistance limits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="qa-visual">
            <h3 className="qa-visual-title">Compound Properties Calculator</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Select a polymer chemical composite block below to see dynamic physical properties (rated 1 to 100).
            </p>
            
            <div className="qa-material-selector">
              {Object.keys(MATERIAL_PROPERTIES).map((key) => (
                <button
                  key={key}
                  className={`qa-mat-btn ${activeQAElastomer === key ? 'active' : ''}`}
                  onClick={() => setActiveQAElastomer(key)}
                >
                  {MATERIAL_PROPERTIES[key].name}
                </button>
              ))}
            </div>

            <div className="qa-props-sheet">
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Working Temperature Limit:</span>
                <span style={{ float: 'right', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>
                  {MATERIAL_PROPERTIES[activeQAElastomer].temp}
                </span>
              </div>

              <div className="qa-prop-item">
                <div className="qa-prop-header">
                  <span>Oil & Fluid Resistance</span>
                  <span>{MATERIAL_PROPERTIES[activeQAElastomer].oil}%</span>
                </div>
                <div className="qa-prop-bar-container">
                  <div className="qa-prop-bar" style={{ width: `${MATERIAL_PROPERTIES[activeQAElastomer].oil}%` }}></div>
                </div>
              </div>

              <div className="qa-prop-item">
                <div className="qa-prop-header">
                  <span>Tensile Breaking Strength</span>
                  <span>{MATERIAL_PROPERTIES[activeQAElastomer].tensile}%</span>
                </div>
                <div className="qa-prop-bar-container">
                  <div className="qa-prop-bar" style={{ width: `${MATERIAL_PROPERTIES[activeQAElastomer].tensile}%` }}></div>
                </div>
              </div>

              <div className="qa-prop-item">
                <div className="qa-prop-header">
                  <span>Extreme Temperature Resistance</span>
                  <span>{MATERIAL_PROPERTIES[activeQAElastomer].tempBar}%</span>
                </div>
                <div className="qa-prop-bar-container">
                  <div className="qa-prop-bar" style={{ width: `${MATERIAL_PROPERTIES[activeQAElastomer].tempBar}%` }}></div>
                </div>
              </div>

              <div className="qa-prop-item">
                <div className="qa-prop-header">
                  <span>Elongation capacity</span>
                  <span>{MATERIAL_PROPERTIES[activeQAElastomer].elongation}%</span>
                </div>
                <div className="qa-prop-bar-container">
                  <div className="qa-prop-bar" style={{ width: `${MATERIAL_PROPERTIES[activeQAElastomer].elongation}%` }}></div>
                </div>
              </div>

              <div className="qa-prop-item">
                <div className="qa-prop-header">
                  <span>Low Compression Set (Shape Retention)</span>
                  <span>{MATERIAL_PROPERTIES[activeQAElastomer].compSet}%</span>
                </div>
                <div className="qa-prop-bar-container">
                  <div className="qa-prop-bar" style={{ width: `${MATERIAL_PROPERTIES[activeQAElastomer].compSet}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityAssurance
