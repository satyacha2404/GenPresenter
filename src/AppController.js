import * as React from 'react';
import App from './App';
import { useFormik } from 'formik';
import axios from 'axios';

function AppController() {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      birthDate: "",
      domisili: "",
      picture: "",
      video: "",
      language: "Bahasa Indonesia",
      presenterGender: ""
    },
    onSubmit: (values) => {
      var url = 'http://localhost:8000/api/generate-video';
      var body = JSON.stringify(values);      

      console.log(JSON.stringify(values));

      axios.post(url, body, {headers: {
        'Content-Type': 'application/json',
      }})
      .then(function (response){
        console.log(response.data)
        formik.setFieldValue("video", response.data.responseBody.urlVideo)
      })
      .catch(error => {
          console.error(error.message);
      });      
    },
  });


  return <App 
    formik = {formik}
  />
}

export default AppController;