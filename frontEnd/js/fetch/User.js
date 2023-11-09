import {postData, getData} from "./postGet.js";

function postUser(){
    const USER_API_URL = "http://localhost:3333/user/add";
    const user = document.getElementById("formUserAdd");

    user.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        postData(USER_API_URL, data);
    })
}


export async function getUserAll(){
    const USER_API_URL = "http://localhost:3333/user/all"
    const userAll = getData(USER_API_URL);
    const data = await userAll;
    console.log(data);
    return data;
}
//postUser();

getUserAll();