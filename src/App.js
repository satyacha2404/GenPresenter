import * as React from 'react';
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
  return (
    <div> 
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            Go Presenter
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Box sx={{ m: 10 }} /> 
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={10}>
                <Grid item xs={1} md={1}>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Item>
                    <TextField fullWidth label="Nama" variant="outlined" width="100%" helperText=" "/>
                    <TextField fullWidth label="Jenis Kelamin" variant="outlined" helperText=" "/>
                    <TextField fullWidth label="Tanggal Lahir" variant="outlined" helperText=" "/>
                    <TextField fullWidth label="Domisili" variant="outlined" helperText=" "
                              multiline
                              rows={4}/>
                  </Item>
                </Grid>
                <Grid item xs={1} md={1}>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" endIcon={<CameraAlt />}>
                        Take Photo
                      </Button>
                    </Stack>                    
                  </Item>
                  <Item>
                    <video controls width="100%" autoPlay={true}>
                      <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                      </video>    
                  </Item>
                  <Item>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" endIcon={<VideoLibraryIcon />}>
                        Generate Video
                      </Button>
                    </Stack>                    
                  </Item>
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