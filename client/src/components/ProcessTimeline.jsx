import { useEffect, useRef } from 'react'

const PROCESS_STEPS_DATA = [
  {
    step: '01',
    title: 'Requirement Analysis',
    desc: 'Reviewing client drawing sheets, tolerances, target fluid contact, pressure ranges, temperature boundaries, and target volume.'
  },
  {
    step: '02',
    title: 'Product Design',
    desc: 'Elastomer chemical compounding design and 3D cad component rendering. Simulating compression contraction behaviors.'
  },
  {
    step: '03',
    title: 'Tool Development',
    desc: 'In-house CNC metal mould machining. Heat treatment and surface hardening of structural cavities for zero wear.'
  },
  {
    step: '04',
    title: 'Manufacturing',
    desc: 'Precision hydraulic compounding compression and injection vulcanization cycles. Rigid temperature and timing monitors.'
  },
  {
    step: '05',
    title: 'Quality Testing',
    desc: 'Physical tests: Tensile properties, Shore A durometer tests, heat aging chamber cycles, and optical projection checks.'
  },
  {
    step: '06',
    title: 'Packaging',
    desc: 'Anti-static polythene bagging, vacuum desiccant packaging, and export-grade cardboard crating.'
  },
  {
    step: '07',
    title: 'Delivery',
    desc: 'Global logistics container shipments. Custom clearance coordination for seamless port-to-factory delivery.'
  }
];

function ProcessTimeline({ activeProcessStep, setActiveProcessStep }) {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setActiveProcessStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveProcessStep]);

  return (
    <section className="section-padding process-sec" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="about-subtitle">MANUFACTURING CYCLE</span>
          <h2 className="section-title center">Our Precision Timeline</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Scroll down to watch our step-by-step manufacturing cycle activate, or click on any milestone block to inspect standard parameters.
          </p>
        </div>

        <div className="process-layout">
          <div className="process-line"></div>
          {PROCESS_STEPS_DATA.map((stepData, index) => (
            <div
              className={`process-step-node ${activeProcessStep === index ? 'active' : ''}`}
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              data-index={index}
              onClick={() => setActiveProcessStep(index)}
            >
              <div className="process-dot"></div>
              <div className="process-left">
                <div className="process-num">Stage {stepData.step}</div>
                <h3 className="process-step-title">{stepData.title}</h3>
              </div>
              <div className="process-right">
                <div className="process-card">
                  <p className="process-step-desc">{stepData.desc}</p>
                  {activeProcessStep === index && (
                    <div
                      className="anim-fade-in-up"
                      style={{
                        marginTop: '1rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px dashed var(--border)',
                        fontSize: '0.8rem',
                        color: 'var(--accent)',
                        fontWeight: 600
                      }}
                    >
                      ✓ Rigorous Checklists & Quality Verification Active
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
