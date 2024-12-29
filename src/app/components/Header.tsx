"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "./LoginModal";

// this put in separate file
// put logo in nav
function Logo() {
  return (
    <Link href="/">
      <Image
        src="/Takharag_Logo-removebg-preview.png"
        width={70}
        height={90.9}
        alt="Logo"
        className="transition-transform duration-300 transform hover:scale-90 hover:opacity-80"
      />
    </Link>
  );
}

function Nav() {
  return (
    <div className="flex flex-row justify-center gap-10 text-primary text-2xl">
      <Link
        href="/addPost"
        className="transition-transform duration-300 transform hover:scale-90 hover:opacity-80"
      >
        أضف عرض
      </Link>
      <Link
        href="/browsePosts"
        className="transition-transform duration-300 transform hover:scale-90 hover:opacity-80"
      >
        تصفح العروض
      </Link>
      <Link
        href="/"
        className="transition-transform duration-300 transform hover:scale-90 hover:opacity-80"
      >
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
    <div className="flex flex-row justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-90 hover:opacity-80">
      <Link
        href="#"
        onClick={openModal}
        className="text-primary text-2xl items-center"
      >
        تسجيل الدخول
      </Link>
      <img src="./user-interface.png" className="" />
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal}></LoginModal>
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full justify-between flex-row items-center bg-background p-4">
      <Login />
      <Nav />
      <Logo />
    </div>
  );
}

export default Header;
