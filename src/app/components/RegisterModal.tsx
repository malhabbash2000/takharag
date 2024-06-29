import React from "react";
import Modal from "react-modal";

Modal.setAppElement("main");

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      id="main"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl mb-4">إنشاء حساب جديد</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="firstName">
              الاسم الأول
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="lastName">
              الاسم الأخير
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phoneNumber">
              رقم الجوال
            </label>
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              الايميل
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              كلمة المرور
            </label>
            <input
              id="password"
              type="text"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="passVer">
              تأكيد كلمة المرور
            </label>
            <input
              id="passVer"
              type="text"
              name="passVer"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">كلمة المرور:</label>
            <input
              type="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            سجل
          </button>
        </form>
        <button onClick={onRequestClose} className="mt-4 text-gray-600">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
