// components/LoginModal.tsx
import React, { useState } from "react";
import Modal from "react-modal";
import RegisterModal from "./RegisterModal";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "./PasswordInput";

function Register() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex flex-row justify-center items-center pt-4">
      <div className="flex justify-center items-center gap-2 mt-6">
        <Link
          href="#"
          onClick={openModal}
          className="text-primary hover:text-white text-2xl"
        >
          قم بالتسجيل الآن
        </Link>
        <p className="text-white font-bold pt-2"> ليس لديك حساب؟</p>
      </div>
      <RegisterModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      ></RegisterModal>
    </div>
  );
}

Modal.setAppElement("body");

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-background bg-opacity-80"
    >
      <div className="bg-background rounded-3xl shadow-2xl p-12 w-full max-w-4xl mx-auto relative">
        <h2 className="text-2xl mb-6 text-center font-bold text-primary pb-6">
          تسجيل الدخول
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-40 mb-8">
            <PasswordInput name="password" placeholder="كلمة المرور" />

            <div className="flex items-center relative">
              <div className="absolute flex items-center gap-2 right-2">
                <Image
                  alt="Mail login logo"
                  src="/mail.png"
                  width={20}
                  height={20}
                />
                <Image
                  alt="Phone login logo"
                  src="/telephone.png"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="text"
                name="username"
                className="p-3 bg-zinc-800 text-white border border-zinc-700 rounded w-80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="الإيميل أو رقم الجوال"
              />
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-md text-gray-400 hover:text-primary">
              نسيت كلمة المرور؟
            </a>
          </div>
          <Register />
        </form>
        <div className="pt-8">
          <button
            type="submit"
            className="w-full py-3 bg-primary text-black font-bold rounded hover:bg-zinc-800 hover:text-white"
          >
            دخول
          </button>
        </div>
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          ×
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
