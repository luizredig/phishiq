"use client";

import { useState } from "react";
import EtapaUm from "./etapa-um";
import EtapaDois from "./etapa-dois";
import EtapaTres from "./etapa-tres";

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col-reverse justify-center px-5 md:flex-row lg:px-40">
      <div className="p-6 rounded-lg flex w-full items-center justify-center md:w-1/2 md:p-16">
        <div className="w-full">
          {currentStep === 1 && (
            <div>
              <EtapaUm
                email={formData.email}
                updateFormData={updateFormData}
                handleNext={handleNext}
              />

              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <a href="/login" className="text-primary hover:underline">
                    Faça login
                  </a>
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <EtapaDois
              companyName={formData.companyName}
              updateFormData={updateFormData}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <EtapaTres
              email={formData.email}
              companyName={formData.companyName}
              password={formData.password}
              confirmPassword={formData.confirmPassword}
              updateFormData={updateFormData}
              handleBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
