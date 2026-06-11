import { Wrench, Layers, Cpu, Award, Clock, Package, DollarSign, Shield } from 'lucide-react'

const WHY_CHOOSE_US_DATA = [
  {
    title: 'Custom Design Support',
    desc: 'Our engineering team assists from 2D/3D component blueprints to custom compound formulation and tool design.',
    icon: <Wrench className="why-icon" />
  },
  {
    title: 'High Quality Raw Materials',
    desc: 'We source raw polymers from global leaders like DuPont, Lanxess, and Denka to ensure superior structural performance.',
    icon: <Layers className="why-icon" />
  },
  {
    title: 'Precision Manufacturing',
    desc: 'Equipped with heavy hydraulic compression presses and PLC moulding injectors holding tight dimension tolerances.',
    icon: <Cpu className="why-icon" />
  },
  {
    title: 'ISO Quality Standards',
    desc: 'Operating strict ISO 9001:2015 processes. Full material batch trace reports and certificates provided upon request.',
    icon: <Award className="why-icon" />
  },
  {
    title: 'Fast Lead Time',
    desc: 'Efficient toolroom processes ensure prototype moulds are prepared in days rather than weeks.',
    icon: <Clock className="why-icon" />
  },
  {
    title: 'Export Packaging',
    desc: 'Heavy-duty packing boxes with moisture barriers and custom labels designed for ocean cargo transit.',
    icon: <Package className="why-icon" />
  },
  {
    title: 'Competitive Pricing',
    desc: 'Rajkot manufacturing ecosystem ensures optimal operational costs and affordable global B2B procurement.',
    icon: <DollarSign className="why-icon" />
  },
  {
    title: 'Technical Assistance',
    desc: 'Direct consultation with compound engineers for elastomer selection based on environment and fluid contact.',
    icon: <Shield className="why-icon" />
  }
];

function WhyChooseUs() {
  return (
    <section className="section-padding" id="why-choose-us">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="about-subtitle">MEW ADVANTAGE</span>
          <h2 className="section-title center">Why Industrial Importers Partner With MEW</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Operating at a level of design complexity and material engineering rigor equivalent to top European manufacturers.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US_DATA.map((feat, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon-box">{feat.icon}</div>
              <h3 className="why-card-title">{feat.title}</h3>
              <p className="why-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
