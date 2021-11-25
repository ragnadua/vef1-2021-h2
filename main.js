// Sækja storage gögn og láta þau virka með þessu

import { fetchData, isCompleted } from "./lib/storage.js"; 



const gogn = await fetchData();

const localgogn = JSON.parse(window.localStorage.getItem('localStorageKey'));
console.log(localgogn);
//console.log(gogn);
isCompleted();
