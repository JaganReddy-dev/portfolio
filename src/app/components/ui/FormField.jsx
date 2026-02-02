import ErrorIcon from "../../Icons/ErrorIcon"
import CheckIcon from "../../Icons/CheckIcon"

const FormField = ({
  type = "text",
  id,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  rows = null,
  showSuccess = false,
  autoComplete = "off", // default to off if not provided
}) => {
  const getFieldClasses = () => {
    const baseClasses =
      "w-full px-4 py-3 border rounded-lg focus:ring-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"

    if (error) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500`
    }
    if (value && !error) {
      return `${baseClasses} border-green-500 focus:border-green-500 focus:ring-green-500`
    }
    return `${baseClasses} border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500`
  }

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={getFieldClasses()}
          autoComplete={autoComplete} // <--- pass it here
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={getFieldClasses()}
          autoComplete={autoComplete} // <--- pass it here
          required
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <ErrorIcon />
          {error}
        </p>
      )}

      {value && !error && showSuccess && (
        <p className="text-green-500 text-sm mt-1 flex items-center">
          <CheckIcon />
        </p>
      )}
    </div>
  )
}

export default FormField
