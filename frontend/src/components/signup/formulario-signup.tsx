'use client'

import { useState } from 'react'
import Image from 'next/image'
import StepOne from './etapa-um'
import StepTwo from './etapa-dois'
import StepThree from './etapa-tres'

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
  })

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col-reverse px-5 md:flex-row lg:px-40">
      <div className="bg-background flex w-full flex-col justify-center rounded-md p-8 md:w-1/2 md:p-16">
        <Image
          priority
          src="/images/signup.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vh"
          className="h-[70%] w-full rounded-md object-contain"
        />
      </div>

      <div className="bg-background flex w-full items-center justify-center p-8 md:w-1/2 md:p-16">
        <div className="w-full max-w-md">
          {currentStep === 1 && (
            <div>
              <StepOne
                email={formData.email}
                updateFormData={updateFormData}
                handleNext={handleNext}
              />

              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Já tem uma conta?{' '}
                  <a href="/login" className="text-primary hover:underline">
                    Faça login
                  </a>
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <StepTwo
              companyName={formData.companyName}
              updateFormData={updateFormData}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <StepThree
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
  )
}
