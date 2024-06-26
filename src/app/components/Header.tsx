"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "./LoginModal";

// this put in separate file
// put logo in nav
function Logo() {
  return (
    <Image
      src="/Takharag_Logo-removebg-preview.png"
      width={70}
      height={90.9}
      alt="Logo"
    />
  );
}

function Nav() {
  return (
    <div className="flex flex-row justify-center items-end gap-10 text-primary text-2xl">
      <Link href="/addPost" className="hover:text-white">
        أضف عرض
      </Link>
      <Link href="/browsePosts" className="hover:text-white">
        تصفح العروض
      </Link>
      <Link href="/" className="hover:text-white test">
        الرئيسية
      </Link>
    </div>
  );
}
// merge with nav
function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link
        href="#"
        onClick={openModal}
        className="text-primary hover:text-white text-2xl items-center"
      >
        تسجيل الدخول
      </Link>
      <img src="./user-interface.png" />
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal}></LoginModal>
    </div>
  );
}

function Header() {
  return (
    <div className="p-4 w-full flex flex-row justify-between items-center bg-background">
      <Login />
      <Nav />
      <Logo />
    </div>
  );
}

export default Header;
