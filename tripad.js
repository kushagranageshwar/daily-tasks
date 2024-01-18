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

async function fn(){
    const {data} = await axios.get(url).then((response) => {
        return response;
    }).catch((error) =>{
        console.log('error in the api: ', error);
    });

    names = data.map(function(element){
        return element.name;
    });

    Array.from(images).forEach(function(element, index){
        images[index].innerHTML = names[index];
    });
}

fn();