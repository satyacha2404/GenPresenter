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
      video: "",
      language: "Bahasa Indonesia"
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      formik.setFieldValue("video", 
        "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C645b9c1d0743716e603ff716/tlk_iDijfaewiOu8ABnIxoZcN/1684466653973.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1684553073&Signature=1Zeyh0MuY4RuxsRF%2B7C3cwzvovA%3D&X-Amzn-Trace-Id=Root%3D1-6466ebf1-05b764a26b0795b769e45ae5%3BParent%3Dbf21c384704ed7d5%3BSampled%3D1%3BLineage%3D6b931dd4%3A0"
      );  
    },
  });

  return <App 
    formik = {formik}
  />
}

export default AppController;