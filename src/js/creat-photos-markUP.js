export const creatPhotos = (data) => {
 console.log(data)

    const element = data.map((photo) => `
        <li class="item">
            <h2 class="name">${photo.name}</h2>
            <a type="email" href="${photo.email}"></a>
            <p class="body">${photo.body}</p>
            
        </li>`).join(); 
    
        document.querySelector(".list").innerHTML = element;
}



