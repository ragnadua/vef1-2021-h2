

export function init(){
let data = [];

fetch('../data.json')
.then(response => {
    return response.json();
})
.then(data => console.log(data));
}


function eydir(){
// let fyrstamessage = data['categories'][0];
// console.log(fyrstamessage);
//data;

//categories = data['categories'];


}
function data () {
    categories = data['categories'];
    //fyrsta categories
firstcategories = categories[0];

//fyrsta id
id = firstcategories['id'];
}