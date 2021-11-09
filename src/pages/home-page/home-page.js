import {Route, Routes} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import ListPage from "../list-page/list-page";
import SearchPage from "../search-page/search-page";
import CreatePost from "../create-post/create-post";
import DeletePost from "../delete-post/delete-post";
import React from "react";

function Home(props){
    return(
        <Routes>
            <Route exact path={"/"} element={
                <div style={{padding:"25px"}}>

                    <div style={{textAlign:"center", margin:"15px"}}>
                        <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                            Search for a specific post
                        </Typography>
                        <Button style={{backgroundColor:"#d58b40"}} onClick={props.GoToSearch} variant={"contained"}>Search</Button>
                    </div>

                    <div style={{textAlign:"center", margin:"0px"}}>
                        <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                            View all posts
                        </Typography>
                        <Button style={{backgroundColor:"#d58b40"}} onClick={props.GoToList} variant={"contained"}>View</Button>
                    </div>

                    <div style={{textAlign:"center", margin:"15px"}}>
                        <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                            Create New Post
                        </Typography>
                        <Button style={{backgroundColor:"#5bd540"}} onClick={props.GoToCreate} variant={"contained"}>Create</Button>
                    </div>

                    <div style={{textAlign:"center", margin:"15px"}}>
                        <Typography sx={{fontFamily:"arial", fontSize: 18, color: "#a9a9a9"}}>
                            Delete a post
                        </Typography>
                        <Button style={{backgroundColor:"#d54040"}} onClick={props.GoToDelete} variant={"contained"}>Delete</Button>
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
    )
}

export default Home
