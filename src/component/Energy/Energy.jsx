import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import "./Energy.css";

const Energy = () => {
  const [formData, setFormData] = useState({
    energyProvider: "",
    electricityBill: "",
    renewableEnergy: "",
    renewablePercentage: [0],
    naturalGas: "",
    gasUsage: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    console.log("Form data:", formData);
    // Handle form submission logic here
  };

  const handleSkip = () => {
    console.log("Skipped energy profile setup");
    // Handle skip logic here
  };

  return (
    <div className="energy-profile">
      {/* Header */}
      <header className="energy-header">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo">
              <svg 
                className="logomark" 
                width="28" 
                height="28" 
                viewBox="0 0 28 28" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M14.0002 2.33334V25.6667M22.2497 5.75042L5.75058 22.2496M25.6668 14H2.3335M22.2497 22.2496L5.75058 5.75042" 
                  stroke="#C1F17E" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="brand-name">CarbonWise</span>
            </div>
          </div>
        </div>
        <div className="header-divider"></div>
      </header>

      {/* Main Content */}
      <main className="energy-main">
        {/* Progress Bar */}
        <div className="progress-container">
          <Progress value={75} className="progress-bar" />
        </div>

        {/* Form Container */}
        <div className="form-container">
          <div className="step-info">
            <h1 className="step-title">Let's understand your energy usage</h1>
            <p className="step-description">
              Don't worry if you don't have exact figures. You can provide estimates now and update them later.
            </p>
          </div>

          <div className="form-section">
            {/* Primary Energy Provider */}
            <div className="form-field">
              <label className="field-label">Primary energy provider</label>
              <Select onValueChange={(value) => handleInputChange("energyProvider", value)}>
                <SelectTrigger className="select-trigger">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electricity-company-1">Local Electric Company</SelectItem>
                  <SelectItem value="electricity-company-2">Green Energy Co.</SelectItem>
                  <SelectItem value="electricity-company-3">PowerGrid Inc.</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Average Monthly Electricity Bill */}
            <div className="form-field">
              <label className="field-label">Average monthly electricity bill</label>
              <Select onValueChange={(value) => handleInputChange("electricityBill", value)}>
                <SelectTrigger className="select-trigger">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="51-100">$51 - $100</SelectItem>
                  <SelectItem value="101-200">$101 - $200</SelectItem>
                  <SelectItem value="201-300">$201 - $300</SelectItem>
                  <SelectItem value="301-500">$301 - $500</SelectItem>
                  <SelectItem value="500+">$500+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Do you use renewable energy? */}
            <div className="form-field">
              <label className="field-label">Do you use renewable energy?</label>
              <RadioGroup 
                value={formData.renewableEnergy}
                onValueChange={(value) => handleInputChange("renewableEnergy", value)}
                className="radio-group"
              >
                <div className="radio-item">
                  <RadioGroupItem value="yes" id="renewable-yes" className="radio-input" />
                  <label htmlFor="renewable-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <RadioGroupItem value="no" id="renewable-no" className="radio-input" />
                  <label htmlFor="renewable-no" className="radio-label">No</label>
                </div>
              </RadioGroup>
            </div>

            {/* Renewable Energy Percentage Slider */}
            {formData.renewableEnergy === "yes" && (
              <div className="form-field slider-field">
                <label className="field-label">
                  If yes: What percentage of your energy comes from renewable sources? (slider)
                </label>
                <div className="slider-container">
                  <Slider
                    value={formData.renewablePercentage}
                    onValueChange={(value) => handleInputChange("renewablePercentage", value)}
                    max={100}
                    step={1}
                    className="renewable-slider"
                  />
                  <div className="slider-value">{formData.renewablePercentage[0]}%</div>
                </div>
              </div>
            )}

            {/* Do you use natural gas? */}
            <div className="form-field">
              <label className="field-label">Do you use natural gas? (Yes/No toggle)</label>
              <RadioGroup 
                value={formData.naturalGas}
                onValueChange={(value) => handleInputChange("naturalGas", value)}
                className="radio-group"
              >
                <div className="radio-item">
                  <RadioGroupItem value="yes" id="gas-yes" className="radio-input" />
                  <label htmlFor="gas-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <RadioGroupItem value="no" id="gas-no" className="radio-input" />
                  <label htmlFor="gas-no" className="radio-label">No</label>
                </div>
              </RadioGroup>
            </div>

            {/* Average Monthly Gas Usage */}
            {formData.naturalGas === "yes" && (
              <div className="form-field">
                <label className="field-label">If yes: Average monthly gas usage</label>
                <Select onValueChange={(value) => handleInputChange("gasUsage", value)}>
                  <SelectTrigger className="select-trigger">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-25">0 - 25 therms</SelectItem>
                    <SelectItem value="26-50">26 - 50 therms</SelectItem>
                    <SelectItem value="51-100">51 - 100 therms</SelectItem>
                    <SelectItem value="101-200">101 - 200 therms</SelectItem>
                    <SelectItem value="200+">200+ therms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Action Buttons */}
            <div className="button-section">
              <Button 
                onClick={handleContinue}
                className="continue-button"
              >
                Continue
              </Button>
              <Button 
                onClick={handleSkip}
                variant="ghost"
                className="skip-button"
              >
                Skip
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Energy;