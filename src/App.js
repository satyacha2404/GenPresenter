import * as React from 'react';
import { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CameraAlt } from '@mui/icons-material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Webcam from 'react-webcam';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App({formik}) {
  const webcamRef = React.useRef(null);
  
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc.split(',')[1]);
    formik.setFieldValue("picture", imageSrc.split(',')[1]);
  }, [webcamRef]);
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <div> 
        <Box sx={{ flexGrow: 11 }}>
          <AppBar position="static">
            <Toolbar style={{backgroundColor: "#00a758", fontSize: 40, height: 100, fontWeight: 'bold'}}>
              Go Presenter
            </Toolbar>
          </AppBar>
          <Card style={{backgroundColor: "#00a758", height: window.innerHeight - 100}}>
            <CardContent>
              <Box sx={{ m: 10 }} /> 
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={10}>
                  <Grid item xs={2} md={2}>
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <Item style={{padding: 50, borderRadius: 50}}>
                      <TextField 
                        fullWidth 
                        label="Nama" 
                        variant="outlined" 
                        width="100%" 
                        name="name"
                        helperText=" "
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <TextField 
                        fullWidth 
                        label="Jenis Kelamin" 
                        variant="outlined" 
                        width="100%" 
                        name="gender"
                        helperText=" "
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                      />
                      <TextField 
                        fullWidth 
                        label="Tanggal Lahir" 
                        variant="outlined" 
                        width="100%" 
                        name="birthDate"
                        helperText=" "
                        onChange={formik.handleChange}
                        value={formik.values.birthDate}
                      />
                      <TextField 
                        fullWidth 
                        label="Domisili" 
                        variant="outlined" 
                        width="100%" 
                        name="domisili"
                        helperText=" "
                        multiline
                        rows={5}
                        onChange={formik.handleChange}
                        value={formik.values.domisili}
                      />
                      <TextField 
                        fullWidth 
                        label="Bahasa" 
                        variant="outlined"
                        disabled 
                        width="100%" 
                        name="bahasa"
                        helperText=" "
                        value={formik.values.language}
                      /> 
                      <Stack spacing={2}>
                        <Button onClick={capture} variant="contained" endIcon={<CameraAlt />}>
                          Take Photo
                        </Button>
                      </Stack>                    
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item style={{padding: 50, borderRadius: 50}}>
                      <Stack direction="column" spacing={2}>
                        {
                          formik.values.video ?
                            <video controls autoPlay={true}>
                              <source src={formik.values.video} type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>    :
                            formik.values.picture ?
                            <img src={"data:image/jpeg;base64," + formik.values.picture} />                            :
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                            />                    
                        }
                        <Button type='submit' variant="contained" endIcon={<VideoLibraryIcon />}>
                          Generate Video
                        </Button>
                      </Stack>                    
                    </Item>
                  </Grid>
                  <Grid item xs={1} md={1}>
                  </Grid>
                </Grid>
              </Box>         
            </CardContent>
          </Card>
        </Box>
      </div>
    </form>
  );
}

export default App;