import { useState } from "react";
import contactValidationSchema from "../schema/contactValidationSchema";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = contactValidationSchema[field](value);
    setValidationErrors((prev) => ({ ...prev, [field]: error }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setValidationErrors({ name: "", email: "", message: "" });
  };

  const validateForm = () => {
    const errors = {
      name: contactValidationSchema.name(formData.name),
      email: contactValidationSchema.email(formData.email),
      message: contactValidationSchema.message(formData.message),
    };
    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setShowSuccessDialog(true);
        resetForm();
        setTimeout(() => setShowSuccessDialog(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    validationErrors,
    showSuccessDialog,
    isSubmitting,
    handleInputChange,
    submitForm,
    setShowSuccessDialog,
  };
};

export default useContactForm;
