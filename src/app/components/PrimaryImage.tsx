import React from "react";
import Image from "next/image";
import Link from "next/link";

function PrimaryImage() {
  return (
    <div className="relative flex items-center justify-center pt-32">
      <Image
        alt="Main Page Image"
        src="/Takharag_BG_Main.png"
        width={2200}
        height={1000}
        className="absolute rounded-3xl brightness-75 contrast-150"
      />

      <div className="relative text-center p-8">
        <h1 className="text-primary text-6xl font-bold mb-6">
          ! تخارج من مشروعك بأسهل طريقة
        </h1>
        <h2 className="text-2xl text-white mb-12">
          منصة تخارج تسمح لملاك المشاريع بالتخلص من مشاريعهم السابقة عن طريق
          عرضها في المنصة في بيئة آمنة وموثوقة
        </h2>

        <Link href="/addPost">
          <button className="bg-primary text-black font-bold text-xl py-4 px-8 rounded-lg hover:bg-background hover:text-white transition-colors duration-150">
            أضف مشروعك
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PrimaryImage;
