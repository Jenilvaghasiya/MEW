import { Settings, Globe, Users, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

function Footer({ setProductFilter, setQuoteModalOpen }) {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo-container" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/Images/logo.png" 
                alt="MEW - Maruti Engineering Works" 
                className="logo-img" 
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  backgroundColor: '#ffffff', 
                  padding: '6px 16px', 
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }} 
              />
            </a>
            <p className="footer-brand-desc">
              Maruti Engineering Works (MEW) is a pioneer in technical industrial seals, custom moulded rubber components, and high-integrity flange gaskets since 1991.
            </p>
            <div className="footer-social-row">
              <a href="#" className="footer-social-btn" aria-label="LinkedIn Profile"><Globe size={16} /></a>
              <a href="#" className="footer-social-btn" aria-label="YouTube channel"><Users size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Core Products</h4>
            <ul className="footer-links">
              <li><a href="#products" onClick={() => setProductFilter('Standard Seals')}>Rubber Gaskets & Washers</a></li>
              <li><a href="#products" onClick={() => setProductFilter('Standard Seals')}>AS568 O-Rings</a></li>
              <li><a href="#products" onClick={() => setProductFilter('Rotary Seals')}>Double Lip Oil Seals</a></li>
              <li><a href="#products" onClick={() => setProductFilter('Anti-Vibration')}>Rubber Bushes & Mounts</a></li>
              <li><a href="#products" onClick={() => setProductFilter('Moulded Parts')}>Custom Molded Parts</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links">
              <li><a href="#industries">Automotive OEMs</a></li>
              <li><a href="#industries">Pumping & Hydraulics</a></li>
              <li><a href="#industries">Chemical Process Piping</a></li>
              <li><a href="#industries">Water filtration plant grids</a></li>
              <li><a href="#industries">Agricultural Machinery</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Our Facility</a></li>
              <li><a href="#process">Production Timeline</a></li>
              <li><a href="#quality">Material Properties Lab</a></li>
              <li><a href="#export">Export Logistics Ports</a></li>
              <li><a href="#" onClick={() => setQuoteModalOpen(true)}>Request B2B RFQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact Ribda HQ</h4>
            <div className="footer-contact-item">
              <MapPin className="footer-contact-icon" />
              <span>Umiya Industrial Zone-2, Opp Umiya Steel, National Highway 27, At Ribda, Rajkot - 360311, Gujarat, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" />
              <span>+91 94267 32792<br />+91 74909 43857</span>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" />
              <span>marutirubber@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Maruti Engineering Works. All Rights Reserved. Manufactured in Rajkot, Gujarat.</p>
          <div className="footer-cert-badges">
            <div className="footer-cert-badge">
              <CheckCircle2 className="footer-cert-icon" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
            <div className="footer-cert-badge">
              <CheckCircle2 className="footer-cert-icon" />
              <span>FDA COMPLIANT COMPOUNDS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
