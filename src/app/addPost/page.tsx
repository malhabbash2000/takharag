import styles from "../page.module.css";
import Header from "../components/Header";
import Link from "next/link";
import React from 'react'

function addPost() {
  return (
    <div className={`${"flex"} ${"justify-center"} ${"flex-col"} ${"items-center"}`}>
      <Header></Header>
    <div className={`${styles.background} ${"flex"} ${"justify-center"} ${"flex-col"} ${"items-center"}`}>
      <form method="post" className={`${styles["form-add"]}`}>
        <legend className={`${styles["title-form"]}`}>أضف مشروعك للبيع</legend>
        
        <div className="m-4">
          {/* proj name */}
            <label htmlFor="projName"></label>
            <input className={styles.input} type="text" id="projName" name="projName" placeholder="عنوان المشروع" />
            <br />
            {/* city */}
            <div className="flex flex-row gap-5" >
            <label htmlFor="city"></label>
            <input className={`${styles.input} w-1/2 h-12`} type="text" id="city" name="city" placeholder="المدينة" />
            <br />
            {/* price */}
            <label htmlFor="price"></label>
            <input className={`${styles.input} w-1/2 h-12`} type="text" id="price" name="price" placeholder="السعر المقترح" />
            <br />
            </div>
            {/* projDesc */}
            <label htmlFor="projDesc"></label>
            <input className={`${styles.input} ${"projDesc"}`} type="text" id="projDesc" name="projDesc" placeholder="وصف المشروع" />
            <br />
            {/* sellRes */}
            <label htmlFor="sellRes"></label>
            <input className={`${styles.input} ${"sellRes"}`} type="text" id="sellRes" name="sellRes" placeholder="سبب البيع" />
            <br />
            {/* pic */}
            <label htmlFor="pic"></label>
            <input className={`${styles.input} ${"pic"}`} type="text" id="pic" name="pic" placeholder="إضافة صور للمشروع" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default addPost;


