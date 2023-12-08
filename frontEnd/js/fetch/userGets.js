
import {postData, getData} from "./postGet.js";

export async function getUserAll(){
    const USER_API_URL = "http://localhost:3333/user/all"
    const userAll = getData(USER_API_URL);
    const data = await userAll;
    console.log(data);
    return data;
}

getUserAll();