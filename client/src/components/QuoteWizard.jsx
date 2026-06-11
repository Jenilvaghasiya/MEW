import { X, Upload, ChevronRight, FileCheck } from 'lucide-react'

function QuoteWizard({
  quoteModalOpen,
  resetQuoteWizard,
  wizardStep,
  setWizardStep,
  quoteForm,
  handleWizardInput,
  selectMaterialInWizard,
  simulateFileUpload,
  handleNextStep,
  handlePrevStep,
  handleQuoteSubmit,
  quoteSuccessData
}) {
  if (!quoteModalOpen) return null;

  return (
    <div className="wizard-backdrop">
      <div className="wizard-card">
        <button className="wizard-close" onClick={resetQuoteWizard} aria-label="Close Wizard">
          <X size={16} />
        </button>
        <div className="wizard-header">
          <h3 className="wizard-title">RFQ Configuration Wizard</h3>
          <span className="wizard-sub">Request customized compounds and dimension limits from Maruti Engineering</span>
          
          <div className="wizard-steps-indicator">
            <div className={`wizard-step-node ${wizardStep >= 1 ? 'active' : ''} ${wizardStep > 1 ? 'completed' : ''}`}>1</div>
            <div className={`wizard-step-node ${wizardStep >= 2 ? 'active' : ''} ${wizardStep > 2 ? 'completed' : ''}`}>2</div>
            <div className={`wizard-step-node ${wizardStep >= 3 ? 'active' : ''} ${wizardStep > 3 ? 'completed' : ''}`}>3</div>
            <div className={`wizard-step-node ${wizardStep >= 4 ? 'active' : ''}`}>4</div>
          </div>
        </div>

        <div className="wizard-body">
          {wizardStep === 1 && (
            <div className="anim-fade-in-up">
              <h4 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>
                1. Select Component Category & Material Compound
              </h4>
              <div className="form-group">
                <label className="form-label" htmlFor="wizard-category">Select Component Category</label>
                <select
                  className="form-input"
                  name="category"
                  id="wizard-category"
                  value={quoteForm.category}
                  onChange={handleWizardInput}
                >
                  <option value="Rubber Gaskets">Rubber Gaskets</option>
                  <option value="Rubber Washers">Rubber Washers</option>
                  <option value="O-Rings">O-Rings</option>
                  <option value="Oil Seals">Oil Seals</option>
                  <option value="Rubber Bushes">Rubber Bushes</option>
                  <option value="Moulded Rubber Parts">Moulded Rubber Parts</option>
                  <option value="Industrial Rubber Components">Industrial Rubber Components</option>
                  <option value="Custom Engineering Parts">Custom Engineering Parts</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Elastomer Base Compound</label>
                <div className="material-radio-grid">
                  {['Natural Rubber', 'Nitrile Rubber', 'EPDM Rubber', 'Silicon Rubber', 'Neoprint Rubber', 'Viton (FKM)'].map((mat) => (
                    <div
                      key={mat}
                      className={`material-radio-card ${quoteForm.material === mat ? 'active' : ''}`}
                      onClick={() => selectMaterialInWizard(mat)}
                    >
                      <div className="material-radio-dot"></div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {wizardStep === 2 && (
            <div className="anim-fade-in-up">
              <h4 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>
                2. Dimensions (mm) & Order Volume
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Leave specific values blank if they do not apply to your category (e.g. thickness for standard O-rings).
              </p>
              
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-outerDia">Outer Diameter (OD)</label>
                  <input
                    type="text"
                    name="outerDia"
                    id="wizard-outerDia"
                    placeholder="e.g. 150 mm"
                    className="form-input"
                    value={quoteForm.outerDia}
                    onChange={handleWizardInput}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-innerDia">Inner Diameter (ID)</label>
                  <input
                    type="text"
                    name="innerDia"
                    id="wizard-innerDia"
                    placeholder="e.g. 120 mm"
                    className="form-input"
                    value={quoteForm.innerDia}
                    onChange={handleWizardInput}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-thickness">Thickness / CS</label>
                  <input
                    type="text"
                    name="thickness"
                    id="wizard-thickness"
                    placeholder="e.g. 5 mm"
                    className="form-input"
                    value={quoteForm.thickness}
                    onChange={handleWizardInput}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-quantity">Annual Volume (Pieces)</label>
                  <input
                    type="number"
                    name="quantity"
                    id="wizard-quantity"
                    className="form-input"
                    value={quoteForm.quantity}
                    onChange={handleWizardInput}
                    min="100"
                  />
                </div>
              </div>
            </div>
          )}

          {wizardStep === 3 && (
            <div className="anim-fade-in-up">
              <h4 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>
                3. Upload Blueprint & Contact Details
              </h4>
              <div className="form-group">
                <label className="form-label">Upload Technical Drawing (CAD / Blueprint)</label>
                <label className="drawing-upload-sim">
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={simulateFileUpload}
                    accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.png,.jpg"
                  />
                  <Upload className="drawing-upload-icon" />
                  <div className="drawing-upload-text">
                    {quoteForm.drawingName ? `Selected: ${quoteForm.drawingName}` : 'Click to select blueprint file'}
                  </div>
                  <div className="drawing-upload-sub">Supports PDF, DWG, STEP, DXF, IGS or high-res images</div>
                </label>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-company">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    id="wizard-company"
                    placeholder="e.g. Siemens Gmbh"
                    className="form-input"
                    required
                    value={quoteForm.company}
                    onChange={handleWizardInput}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-email">B2B Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    id="wizard-email"
                    placeholder="procurement@company.com"
                    className="form-input"
                    required
                    value={quoteForm.email}
                    onChange={handleWizardInput}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-country">Target Country</label>
                  <input
                    type="text"
                    name="country"
                    id="wizard-country"
                    placeholder="e.g. Germany"
                    className="form-input"
                    required
                    value={quoteForm.country}
                    onChange={handleWizardInput}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wizard-phone">WhatsApp/Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="wizard-phone"
                    placeholder="+49 40 1234567"
                    className="form-input"
                    value={quoteForm.phone}
                    onChange={handleWizardInput}
                  />
                </div>
              </div>
            </div>
          )}

          {wizardStep === 4 && quoteSuccessData && (
            <div className="anim-fade-in-up quote-summary-sheet">
              <div className="summary-header">
                <div>
                  <FileCheck style={{ color: '#10b981', width: '2.5rem', height: '2.5rem' }} />
                  <h4 className="summary-heading">Request Received Successfully</h4>
                </div>
                <div className="summary-ref">Ref ID: {quoteSuccessData.refId}</div>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Company Name:</span>
                <span className="summary-val">{quoteSuccessData.company}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Component Category:</span>
                <span className="summary-val">{quoteSuccessData.category}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Polyester / Polymer Compound:</span>
                <span className="summary-val">{quoteSuccessData.material}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Specified Dimensions:</span>
                <span className="summary-val">
                  {quoteSuccessData.outerDia ? `${quoteSuccessData.outerDia} OD` : 'N/A'} × {quoteSuccessData.innerDia ? `${quoteSuccessData.innerDia} ID` : 'N/A'} × {quoteSuccessData.thickness ? `${quoteSuccessData.thickness} Thk` : 'N/A'}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Annual Volume target:</span>
                <span className="summary-val">{quoteSuccessData.quantity} Pieces</span>
              </div>
              {quoteSuccessData.drawingName && (
                <div className="summary-row">
                  <span className="summary-label">Attached Blueprint File:</span>
                  <span className="summary-val" style={{ color: 'var(--accent)' }}>{quoteSuccessData.drawingName}</span>
                </div>
              )}
              <div className="summary-row">
                <span className="summary-label">Procurement Target:</span>
                <span className="summary-val">{quoteSuccessData.country} ({quoteSuccessData.email})</span>
              </div>

              <div className="summary-total-lead">
                <span>Estimated Curing Lead Time:</span>
                <span>{quoteSuccessData.leadTime}</span>
              </div>
              
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
                An automated copy of this RFQ package has been dispatched to your corporate email. Our Rajkot engineering desk will contact you within 24 hours.
              </p>
            </div>
          )}
        </div>

        <div className="wizard-footer">
          {wizardStep < 4 ? (
            <>
              <button
                className="btn btn-secondary"
                onClick={handlePrevStep}
                disabled={wizardStep === 1}
                style={{ opacity: wizardStep === 1 ? 0.5 : 1 }}
              >
                Back
              </button>

              {wizardStep === 3 ? (
                <button
                  className="btn btn-primary"
                  onClick={handleQuoteSubmit}
                  disabled={!quoteForm.company || !quoteForm.email || !quoteForm.country}
                  id="mew-wizard-submit-btn"
                >
                  Submit RFQ Summary
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={handleNextStep}
                  id={`mew-wizard-next-${wizardStep}`}
                >
                  Next Step
                  <ChevronRight size={16} />
                </button>
              )}
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={resetQuoteWizard}
              style={{ margin: '0 auto', width: '100%' }}
              id="mew-wizard-finish-btn"
            >
              Close RFQ Panel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuoteWizard
