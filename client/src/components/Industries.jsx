import { Cpu, Award, Layers, Globe, Shield, Settings, Truck } from 'lucide-react'

const INDUSTRIES_DATA = [
  { 
    name: 'Automotive', 
    desc: 'Engine gaskets, suspension bushes, fuel system O-rings, bellows.', 
    icon: <Cpu />,
    img: '/Images/ind_auto.png'
  },
  { 
    name: 'Agriculture', 
    desc: 'Tractor shock pads, cultivator seals, irrigation valve seals.', 
    icon: <Award />,
    img: '/Images/ind_agri.png'
  },
  { 
    name: 'Chemical Process', 
    desc: 'Corrosion-resistant Viton gaskets and high-pressure seals.', 
    icon: <Layers />,
    img: '/Images/ind_chem.png'
  },
  { 
    name: 'Oil & Gas', 
    desc: 'High pressure explosive decompression O-rings, rotary shaft seals.', 
    icon: <Globe />,
    img: '/Images/ind_oil.png'
  },
  { 
    name: 'Water Treatment', 
    desc: 'Food-grade EPDM gaskets, potable water FDA washers.', 
    icon: <Shield />,
    img: '/Images/ind_water.png'
  },
  { 
    name: 'Machinery Mfg', 
    desc: 'Anti-vibration mountings, custom dampers, coupling buffers.', 
    icon: <Settings />,
    img: '/Images/ind_mach.png'
  },
  { 
    name: 'Construction', 
    desc: 'Expansion joint profiles, heavy excavator cylinder seals.', 
    icon: <Truck />,
    img: '/Images/ind_const.png'
  },
  { 
    name: 'Electrical Industry', 
    desc: 'Insulating grommets, high temp silicone wire seals.', 
    icon: <Layers />,
    img: '/Images/ind_elec.png'
  }
];

function Industries() {
  return (
    <section className="section-padding industries-sec" id="industries">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="about-subtitle">GLOBAL APPLICATIONS</span>
          <h2 className="section-title center">Industries We Serve</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            From heavy automotive drivetrain linkages to high-purity water treatment networks.
          </p>
        </div>

        <div className="ind-grid">
          {INDUSTRIES_DATA.map((ind, i) => (
            <div className="ind-card" key={i}>
              <div 
                className="ind-card-bg" 
                style={{ backgroundImage: `url(${ind.img})` }}
              ></div>
              <div className="ind-card-overlay"></div>
              <div className="ind-icon-box">{ind.icon}</div>
              <h3 className="ind-title">{ind.name}</h3>
              <p className="ind-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
