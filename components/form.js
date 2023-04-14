import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

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
          alert(JSON.stringify(values, null, 2));
          console.log(values);
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
          className="border-2 border-transparent my-4 py-2 px-4 bg-primary text-white rounded-lg"
        >
          Book Now
        </button>
      </Form>
    </Formik>
  );
};

export default BookTestForm;
