import Header from "../components/Header";
import React from "react";

function addPost() {
  return (
    <div className="relative">
      <Header />

      <div className="pt-10">
        <div className="bg-background rounded-3xl shadow-2xl pt-8 w-full max-w-4xl mx-auto h-full">
          <h2 className="text-2xl text-center font-bold text-primary">
            أضف مشروعك للبيع
          </h2>
          <form>
            <div className="flex m-6">
              <input
                id="postTitle"
                type="text"
                name="Post Title"
                className="w-full p-3 bg-zinc-800 text-white border border-zinc-700 rounded placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="عنوان المشروع"
              />
            </div>
            <div className="flex m-6 gap-6">
              <input
                id="postcity"
                type="text"
                name="Post City"
                className="w-full p-3 bg-zinc-800 text-white border border-zinc-700 rounded placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="المدينة"
              />
              <input
                id="postPrice"
                type="text"
                name="Post Price"
                className="w-full p-3 bg-zinc-800 text-white border border-zinc-700 rounded placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="السعر المقترح"
              />
            </div>
            <div className="flex m-6">
              <input
                id="posrDescription"
                type="text"
                name="Post Description"
                className="w-full p-10 bg-zinc-800 text-white border border-zinc-700 rounded placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
                placeholder="وصف المشروع"
              />
            </div>
            <div className="flex m-6">
              <select className="flex m-6">
                <option>عدم الرغبة في الإشراف على المشروع</option>
                <option>دخل المشروع لا يناسبني</option>
                <option>تكاليف المشروع أكثر من إيراداته</option>
                <option>موقع المشروع لا يناسبني</option>
                <option>عدم القدرة على تشغيل المشروع</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default addPost;
