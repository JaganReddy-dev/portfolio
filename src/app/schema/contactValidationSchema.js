const contactValidationSchema = {
  name: (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]*$/.test(name))
      return "Name can only contain letters and spaces";
    return "";
  },

  email: (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  },

  message: (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    if (message.trim().length > 1000)
      return "Message must be less than 1000 characters";
    return "";
  },
};

export default contactValidationSchema;
