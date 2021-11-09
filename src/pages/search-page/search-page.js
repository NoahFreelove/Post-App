import SearchBar from "../../components/SearchBar/SearchBar.component";
import React, {useState} from "react";
import {Typography} from "@mui/material";
import './search-page.css'
import PostCard from "../../components/Card/Card.component";
import {FetchPost} from "../../APIHandler";

function SearchPage(){
    const [postId, setPostId] = useState("");
    const [postData, setPostData] = useState({userName: "", title: "", description: "", _id: ""});
    const [searching, setSearching] = useState(false);

    function HandleChangePostID(e){
        setPostId(e.target.value)
    }

    async function HandleFetchPost() {
        setSearching(true)
        let res = await FetchPost(postId)
        if(res === null)
        {
            res = {userName: "",
                description: "this post was deleted",
                title: "Post does not exist"
            }
        }
        setPostData(res);
        setSearching(false)
    }

    return(
        <div style={{padding:"40px"}}>
            <SearchBar buttonText={"Search"}
                           placeholderSearchText={"Search By Post ID"}
                           handleChange={HandleChangePostID}
                           onClick={HandleFetchPost}/>
            {searching ?
                <Typography color={"#FFFFFF"}>Searching...</Typography>:
                <></>
            }
            <PostCard postData={postData}/>

        </div>
    )
}
export default SearchPage
