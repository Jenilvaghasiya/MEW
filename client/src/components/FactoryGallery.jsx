import { Cpu, RefreshCw, Gauge, FlaskConical, Wrench, Shuffle, Snowflake, ShieldCheck } from 'lucide-react'

const GALLERY_DATA = [
  {
    category: 'machinery',
    badge: 'Production Unit',
    title: 'Hydraulic Molding Presses',
    desc: '500-Ton capacity automatic pressure compression machines with dual heating platens.',
    icon: Cpu
  },
  {
    category: 'machinery',
    badge: 'Extrusion Unit',
    title: 'Cold Feed Extrusion Lines',
    desc: 'Continuously vulcanizing profile extruders for dynamic profiles, cords, and washer tubes.',
    icon: RefreshCw
  },
  {
    category: 'laboratory',
    badge: 'Testing Lab',
    title: 'Computerized Tensile Tester',
    desc: 'Tests elastomer elongation, breaking force, and elastic modulus according to ASTM D412.',
    icon: Gauge
  },
  {
    category: 'laboratory',
    badge: 'Testing Lab',
    title: 'Moving Die Rheometer (MDR)',
    desc: 'Analyzes rubber curing curves, vulcanization speeds, and compound viscosity metrics.',
    icon: FlaskConical
  },
  {
    category: 'toolroom',
    badge: 'CAD / CAM Tooling',
    title: 'VMC Tool Room Machining',
    desc: 'High-speed vertical milling centers cutting ultra-precise mould cavities directly from design files.',
    icon: Wrench
  },
  {
    category: 'machinery',
    badge: 'Production Unit',
    title: 'Automatic Rubber Kneader',
    desc: 'Controlled compounding mixer preparing uniform elastomer chemical distributes.',
    icon: Shuffle
  },
  {
    category: 'machinery',
    badge: 'Finishing Unit',
    title: 'Cryogenic Deflashing',
    desc: 'Liquid nitrogen tumbling chambers that freeze and cleanly remove flash from intricate rubber parts.',
    icon: Snowflake
  },
  {
    category: 'laboratory',
    badge: 'Testing Lab',
    title: 'Ozone Test Chamber',
    desc: 'Simulates severe atmospheric exposure to validate anti-cracking and weatherproofing durability.',
    icon: ShieldCheck
  }
];

function FactoryGallery() {
  return (
    <section className="section-padding" id="gallery">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="about-subtitle">INFRASTRUCTURE</span>
          <h2 className="section-title center">Factory Infrastructure</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            A tour inside the Maruti Engineering Works manufacturing facility and compound validation laboratory in Rajkot, India.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_DATA.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div className="gallery-card" key={i}>
                <div className="gallery-blueprint-grid"></div>
                <div className="gallery-card-badge">{item.badge}</div>
                <div className="gallery-node-content">
                  <IconComponent className="gallery-node-icon" />
                  <h4 className="gallery-node-title">{item.title}</h4>
                  <p className="gallery-node-desc">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FactoryGallery
