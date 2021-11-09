import {FetchAllPosts} from "../../APIHandler";
import React, {useState} from "react";
import {Button, Typography} from "@mui/material";
import CardList from "../../components/Card List/CardList.component";

function ListPage(){
    const [searching, setSearching] = useState(false);
    const [postsData, setPostsData] = useState([]);

    /*{postData : [{
        _id: "123123",
        userName: "user",
        title: "title",
        description: "desc"
    }, {
        _id: "2313123",
        userName: "user2",
        title: "title2",
        description: "desc2"
    }]}*/


    async function HandleFetchPost() {
        setSearching(true)
        await FetchAllPosts(setPostsData).then(()=>{
            setSearching(false)
        })
    }

    return(
        <div style={{padding:"40px"}}>
            <Button sx={{backgroundColor:"#d58b40"}} onClick={HandleFetchPost} variant={"contained"}>Download Posts</Button>
            <CardList cardArr={postsData}/>
            {searching ?
                <Typography color={"#FFFFFF"}>Searching...</Typography>:
                <></>
            }
        </div>
    )

}

export default ListPage
