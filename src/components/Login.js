import React from 'react';
import { Formik } from 'formik';
const Login = (props) => (
  <center>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ name: '', address: '', bldgrp:'', dob:''}}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.email = 'Required';
          }if (!values.address) {
            errors.address = 'Required';
          }if (!values.bldgrp) {
            errors.bldgrp = 'Required';
          }if (!values.dob) {
            errors.dob = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.getdatafromform(values);
        
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            name: <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <span style={{ color: "red" }}> {errors.name && touched.name && errors.name}</span>
            <br />
            Date of Birth<input
              name="dob"
             type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />
            <span style={{ color: "red" }}>{errors.dob && touched.dob && errors.dob}
            </span>
            <br />
            Blood Group:<input
              type="text"
              name="bldgrp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bldgrp} />
            <span style={{ color: "red" }}>{errors.bldgrp && touched.bldgrp && errors.bldgrp}
            </span>
            <br />
            address:<input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}/>
            <span style={{ color: "red" }}>{errors.address && touched.address && errors.address}
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  </center>
);
export default Login;