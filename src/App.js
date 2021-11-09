import React, { Fragment } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import SearchPage from './pages/search-page/search-page'
import {AppBar, Button, Typography} from "@mui/material";
import ListPage from "./pages/list-page/list-page";
import CreatePost from "./pages/create-post/create-post";
import DeletePost from "./pages/delete-post/delete-post";
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
