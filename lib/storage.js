import { empty } from "./ui.js";

const myStorage = window.localStorage;

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
        return jsonData;

    }
    else return{error: 'Engin gögn fundust'}
}


function storeData(data){
    myStorage.setItem('localStorageKey', JSON.stringify(data));
   
}

export async function getList(type, id=null){
    fetchData();
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

/*export function isCompleted(){
    let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
    verkefni.items.forEach((item)=> {
        if(item.completed)
        return true;
    });
  
}*/


function eydir(){
let verkefni = JSON.parse(myStorage.getItem('localStorageKey'));
verkefni.items.forEach((item)=> {
if(item.deleted)
    myStorage.removeItem();
})

}

export async function fetchAndRenderCategory(type, id, parent){
    empty(parent);
    const listi = await getList(type, id);
    for( let i =0; i<listi.length; i++){
        const item = el('div');
        item.classList.add('verkefni');
        parent.appendChild(item);

        const check = e('check');
        check.classList.add('verkefniCheck');
        item.appendChild(check);

        check.setAttribute('type', 'hlustar');
        const next = el('div');
        next.classList.add('verkefniHlustar');
        item.appendChild(next);

        const header = el('h3', listi[i].title);
        header.classList.add('verkefniHeader')
        next.appendChild(header);

        const lysing = el('p', listi[i].description);
        lysing.classList.add('verkefniLysing');
        next.appendChild(lysing);
        const innri = el('div');
        innri.classList.add('verekfniInnri');
        next.appendChild(innri);
        if(listi[i].due !== null){
            const date =new Date(listi[i].due);
            const miniLysing = el('p', date.toLocaleDateString('is'));
            miniLysing.classList.add('verkefniLysing2');
            innri.appendChild(miniLysing);
        }
        for(let j=0; j<listi[i].tags.length;j++){
            const mittSpan = el('span', listi[i].tags[j]);
            mittSpan.classList.add('verkefniSpan');
            innri.appendChild(mittSpan);
        }
        const spanLysing = el('p', listi[i].category);
        spanLysing.classList.add('verkefniLysing3');
        innri.appendChild(spanLysing);

    
    } 
    // const container = el('section');
    // container.classList.add('verkefni');

    // parent.appendChild(container);

    // const loadingElement = el('p', 'Sæki verkefni...');
    // container.appendChild(loadingElement);

    // const verkefni = await fetch('../data.json');
    // const verkbutur = verkefni.fetch(type);

    // container.removeChild(loadingElement);

    // const ul = el('ul');
    // ul.classList.add('verkefna_list');
    // container.appendChild(ul);

    // for(let i=0; i< Math.min(verkefni.items.length, limit); i+=1){
    //     const item = verkefni.items[i];
    //     const a = el('div', item);
    //     const li = el('li',a);
    //     li.classList.add('verkefni');
    //     ul.appendChild(li);
        
    // }

}




//data
//categories = data['categories'];
//fyrsta categories
//firstcategories = categories[0];
//fyrsta id
//id = firstcategories['id'];


