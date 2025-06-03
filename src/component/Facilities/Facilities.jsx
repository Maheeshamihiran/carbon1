import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './facilities.css';

const Facilities = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    primaryLocation: '',
    locationSize: '',
    additionalLocations: '',
    ownershipType: '',
    buildingType: 'office'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    console.log('Facilities data:', formData);
    // Handle form submission
  };

  const handleSkip = () => {
    console.log('Skipped facilities form');
    // Handle skip action
  };

  return (
    <div className="facilities-container">
      {/* Navigation Header */}
      <div className="facilities-nav">
        <div className="nav-content">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M14.0002 2.33334V25.6667M22.2497 5.75042L5.75058 22.2496M25.6668 14H2.3335M22.2497 22.2496L5.75058 5.75042" 
                  stroke="#C1F17E" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="logo-text">CarbonWise</span>
          </div>
        </div>
       
      </div>

      {/* Main Content */}
      <div className="facilities-content">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="facilities-progress">
            <div className="progress-fill" style={{width: '50%'}}></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {/* Header */}
          <div className="form-header">
            <h1 className="form-title">Where do you operate?</h1>
            <p className="form-subtitle">
              Your facility details help us calculate more accurate emissions from heating, cooling, and electricity usage.
            </p>
          </div>

          {/* Form Fields */}
          <div className="form-section">
            {/* Primary Location */}
            <div className="field-group">
              <label className="field-label">Primary location</label>
              <input
                type="text"
                placeholder="Location"
                value={formData.primaryLocation}
                onChange={(e) => handleInputChange('primaryLocation', e.target.value)}
                className="facilities-input"
              />
            </div>

            {/* Location Size */}
            <div className="field-group">
              <label className="field-label">Primary location size (sq meters)</label>
              <input
                type="number"
                placeholder="Location size"
                value={formData.locationSize}
                onChange={(e) => handleInputChange('locationSize', e.target.value)}
                className="facilities-input"
              />
            </div>

            {/* Additional Locations */}
            <div className="field-group">
              <label className="field-label">Number of additional locations</label>
              <input
                type="number"
                placeholder="Label"
                value={formData.additionalLocations}
                onChange={(e) => handleInputChange('additionalLocations', e.target.value)}
                className="facilities-input"
              />
            </div>

            {/* Ownership Type */}
            <div className="field-group">
              <label className="field-label">Do you own or rent your facilities?</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="own"
                    name="ownershipType"
                    value="own"
                    checked={formData.ownershipType === 'own'}
                    onChange={(e) => handleInputChange('ownershipType', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="own" className="radio-label">Own</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="rent"
                    name="ownershipType"
                    value="rent"
                    checked={formData.ownershipType === 'rent'}
                    onChange={(e) => handleInputChange('ownershipType', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="rent" className="radio-label">Rent</label>
                </div>
              </div>
            </div>

            {/* Building Type */}
            <div className="field-group">
              <label className="field-label">Type of building</label>
              <div className="select-container">
                <select
                  value={formData.buildingType}
                  onChange={(e) => handleInputChange('buildingType', e.target.value)}
                  className="facilities-select"
                >
                  <option value="office">Office</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="school">School</option>
                  <option value="hospital">Hospital</option>
                  <option value="other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-section">
            <button 
              onClick={handleContinue}
              className="continue-button"
            >
              Continue
            </button>
            <button 
              onClick={handleSkip}
              className="skip-button"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;