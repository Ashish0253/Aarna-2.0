import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BookTestForm = ({ selectedTest }) => {
  const borderStyles = "border-2 rounded-lg border-gray-500 px-2 py-2";
  return (
    <Formik
      className
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        selectedTest: Yup.string(),
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        mobile: Yup.string().max(10, "Must be 10 numbers").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const data = {
            Form_Type: "Test Form",
            Patient_Name: values.firstName + " " + values.lastName,
            Mobile: values.mobile,
            Gender: values.gender,
            Collection: values.collectionType,
            Email: values.email,
            Date: values.date,
            Time: values.time,
          };

          axios.post(
            "https://sheet.best/api/sheets/f935b9d9-4400-489a-8b5f-5eed992f2e2c",
            data
          );
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="grid justify-center gap-y-4 ">
        <div>
          <label htmlFor="selectedTest" className="font-bold">
            Selected Test
          </label>{" "}
          <br />
          <div className={`${borderStyles}`}>
            <Field
              name="selectedTest"
              value={selectedTest}
              type="text"
              className="outline-none w-full"
            />
          </div>
          <ErrorMessage name="selectedTest" />
        </div>
        <div className="flex gap-x-4">
          <div>
            {/* <label htmlFor="firstName">First Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="firstName"
                placeholder="First Name"
                type="text"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="firstName" />
          </div>

          <div>
            {/* <label htmlFor="lastName">last Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="lastName"
                placeholder="Last Name"
                type="text"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="lastName" />
          </div>
        </div>

        <div className="flex gap-x-4">
          <div>
            {/* <label htmlFor="firstName">First Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="mobile"
                placeholder="Mobile"
                type="text"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="mobile" />
          </div>

          <div>
            {/* <label htmlFor="lastName">last Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="gender"
                placeholder="Gender"
                type="text"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="gender" />
          </div>
        </div>

        <div>
          {/* <label htmlFor="email">Email Address</label> */}
          <div className={`${borderStyles}`}>
            <Field
              name="collectionType"
              placeholder="Collection Type"
              type="text"
              className="outline-none w-full"
            />
          </div>
          <ErrorMessage name="collectionType" className="text-red-600" />
        </div>

        <div>
          {/* <label htmlFor="email">Email Address</label> */}
          <div className={`${borderStyles}`}>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="outline-none w-full"
            />
          </div>
          <ErrorMessage name="email" className="text-red-600" />
        </div>

        <div className="flex justify-between">
          <div>
            {/* <label htmlFor="firstName">First Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="date"
                // placeholder="date"
                type="date"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="date" />
          </div>

          <div>
            {/* <label htmlFor="lastName">last Name</label> */}
            <div className={`${borderStyles}`}>
              <Field
                name="time"
                // placeholder="Gender"
                type="time"
                className="outline-none w-full"
              />
            </div>
            <ErrorMessage name="time" />
          </div>
        </div>

        <button
          type="submit"
          className="border-2 border-transparent my-4 py-2 px-4 bg-quaternary font-bold text-white rounded-lg"
        >
          Book Now
        </button>
      </Form>
    </Formik>
  );
};

export default BookTestForm;
