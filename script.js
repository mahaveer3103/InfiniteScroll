const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

const apikey = "xJxJPJ1pk4HgFuMIsX9RFCavN6IGU4Yawa14P5Aq31s";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=10`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        let photosArray = await response.json();
        document.getElementById('loader').style.display = 'none';

        photosArray.forEach((photo) => {
            const item = document.createElement("div");

            const img = document.createElement("img");
            img.setAttribute("src", photo.urls.small);
            img.setAttribute("alt", photo.alt_description);

            item.appendChild(img);

            img.addEventListener("click",()=>{
                window.location.href = photo.links.html;
            })
            imageContainer.appendChild(item);
        });
    } catch (error) {
        console.log(error);
    }
}

getPhotos();

window.addEventListener("scroll", () => {
    console.log(window.scrollY + window.innerHeight);
    console.log(document.documentElement.scrollHeight);
    if (window.scrollY + window.innerHeight >=document.documentElement.scrollHeight) {
        getPhotos();
    }
});
