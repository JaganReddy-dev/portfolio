import CheckIcon from "../../Icons/CheckIcon";
import CloseIcon from "../../Icons/CloseIcon";

const SuccessDialog = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mx-4 max-w-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckIcon />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Message sent successfully!
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Thank you for your message. I'll get back to you soon!
        </p>
      </div>
    </div>
  );
};

export default SuccessDialog;
