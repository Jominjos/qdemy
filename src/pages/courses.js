import React from "react";
import Navbar from "../comp/navbar";

import Editcoursedetail from "../comp/editCourses";
import AddcourseForm from "../comp/addForm";
const courses = () => {
  return (
    <>
      <Navbar />
      <AddcourseForm />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Editcoursedetail />
          </div>
        </div>
      </section>
    </>
  );
};

export default courses;
