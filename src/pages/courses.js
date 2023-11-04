import React, { useState } from "react";
import Navbar from "../comp/navbar";

import Editcoursedetail from "../comp/editCourses";
import AddcourseForm from "../comp/addForm";
import Footer from "../comp/footer";
export default function Courses() {
  const [dbChange, setDbchange] = useState(true);
  return (
    <>
      <Navbar />
      <AddcourseForm setDbchange={setDbchange} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Editcoursedetail dbChange={dbChange} setDbchange={setDbchange} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
