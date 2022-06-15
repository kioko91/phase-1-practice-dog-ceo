console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function()
{
    fetchDogImages()
})

function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    
    .then(data => {
        console.log(data.message);
        data.message.forEach(image => loadImagestoDom(image))});

}
function loadImagestoDom(image){
    let dogsCont = document.getElementById('dog-image-container');
   let ourImage =document.createElement('img');
   ourImage.src = image;
   dogsCont.appendChild(ourImage);

}
