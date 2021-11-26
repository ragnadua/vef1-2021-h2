
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
    else return{error: 'Engin gögn fundust'}
}


function storeData(data){
    myStorage.setItem('localStorageKey', JSON.stringify(data));
   
}

function getList(type, id){
    let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
    if(type ==='all'){
        return verkefni;
    }
    else if (type ==='oklarad'){
        return verkefni.filter((items) => {
            return !items.completed;
        })
    }
    else if(type ==='klarad') {
        return verkefni.filter((items) => {
            return items.completed;
        })

    }
}

export function isCompleted(){
    let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
    verkefni.items.forEach((item)=> {
        if(item.completed)
        return true;
    });
  
}


function eydir(){
let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
verkefni.items.forEach((item)=> {
if(item.deleted)
    myStorage.removeItem();
})

}

function fetchAndRender(type,id, parent){
    let list = getList(type, id);
    empty(parent);
    
}




//data
//categories = data['categories'];
//fyrsta categories
//firstcategories = categories[0];
//fyrsta id
//id = firstcategories['id'];


