var menu = document.getElementById("menu");
var header = document.getElementById("headers");
var images = menu.getElementsByTagName("p");

console.log(images);

function slideleft(){
	menu.scrollLeft -= 400;
    // menu.animate({scrollLeft: '0'}, scrollDuration);
};

function slideright(){
	menu.scrollLeft += 400;
    // menu.animate({scrollLeft: '0'}, scrollDuration);
};

const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
    const {data} = await axios.get(url).then((response) => {
        console.log(response);
        return response;
    }).catch((error) =>{
        console.log('error in the api: ', error);
    });

    Array.from(images).forEach(function(element, index){
        images[index].innerHTML = data[index].name;
    });
}

fetchData();