

export function init(){
let data = [];

fetch('../data.json')
.then(response => {
    return response.json();
})
.then(data => console.log(data));
}


function eydir(){
// let fyrstamessage = data['id' = 1];
// console.log(fyrstamessage);
}
