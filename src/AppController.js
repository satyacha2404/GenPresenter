import * as React from 'react';
import App from './App';
import { useFormik } from 'formik';

function AppController() {
  const formik = useFormik({
    initialValues: {
      name: "aa",
      gender: "bb",
      birthDate: "cc",
      domisili: "dd",
      picture: "",
      video: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return <App 
    formik = {formik}
  />
}

export default AppController;