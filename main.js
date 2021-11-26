// Sækja storage gögn og láta þau virka með þessu


import { fetchData, fetchAndRenderCategory } from "./lib/storage.js"; 



const gogn = await fetchData();

const localgogn = JSON.parse(window.localStorage.getItem('localStorageKey'));
console.log(localgogn);
//console.log(gogn);

/*const plis = fetchAndRenderCategory('all', null,null);
console.log(plis);*/ 

async function route(){

    const container = document.querySelector(".pin");
    console.log(await fetchAndRenderCategory('all',null, container), "lovely");
   
}

async function test(){
    let test = await fetchData();
    let tes1 = route();

}
test();