import styles from "../page.module.css";
import Header from "../components/Header";
import PrimaryImage from "../components/PrimaryImage";
import Link from "next/link";
import React from 'react'

function addPost() {
  return (
    <div className={styles.background}>
        <Header></Header>
      <form method="post">
        <legend>أضف مشروعك للبيع</legend>
        <div className="mb-4">
          {/* proj name */}
            <label htmlFor="projName"></label>
            <input className={styles.input} type="text" id="projName" name="projName" placeholder="عنوان المشروع" />
            <br />
            {/* city */}
            <label htmlFor="city"></label>
            <input type="text" id="city" name="city" placeholder="المدينة" />
            <br />
            {/* price */}
            <label htmlFor="price"></label>
            <input type="text" id="price" name="price" placeholder="السعر المقترح" />
            <br />
            {/* projDesc */}
            <label htmlFor="projDesc"></label>
            <input type="text" id="projDesc" name="projDesc" placeholder="وصف المشروع" />
            <br />
            {/* sellRes */}
            <label htmlFor="sellRes"></label>
            <input type="text" id="sellRes" name="sellRes" placeholder="سبب البيع" />
            <br />
            {/* pic */}
            <label htmlFor="pic"></label>
            <input type="text" id="pic" name="pic" placeholder="إضافة صور للمشروع" />
        </div>
      </form>
    </div>
  )
}

export default addPost;


