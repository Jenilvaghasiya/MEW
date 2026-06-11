import { useState } from 'react'
import { Eye, X, ArrowRight } from 'lucide-react'

const PRODUCTS_DATA = [
  {
    id: 'gaskets',
    category: 'Standard Seals',
    name: 'Rubber Gaskets',
    desc: 'High-precision sealing gaskets designed for critical industrial joint and flange piping systems.',
    badge: 'ISO Compliant',
    img: '/Images/product_gaskets.png',
    specs: {
      'Dimension Range': '10 mm to 1200 mm OD',
      'Durometer Hardness': '40 to 90 Shore A',
      'Tensile Strength': '10 to 18 MPa',
      'Available Materials': 'Nitrile, EPDM, Viton, Neoprene, Silicone, EPDM-FDA',
      'Dimensional Tolerance': 'ISO 3302-1 Class M1 (High Precision)',
      'Primary Applications': 'Chemical pipelines, petrochemical valves, automotive engines, heat exchangers'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 37 * Math.cos(rad);
          const y = 50 + 37 * Math.sin(rad);
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" />;
        })}
      </svg>
    )
  },
  {
    id: 'washers',
    category: 'Standard Seals',
    name: 'Rubber Washers',
    desc: 'Custom-thickness flat washers providing reliable leak prevention and structural spacing cushioning.',
    badge: 'Best Seller',
    img: '/Images/product_washers.png',
    specs: {
      'Dimension Range': '2 mm to 350 mm OD',
      'Durometer Hardness': '50 to 80 Shore A',
      'Thickness Limits': '0.5 mm to 25 mm',
      'Available Materials': 'Natural Rubber, SBR, Neoprene, Nitrile, EPDM',
      'Dimensional Tolerance': 'ISO 3302-1 Class M2',
      'Primary Applications': 'Plumbing fixtures, fastener sealing, vibration isolation panels'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'orings',
    category: 'Standard Seals',
    name: 'O-Rings',
    desc: 'High-performance elastomer loop seals complying with AS568, BS1806, and metric size charts.',
    badge: 'High Precision',
    img: '/Images/product_orings.png',
    specs: {
      'Dimension Range': '0.5 mm to 950 mm ID',
      'Cross Section (CS)': '0.5 mm to 20 mm',
      'Hardness Standards': '70, 75, 80, 90 Shore A',
      'Available Materials': 'Viton (FKM), Nitrile (NBR), EPDM, Silicone, Fluorosilicone',
      'Dimensional Tolerance': 'ISO 3601-1 Grade A tolerances',
      'Primary Applications': 'Hydraulic valves, pneumatic cylinders, fuel injectors, aerospace seal nodes'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="16" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
        <circle cx="50" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="50" y1="0" x2="50" y2="24" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'oilseals',
    category: 'Rotary Seals',
    name: 'Oil Seals',
    desc: 'Rotary shaft lip seals with steel casing brackets and garter springs to retain lubrication oil.',
    badge: 'Reinforced',
    img: '/Images/product_oilseals.png',
    specs: {
      'Shaft Diameter': '8 mm to 450 mm',
      'Design Formats': 'Single Lip (SC), Double Lip (TC), Metal Outer (SB, TB)',
      'Operational Speed': 'Up to 22 m/s radial velocity',
      'Thermal Threshold': '-40°C to 220°C (depending on elastomer)',
      'Material Grades': 'NBR + Steel Spring, Viton + Stainless Steel Spring',
      'Primary Applications': 'Gearboxes, electric motors, pump shafts, wheel hubs, heavy machinery axels'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 32 * Math.cos(rad);
          const y1 = 50 + 32 * Math.sin(rad);
          const x2 = 50 + 40 * Math.cos(rad);
          const y2 = 50 + 40 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />;
        })}
      </svg>
    )
  },
  {
    id: 'bushes',
    category: 'Anti-Vibration',
    name: 'Rubber Bushes',
    desc: 'Anti-vibration engine suspension bushings bonded with outer metal sleeve tubes.',
    badge: 'Heavy Duty',
    img: '/Images/product_bushes.png',
    specs: {
      'Bonding Tech': 'Elastomer-to-metal vulcanized adhesive curing',
      'Static Load Capacity': 'Up to 15,000 N',
      'Elastomer Range': 'High Tensile Natural Rubber, Neoprene, Polyurethane',
      'Metal Outer Sleeves': 'Mild Steel, Stainless Steel, Brass coating',
      'Torsional Stiffness': 'Custom engineered according to dynamic requirements',
      'Primary Applications': 'Automotive suspension arms, industrial vibrator machinery, engine mounts'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <rect x="25" y="10" width="50" height="80" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
        <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="75" x2="75" y2="75" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="15" width="10" height="70" fill="currentColor" opacity="0.3" />
        <rect x="75" y="15" width="10" height="70" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 'moulded',
    category: 'Moulded Parts',
    name: 'Moulded Rubber Parts',
    desc: 'Custom-shaped compression and injection moulded parts engineered based on client specifications.',
    badge: 'Fully Custom',
    img: '/Images/product_moulded.png',
    specs: {
      'Molding Methods': 'Compression molding, Transfer molding, Injection molding',
      'Max Part Weight': '15 kg per single cycle part',
      'Tooling Capacity': 'In-house CAD/CAM tooling department with hardened steel moulds',
      'Production Speed': 'From prototype molds to high volume runs (500,000+ pieces)',
      'Quality Checks': 'Dimensional inspection using optical profile projectors',
      'Primary Applications': 'Engine air intake boots, customized bellows, coupling spiders, medical caps'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <path d="M20,20 L80,20 L80,40 L60,40 L60,80 L40,80 L40,40 L20,40 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="30" r="4" fill="currentColor" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M40,60 H60" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'industrial',
    category: 'Moulded Parts',
    name: 'Industrial Rubber Components',
    desc: 'Heavy-duty buffers, elastomeric bellows, couplings, and shock absorbers for process plant grids.',
    badge: 'Premium Grade',
    img: '/Images/product_industrial.png',
    specs: {
      'Product Subtypes': 'Flexible bellows, expansion sleeves, buffer blocks, grid couplings',
      'Raw Materials': 'Neoprene, Hypalon, Nitrile, Polyurethane, Viton',
      'Mechanical Endurance': 'Tested to 1,000,000 cyclic deflection compression tests',
      'Chemical Stability': 'Highly resistant to industrial acids, bases, and oils',
      'Hardness Variance': '40 Shore A to 95 Shore A',
      'Primary Applications': 'Piping expansion joints, power transmission coupling systems, crane buffers'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <path d="M20,20 L30,30 L20,40 L30,50 L20,60 L30,70 L20,80 H80 L70,70 L80,60 L70,50 L80,40 L70,30 L80,20 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 1" />
      </svg>
    )
  },
  {
    id: 'custom',
    category: 'Moulded Parts',
    name: 'Custom Rubber Products',
    desc: 'Elastomer formulations customized with fiber layers, steel frames, or customized polymers.',
    badge: 'Tailored Compounding',
    img: '/Images/product_custom.png',
    specs: {
      'Special Compound Mix': 'Fluoroelastomer, Hydrogenated Nitrile (HNBR), Food-Grade FDA Silicone',
      'Reinforcements': 'Kevlar mesh, Polyester weave, steel thread inserts',
      'Design Integration': 'Direct STEP/IGS CAD file loading, tooling validation simulations',
      'Prototype Turnaround': '7 to 10 working days including tooling manufacture',
      'Export Certifications': 'RoHS, REACH, FDA CFR 177.2600 compliant',
      'Primary Applications': 'High-pressure aerospace valves, heavy mining machinery, oil rigs'
    },
    techArt: (
      <svg viewBox="0 0 100 100" className="product-svg-art">
        <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="none" stroke="currentColor" strokeWidth="4" />
        <line x1="50" y1="15" x2="50" y2="95" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="15" y1="35" x2="85" y2="75" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="50" cy="55" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  }
];

function Products({
  productFilter,
  setProductFilter,
  setQuoteForm,
  setQuoteModalOpen
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productFilter === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === productFilter);

  return (
    <section className="section-padding products-sec" id="products">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="about-subtitle">OUR PRODUCT RANGE</span>
          <h2 className="section-title center">Precision Rubber Components</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Browse through our core industrial categories. Hover on any component card to preview physical specs, or click for the dynamic technical inspector.
          </p>
        </div>

        {/* Product Category Filter Bar */}
        <div className="products-filter-bar">
          {['All', 'Standard Seals', 'Rotary Seals', 'Anti-Vibration', 'Moulded Parts'].map((category) => (
            <button
              key={category}
              className={`filter-btn ${productFilter === category ? 'active' : ''}`}
              onClick={() => setProductFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-visual-wrapper">
                <div className="product-tech-blueprint" style={{ opacity: 0.15 }}></div>
                <div className="product-badge">{product.badge}</div>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="product-card-img" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 2, transition: 'transform var(--transition-normal)' }} 
                />
              </div>
              <div className="product-info">
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {product.category}
                </span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                
                <div className="product-specs-preview">
                  <div className="spec-preview-row">
                    <span className="spec-preview-label">OD/Size Range:</span>
                    <span className="spec-preview-value">
                      {product.specs['Dimension Range'] || product.specs['Shaft Diameter'] || product.specs['Bonding Tech']}
                    </span>
                  </div>
                  <div className="spec-preview-row">
                    <span className="spec-preview-label">Hardness:</span>
                    <span className="spec-preview-value">
                      {product.specs['Durometer Hardness'] || product.specs['Hardness Standards'] || product.specs['Hardness Variance'] || 'Custom'}
                    </span>
                  </div>
                </div>

                <div className="product-cta-row">
                  <span
                    className="product-view-details"
                    onClick={() => setSelectedProduct(product)}
                    id={`mew-inspect-${product.id}`}
                  >
                    <Eye size={14} />
                    Inspect Spec Sheets
                  </span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setQuoteForm((prev) => ({ ...prev, category: product.name }));
                      setQuoteModalOpen(true);
                    }}
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                    id={`mew-card-rfq-${product.id}`}
                  >
                    Get RFQ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC PRODUCT INSPECTOR MODAL */}
      {selectedProduct && (
        <div className="inspector-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="inspector-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="inspector-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close inspector"
            >
              <X size={16} />
            </button>
            <div className="inspector-layout">
              <div className="inspector-visual">
                <div className="product-tech-blueprint" style={{ opacity: 0.4 }}></div>
                {selectedProduct.techArt}
                <div className="inspector-title-side">
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Blueprint Sketch
                  </span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    ISO Standard Cross-Section
                  </p>
                </div>
              </div>

              <div className="inspector-info">
                <span className="inspector-category">{selectedProduct.category}</span>
                <h3 className="inspector-heading">{selectedProduct.name}</h3>
                <p className="inspector-desc">{selectedProduct.desc}</p>

                <h4 className="inspector-section-label">Technical Specification Sheet</h4>
                <table className="inspector-specs-table">
                  <tbody>
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <tr key={key}>
                        <td className="inspector-spec-name">{key}</td>
                        <td className="inspector-spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="inspector-materials">
                  <h4 className="inspector-section-label">Compatible Elastomers</h4>
                  <div className="materials-tags-grid">
                    {selectedProduct.specs['Available Materials']
                      ? selectedProduct.specs['Available Materials'].split(', ').map((mat) => (
                          <span className="material-tag" key={mat}>{mat}</span>
                        ))
                      : selectedProduct.specs['Material Grades']
                      ? selectedProduct.specs['Material Grades'].split(', ').map((mat) => (
                          <span className="material-tag" key={mat}>{mat}</span>
                        ))
                      : selectedProduct.specs['Elastomer Range']
                      ? selectedProduct.specs['Elastomer Range'].split(', ').map((mat) => (
                          <span className="material-tag" key={mat}>{mat}</span>
                        ))
                      : ['Viton', 'Nitrile (NBR)', 'EPDM', 'Silicone'].map((mat) => (
                          <span className="material-tag" key={mat}>{mat}</span>
                        ))
                    }
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setQuoteForm((prev) => ({ ...prev, category: selectedProduct.name }));
                    setSelectedProduct(null);
                    setQuoteModalOpen(true);
                  }}
                  id="mew-inspector-rfq-btn"
                >
                  Configure Quote For This Item
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products
export { PRODUCTS_DATA }
