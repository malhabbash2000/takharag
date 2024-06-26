import React from "react";
import Image from "next/image";
import Link from "next/link";

function SecondaryImage() {
  return (
    <div className="relative text-center">
      <Image
        alt="Secpndary Page Image"
        src="/Takharag_BG_Second.png"
        width={2200}
        height={800}
        className="rounded-2xl m-6 brightness-75 contrast-150"
      />
      <div className="w-full absolute top-0 left-0 text-center">
        <h1 className=" text-primary text-9xl font-bold text-center mt-52">
          تدور على مشروع جاهز ودك تستثمر فيه؟
        </h1>
        <h2 className="text-4xl text-center text-white mt-16 font-bold">
          منصة تخارج تسمح للمستثمرين والراغبين في شراء مشاريع معروضة على المنصة
          بكل سهولة وأريحية
        </h2>
        <div className="w-full h-full">
          <button className="text-black font-bold text-3xl  bg-primary h-20 w-96 px-6 m-32  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-background hover:text-white">
            <Link className="w-full h-full" href="/browsePosts">
              ابحث
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondaryImage;
