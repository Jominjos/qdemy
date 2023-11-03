import React, { useState } from "react";

import { ClipLoader } from "react-spinners";
import "../styles/addcourse.css";
import axios from "axios";

const AddcourseForm = () => {
  //   const [Eloading, setELoading] = useState(false);
  const dvalue = { courseName: "", courseimg: "", fees: "" };
  const [Sloading, setSLoading] = useState(false);

  const [form_input, setForm_input] = useState(dvalue);
  function eventHandle(event) {
    let [name2, value2] = [event.target.name, event.target.value];
    //console.log(name2 , value2);
    let val = { ...form_input, [name2]: value2 };
    console.log(val);
    setForm_input(val);
  }

  //   function handleEditChange(event) {
  //     let [name3, value3] = [event.target.name, event.target.value];
  //     let wal = { ...euser, [name3]: value3 };
  //     console.log(wal);
  //     seteuser(wal);
  //     console.log(euser);
  //   }

  function formreset() {
    setForm_input(dvalue);
  }

  //   function editcancel() {
  //     seteuser(dvalue);
  //     setedit(false);
  //   }

  function formSubmit(event) {
    event.preventDefault();
    setSLoading(true);
    let valu = { ...form_input };
    //console.log(valu);
    axios.post("/api/courses", { ...valu }).then((res) => {
      console.log(res);

      setSLoading(false);
    });

    setForm_input(dvalue);
  }

  //   function editsubmit(event) {
  //     event.preventDefault();
  //     setELoading(true);
  //     console.log(euser);
  //     axios
  //       .put("https://scool-swart.vercel.app/api/student", { ...euser })
  //       .then((res) => {
  //         console.log(res);
  //         setDbchange((prev) => !prev);
  //         setELoading(false);
  //         setedit(false);
  //       });
  //   }

  // function delCourse(data) {
  //   let delid = data.id;
  //   //console.log(delid);
  //   setDLoading(true);
  //   axios
  //     .delete("https://scool-swart.vercel.app/api/student", {
  //       data: { id: delid + "" },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setDbchange((prev) => !prev);
  //       setDLoading(false);
  //       setedit(false);
  //     });
  // }
  return (
    <div>
      <h2 id="addHeading" style={{ textAlign: "center" }}>
        Add course
      </h2>
      <div id="form-con" className="d-flex justify-content-center">
        <form className="stu-form " id="addForm" onSubmit={formSubmit}>
          <div className="mb-3">
            <div className="flex">
              <label className="form-label">Course Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="courseName"
                value={form_input.courseName}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex">
              <label className="form-label">img url</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="courseimg"
                value={form_input.courseimg}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex">
              <label className="form-label">Fees</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={eventHandle}
                name="fees"
                value={form_input.fees}
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button
              type="submit"
              className="btn btn-dark align-items-center d-flex me-2 "
            >
              <ClipLoader color="#ffffff" loading={Sloading} size={10} />
              Submit
            </button>

            <button
              type="reset"
              className="btn btn-outline-dark ms-2"
              onClick={formreset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddcourseForm;
