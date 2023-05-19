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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const src = "";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div> 
      <Box sx={{ flexGrow: 11 }}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "#00a758", fontSize: 40, height: 100, fontWeight: 'bold'}}>
            Go Presenter
          </Toolbar>
        </AppBar>
        <Card style={{backgroundColor: "#00a758", height: windowSize.current[1] - 100}}>
          <CardContent>
            <Box sx={{ m: 10 }} /> 
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={10}>
                <Grid item xs={2} md={2}>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Item style={{padding: 50, borderRadius: 50}}>
                    <TextField fullWidth label="Nama" variant="outlined" width="100%" helperText=" "/>
                    <TextField fullWidth label="Jenis Kelamin" variant="outlined" helperText=" "/>
                    <TextField fullWidth label="Tanggal Lahir" variant="outlined" helperText=" "/>
                    <TextField fullWidth label="Domisili" variant="outlined" helperText=" "
                              multiline
                              rows={5}/>
                    <Stack spacing={2}>
                      <Button variant="contained" endIcon={<CameraAlt />}>
                        Take Photo
                      </Button>
                    </Stack>                    
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item style={{padding: 50, borderRadius: 50}}>
                    <Stack direction="column" spacing={2}>
                    <video controls autoPlay={true}>
                      <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                      </video>    
                      <Button variant="contained" endIcon={<VideoLibraryIcon />}>
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
  );
}

export default App;