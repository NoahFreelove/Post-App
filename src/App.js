import React, { Fragment } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import SearchPage from './pages/search-page/search-page'
import {AppBar, Button, Typography} from "@mui/material";
import ListPage from "./pages/list-page/list-page";
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
return (
      <Fragment>
          <AppBar sx={{backgroundColor:"#d58b40"}}>
          <Typography sx={{fontFamily:"Verdana", fontSize: 24, color: "#FFFFFF", whiteSpace:"pre"}}> Post App
          </Typography>
          </AppBar>

              <Routes>
              <Route exact path={"/"} element={
                  <div style={{padding:"25px"}}>

                      <div style={{textAlign:"center", margin:"15px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              Search for a specific post
                          </Typography>
                          <Button sx={{backgroundColor:"#d58b40"}} onClick={GoToSearch} variant={"contained"}>Search</Button>
                      </div>

                      <div style={{textAlign:"center", margin:"0px"}}>
                          <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                              View all posts
                          </Typography>
                          <Button sx={{backgroundColor:"#d58b40"}} onClick={GoToList} variant={"contained"}>View</Button>
                      </div>
                  </div>
              }/>
              <Route exact path={"/posts"} element={
                  <ListPage/>
              }/>
              <Route exact path={"/search"} element={
                  <SearchPage/>
              }/>
          </Routes>
      </Fragment>
  );
}

export default App;
