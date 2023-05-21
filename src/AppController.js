import * as React from 'react';
import App from './App';
import { useFormik } from 'formik';
import axios from 'axios';

function AppController() {

  const [loadingFLag, setLoadingPage] = React.useState(false);

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
      setLoadingPage(true);
      var url = 'http://localhost:8000/api/generate-video';
      var body = JSON.stringify(values);      

      console.log(JSON.stringify(values));

      axios.post(url, body, {headers: {
        'Content-Type': 'application/json',
      }})
      .then(function (response){
        console.log(response.data);
        formik.setFieldValue("video", response.data.responseBody.urlVideo);
        setLoadingPage(false);
      })
      .catch(error => {
        console.error(error.message);
        setLoadingPage(false);
        });      
    },
  });


  return <App 
    formik = {formik}
    loadingFLag = { loadingFLag }
  />
}

export default AppController;