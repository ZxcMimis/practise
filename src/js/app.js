import {getPostsApi} from "./get-post-api";
import {creatPhotos} from "./creat-photos-markUP"

getPostsApi(1).then((data) => {
    creatPhotos(data);
});

const button = document.querySelector("#button");

let page = 1

button.addEventListener(("click"), (e) => {
    page++
    getPostsApi(page).then((data) => {
        creatPhotos(data);
        
    }); 
})