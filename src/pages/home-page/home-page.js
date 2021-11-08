import SearchBar from "../../components/SearchBar.component";
import React, {useState} from "react";
import {Typography} from "@mui/material";
import './home-page.css'
import PostCard from "../../components/Card.component";

function HomePage(){
    const [postId, setPostId] = useState("");
    const [postData, setPostData] = useState({userName: null, title: null, description: null, _id: null});

    function HandleChangePostID(e){
        setPostId(e.target.value)
    }

    async function FetchPosts(){
         fetch("https://noahfreelove-restapi.herokuapp.com/posts/"+postId
        ,{method:"GET"})
             .then(function(response) {
                 return response.json();
             })
             .then(function(data) {
                 setPostData(data);
             })
    }

    return(
        <div>
            <Typography sx={{fontFamily:"arial", fontSize: 24, color: "#FFFFFF"}}>Post App</Typography>
            <SearchBar buttonText={"Search"}
                           placeholderSearchText={"Search By Post ID"}
                           handleChange={HandleChangePostID}
                           onClick={FetchPosts}/>
            <PostCard postData={postData}/>

        </div>
    )
}
export default HomePage
