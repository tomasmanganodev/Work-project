import { fetchData, fetchData_byUser, getLastPage} from "../fetch/userPagination.js";

const itemsPerPage = 10; // Number of items per page
let currentPage = 1; 
const textField = document.getElementById('searchUsername');
const previousPag = document.getElementById('previousPag');
const nextPage = document.getElementById('nextPag');


function loadPageData() {
  if (textField.value.trim() === '') {
    fetchData(currentPage, itemsPerPage);
  } else {
    fetchData_byUser(currentPage, itemsPerPage, textField.value.trim());
  }
}
  
loadPageData();

textField.addEventListener('input', (event)=>{
    
    event.preventDefault();
  // Resetear la página a la primera cuando se cambia el texto de búsqueda
  currentPage = 1;
  loadPageData();
  })

previousPag.addEventListener('click', (event)=>{
  event.preventDefault();
    if(currentPage > 1){
      currentPage = currentPage - 10;
      if (textField.value.trim() === ''){
        fetchData(currentPage, itemsPerPage);
      }
      else{
      fetchData_byUser(currentPage, itemsPerPage, textField.value.trim());}
    }
   
  
  
})
nextPage.addEventListener('click', (event)=>{
  event.preventDefault();

      currentPage = currentPage + 10;
      if (textField.value.trim() === ''){
        fetchData(currentPage, itemsPerPage);
      }
      else{
      fetchData_byUser(currentPage, itemsPerPage, textField.value.trim());}
    
  
   
  
})

