import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import LoginModal from "./LoginModal";
import Link from "next/link";
import PasswordInput from "./PasswordInput";

function Login() {
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
          سجل دخول
        </Link>
        <p className="text-white font-bold pt-2"> لديك حساب بالفعل؟</p>
      </div>
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal}></LoginModal>
    </div>
  );
}

Modal.setAppElement("body");

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-background bg-opacity-10"
    >
      <div className="bg-background rounded-3xl shadow-2xl p-12 w-full max-w-4xl mx-auto relative">
        <h2 className="text-2xl mb-14 text-center font-bold text-primary">
          إنشاء حساب جديد
        </h2>
        <form>
          <div className="flex space-x-32">
            <div className="flex items-center gap-4 relative">
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="w-80 p-3 bg-zinc-800 text-white border border-zinc-700 rounded placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="الاسم الأخير"
              />
              <div className="absolute flex items-center gap-2 right-4">
                <Image
                  alt="User Logo"
                  src="/user-interface.png"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="p-3 bg-zinc-800 text-white border border-zinc-700 rounded w-80 placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="الاسم الأول"
              />
              <div className="absolute flex items-center gap-2 right-4">
                <Image
                  alt="User Logo"
                  src="/user-interface.png"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-32 mt-7">
            <div className="flex items-center gap-4 relative">
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                className="p-3 bg-zinc-800 text-white border border-zinc-700 rounded w-80 placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="رقم الجوال"
              />
              <div className="absolute flex items-center gap-2 right-4">
                <Image
                  alt="Phone Logo"
                  src="/telephone.png"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              <input
                id="email"
                type="text"
                name="email"
                className="p-3 bg-zinc-800 text-white border border-zinc-700 rounded w-80 placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="البريد الإلكتروني"
              />
              <div className="absolute flex items-center gap-2 right-4">
                <Image alt="Mail Logo" src="/mail.png" width={20} height={20} />
              </div>
            </div>
          </div>

          <div className="flex space-x-32 mt-7">
            <PasswordInput
              name="confirmpassword"
              placeholder="تأكيد كلمة المرور"
            />
            <PasswordInput name="password" placeholder="كلمة المرور" />
          </div>
          <Login />
        </form>
        <div className="pt-8">
          <button
            type="submit"
            className="w-full py-3 bg-primary text-black font-bold rounded hover:bg-zinc-800 hover:text-white"
          >
            سجل
          </button>
        </div>
        <br />
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          ×<i className="fas fa-times"></i>
        </button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
