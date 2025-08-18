"use client";

import FormField from "./ui/FormField";
import SuccessDialog from "./ui/SuccessDialog";
import useContactForm from "../hooks/useContactForm";

const Contact = () => {
  const {
    formData,
    validationErrors,
    showSuccessDialog,
    isSubmitting,
    handleInputChange,
    submitForm,
    setShowSuccessDialog,
  } = useContactForm();

  return (
    <>
      <section id="contact" className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white shadow-2xl dark:bg-gray-800 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Contact Me
          </h1>

          <div className="space-y-6">
            <FormField
              id="name"
              name="name"
              label="Name"
              placeholder="Your full name"
              value={formData.name}
              error={validationErrors.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              showSuccess={true}
            />

            <FormField
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="your.email@example.com"
              value={formData.email}
              error={validationErrors.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              showSuccess={true}
            />

            <FormField
              type="textarea"
              id="message"
              name="message"
              label="Message"
              placeholder="Your message here..."
              value={formData.message}
              error={validationErrors.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              showSuccess={true}
            />

            <button
              type="button"
              onClick={submitForm}
              disabled={isSubmitting}
              className={`w-full font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </section>

      <SuccessDialog
        isVisible={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
      />
    </>
  );
};

export default Contact;
