import React from "react";
import Image from "next/image";
import Link from "next/link";

function PrimaryImage() {
  return (
    <div className="relative text-center">
      <Image
        alt="Main Page Image"
        src="/Takharag_BG_Main.png"
        width={2200}
        height={800}
        className="rounded-2xl m-6 brightness-75 contrast-150"
      />
      <div className="w-full absolute top-0 left-0 text-center ">
        <h1 className=" text-primary text-9xl font-bold text-center mt-52">
          ! تخارج من مشروعك بأسهل طريقة
        </h1>
        <h2 className="text-4xl text-center text-white mt-20 font-bold">
          منصة تخارج تسمح لملاك المشاريع بالتخلص من مشاريعهم السابقة عن طريق
          عرضها في المنصة في بيئة آمنة وموثوقة
        </h2>
        <div className="w-full h-full">
          <button className="text-black font-bold text-3xl  bg-primary h-20 w-96 px-6 m-56  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-background hover:text-white">
            <Link className="w-full h-full" href="/addPost">
              أضف مشروعك
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrimaryImage;
