import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
import { Helmet } from "react-helmet-async";
function AddPage() {
  async function postBlog(values) {
    const response = await fetch("http://localhost:3003/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getFetch();
  }
  async function deleteBlog(id) {
    await fetch("http://localhost:3003/" + id, {
      method: "DELETE",
    });
    await getFetch();
  }
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Formik
        initialValues={{ icon: "", title: "", description: "" }}
        validationSchema={Yup.object({
          icon: Yup.string()
            .max(105, "Must be 15 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(1000, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            postBlog(values);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="icon">Icon </label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="description" />
          <ErrorMessage name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div>
        <Helmet>
          <title>Add Page</title>
        </Helmet>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Title</th>
              <th>Description</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {dbData.map((x) => (
              <tr>
                <td>
                  <i className={x.icon}></i>
                </td>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>
                  <i
                    onClick={() => deleteBlog(x._id)}
                    class="fa-regular fa-trash-can"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddPage;
