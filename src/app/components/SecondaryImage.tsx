import React from "react";
import Image from "next/image";
import Link from "next/link";

function SecondaryImage() {
  return (
    <div className="relative flex items-center justify-center py-4">
      <Image
        alt="Secpndary Page Image"
        src="/Takharag_BG_Second.png"
        fill
        className="absolute inset-0 object-cover rounded-3xl brightness-75 contrast-150"
      />

      <div className="relative text-center">
        <h1 className="text-primary text-6xl font-bold mb-6">
          تدور على مشروع جاهز ودك تستثمر فيه؟
        </h1>
        <h2 className="text-2xl text-white mb-12">
          منصة تخارج تسمح للمستثمرين والراغبين في شراء مشاريع معروضة على المنصة
          بكل سهولة وأريحية
        </h2>

        <Link href="/browsePosts">
          <button className="bg-primary text-black font-bold text-xl py-4 px-8 rounded-lg hover:bg-background hover:text-white transition-colors duration-150">
            ابحث
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SecondaryImage;
