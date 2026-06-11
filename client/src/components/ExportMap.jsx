const EXPORT_DESTINATIONS = [
  { name: 'India (H.Q.)', region: 'Domestic Supply', delivery: '2 - 4 Days', volume: 'Anchor Market', lat: 'pin-india' },
  { name: 'United States', region: 'North America', delivery: '18 - 25 Days', volume: '18% Export Share', lat: 'pin-usa' },
  { name: 'Germany & Europe', region: 'European Union', delivery: '14 - 20 Days', volume: '22% Export Share', lat: 'pin-germany' },
  { name: 'U.A.E. & Mid-East', region: 'GCC Countries', delivery: '5 - 8 Days', volume: '15% Export Share', lat: 'pin-uae' },
  { name: 'Australia', region: 'Oceania', delivery: '22 - 30 Days', volume: '8% Export Share', lat: 'pin-australia' }
];

function ExportMap() {
  return (
    <section className="section-padding export-sec" id="export">
      <div className="container">
        <div className="export-grid">
          <div className="export-map-container">
            <svg viewBox="0 0 1000 500" className="export-svg-map" fill="none" stroke="currentColor">
              {/* Lat/Lon Grid lines */}
              {[100, 200, 300, 400].map((y) => (
                <line key={`lat-${y}`} x1="50" y1={y} x2="950" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              ))}
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
                <line key={`lon-${x}`} x1={x} y1="50" x2={x} y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              ))}

              {/* Shipping Route Paths */}
              <path d="M150,150 Q200,120 280,180 T400,200 T480,150 T600,220 T750,200 T900,280" strokeWidth="1" strokeDasharray="3 3" opacity="0.08" />
              <path d="M100,250 Q220,300 350,250 T620,290 T780,260 T950,320" strokeWidth="1" strokeDasharray="2 4" opacity="0.05" />
              <circle cx="200" cy="275" r="3" fill="currentColor" opacity="0.3" />
              <circle cx="490" cy="210" r="3" fill="currentColor" opacity="0.3" />
              <circle cx="560" cy="275" r="3" fill="currentColor" opacity="0.3" />
              <circle cx="670" cy="300" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="860" cy="410" r="3" fill="currentColor" opacity="0.3" />

              <path d="M670,300 Q435,220 200,275" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M670,300 Q580,220 490,210" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M670,300 Q615,270 560,275" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M670,300 Q765,370 860,410" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {EXPORT_DESTINATIONS.map((dest, idx) => (
              <div key={idx} className={`map-pin ${dest.lat}`}>
                <div className="map-pin-tooltip">
                  <strong>{dest.name}</strong><br />
                  <span>Transit: {dest.delivery}</span><br />
                  <span>{dest.volume}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="export-content">
            <span className="about-subtitle" style={{ color: '#93c5fd' }}>EXPORT CAPABILITIES</span>
            <h2 className="export-headline" style={{ color: '#ffffff' }}>Global Distribution Ready</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
              Maruti Engineering Works exports over 40% of its custom engineering parts directly to European process plants, US machinery factories, and GCC chemical networks.
            </p>
            <p style={{ color: '#cbd5e1' }}>
              We understand international custom documentation, marine insurance coverages, and logistics transit tracking rules, delivering door-to-door via DHL Express or ocean container lines.
            </p>

            <div className="export-stats">
              <div className="export-stat-box">
                <div className="export-stat-num">40%+</div>
                <div className="export-stat-label">Export Production</div>
              </div>
              <div className="export-stat-box">
                <div className="export-stat-num">&lt; 15 Days</div>
                <div className="export-stat-label">Average Shipping Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExportMap
