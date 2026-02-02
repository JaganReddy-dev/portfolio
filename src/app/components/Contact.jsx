"use client"

import FormField from "./ui/FormField"
import SuccessDialog from "./ui/SuccessDialog"
import useContactForm from "../hooks/useContactForm"

const Contact = () => {
  const {
    formData,
    validationErrors,
    showSuccessDialog,
    isSubmitting,
    handleInputChange,
    submitForm,
    setShowSuccessDialog,
  } = useContactForm()

  return (
    <>
      <section id="contact" className="relative py-24 px-6">
        {/* Content wrapper */}
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Connect</h1>
            <p className="mt-3 text-gray-400">Let’s build something together</p>
          </div>

          {/* Form container */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-8">
            <div className="space-y-6">
              <FormField
                id="name"
                name="name"
                label="Name"
                placeholder="Your full name"
                autoComplete="name"
                value={formData.name}
                error={validationErrors.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                showSuccess
              />

              <FormField
                type="email"
                id="email"
                name="email"
                label="Email"
                placeholder="your.email@example.com"
                autoComplete="email"
                value={formData.email}
                error={validationErrors.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                showSuccess
              />

              <FormField
                type="textarea"
                id="message"
                name="message"
                label="Message"
                placeholder="Tell me about your idea, role, or project..."
                autoComplete="off"
                value={formData.message}
                error={validationErrors.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={5}
                showSuccess
              />

              <button
                type="button"
                onClick={submitForm}
                disabled={isSubmitting}
                className={`w-full rounded-xl px-6 py-3 font-medium transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
                  isSubmitting
                    ? "bg-gray-600 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SuccessDialog
        isVisible={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
      />
    </>
  )
}

export default Contact
