var menu = document.getElementById("menu");

function slideleft(){
	menu.scrollLeft -= 400;
    // menu.animate({scrollLeft: '0'}, scrollDuration);
};

function slideright(){
	menu.scrollLeft += 400;
    // menu.animate({scrollLeft: '0'}, scrollDuration);
};

// function getUserById(id) {
//     if (typeof id !== 'number' || id <= 0) {
//         throw new Error('Invalid id argument');
//     }

//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// getUserById(1)
//     .then(user => console.log(user.username))
//     .catch(err => console.log(err));