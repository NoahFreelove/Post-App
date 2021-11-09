import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import {AppBar, Button, Typography} from "@mui/material";

import Home from "./pages/home-page/home-page";
function App() {

let navigate = useNavigate();

function GoToSearch()
{
    navigate('/search')
}

function GoToList()
{
    navigate('/posts')
}
function GoToHome()
{
    navigate('/')
}

function GoToCreate()
{
    navigate('/create')
}

function GoToDelete()
{
    navigate('/delete')
}

return (
      <Fragment>
          <AppBar sx={{backgroundColor:"#d58b40"}}>
          <Typography sx={{fontFamily:"Verdana",
              fontSize: 24,
              color: "#FFFFFF",
              whiteSpace:"pre"}}> Post App
              <Button variant={"contained"}
                      style={{backgroundColor: "#ab7034", float:"right"}}
                      onClick={GoToHome}>Home</Button>

          </Typography>
          </AppBar>
          <Home GoToDelete={GoToDelete}
                GoToHome={GoToHome}
                GoToSearch={GoToSearch}
                GoToCreate={GoToCreate}
                GoToList={GoToList}/>
      </Fragment>
  );
}

export default App;
