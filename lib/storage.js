
let myStorage = window.localStorage;

/*export function init(){
let data = [];

fetch('../data.json')
.then(response => {
    console.log(response);
    const jsongogn = response.json();
    console.log(jsongogn);
    return response.json();
})*/
//.then(data => console.log(data));


export async function fetchData(){
    const data = await fetch('../data.json');

    if(data.ok){
        const jsonData = await data.json();
        storeData(jsonData);
    }
    else return{error: ' Engin gögn fundust'}
}


function storeData(data){
    myStorage.setItem('localStorageKey', JSON.stringify(data));
   
}

//TODO að sækja úr localstorage en ekki data hlut.

export function isCompleted(){
    let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
    verkefni.items.forEach((item)=> {
        if(item.completed)
        console.log(item);
    });
  
}

function fetchList(){


}

function load(){

}

//soft. deletes verkefnum ef þau eru búin
function eydir(){
for(i=0; i<= data.length;i++){

}


}

//data
//categories = data['categories'];
//fyrsta categories
//firstcategories = categories[0];
//fyrsta id
//id = firstcategories['id'];


