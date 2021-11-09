async function FetchPost(postId){
    return fetch("https://noahfreelove-restapi.herokuapp.com/posts/"+postId
        ,{method:"GET"})
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
}

async function FetchAllPosts(setData){
     await fetch("https://noahfreelove-restapi.herokuapp.com/posts/"
        ,{method:"GET"})
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setData(MapToArray(data))
        })
}

async function CreatePostReq(PostObj)
{
    const rawResponse = await fetch("https://noahfreelove-restapi.herokuapp.com/posts/", {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},

        body: JSON.stringify(PostObj

        )
    });
    const content = await rawResponse.json();

    console.log(content);
}

function MapToArray (newMap) {
    let count = 0

    for (const prop in newMap) { if (Object.prototype.hasOwnProperty.call(newMap, prop)) ++count }

    const newArr = []

    for (let i = 0; i < count; i++) {
        newArr.push(newMap[i])
    }

    return newArr
}


export {FetchPost, FetchAllPosts, CreatePostReq}
