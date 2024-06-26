// components/LoginModal.tsx
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("main");

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

//  anything

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      id="main"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl mb-4">تسجيل الدخول</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">
              الإيميل أو رقم الجوال:
            </label>
            <input
              type="text"
              name="username"
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
            دخول
          </button>
        </form>
        <button onClick={onRequestClose} className="mt-4 text-gray-600">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
