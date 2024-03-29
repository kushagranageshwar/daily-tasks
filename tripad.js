var menu = document.getElementById("menu");
var header = document.getElementById("headers");
var paragraphElements = menu.getElementsByTagName("p");

// console.log(images);

function slideleft(){
	menu.scrollLeft -= 400;
};

function slideright(){
	menu.scrollLeft += 400;
};

const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
    const {data} = await axios.get(url).then((response) => {
        // console.log(response);
        return response;
    }).catch((error) =>{
        console.log('error in the api: ', error);
    });

    console.log(data);

    Array.from(paragraphElements).forEach(function(element, index){
        paragraphElements[index].innerHTML = data[index].name;
    });
}

fetchData();