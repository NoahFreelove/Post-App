import React, { Fragment } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import SearchPage from './pages/search-page/search-page'
import {AppBar, Button, Typography} from "@mui/material";
import ListPage from "./pages/list-page/list-page";
import CreatePost from "./pages/create-post/create-post";
import DeletePost from "./pages/delete-post/delete-post";
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

              <Routes>
              <Route exact path={"/"} element={
                  <div style={{padding:"25px"}}>

                      <div style={{textAlign:"center", margin:"15px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              Search for a specific post
                          </Typography>
                          <Button style={{backgroundColor:"#d58b40"}} onClick={GoToSearch} variant={"contained"}>Search</Button>
                      </div>

                      <div style={{textAlign:"center", margin:"0px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              View all posts
                          </Typography>
                          <Button style={{backgroundColor:"#d58b40"}} onClick={GoToList} variant={"contained"}>View</Button>
                      </div>

                      <div style={{textAlign:"center", margin:"15px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              Create New Post
                          </Typography>
                          <Button style={{backgroundColor:"#5bd540"}} onClick={GoToCreate} variant={"contained"}>Create</Button>
                      </div>

                      <div style={{textAlign:"center", margin:"15px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              Delete a post
                          </Typography>
                          <Button style={{backgroundColor:"#d54040"}} onClick={GoToDelete} variant={"contained"}>Delete</Button>
                      </div>
                  </div>
              }/>

                  <Route exact path={"/posts"} element={
                        <ListPage/>
                  }/>

                  <Route exact path={"/search"} element={
                      <SearchPage/>
                  }/>

                  <Route exact path={"/create"} element={
                      <CreatePost/>
                  }/>

                  <Route exact path={"/delete"} element={
                      <DeletePost/>
                  }/>

          </Routes>
      </Fragment>
  );
}

export default App;
