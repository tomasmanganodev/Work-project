import { fetchData, fetchData_byUser, getLastPage} from "../fetch/userPagination.js";

const itemsPerPage = 10; // Number of items per page
let currentPage = 1; // Current page
const textField = document.getElementById('searchUsername');
const previousPag = document.getElementById('previousPag');
const nextPage = document.getElementById('nextPag');


fetchData(currentPage, itemsPerPage);



  


textField.addEventListener('input', (event)=>{
    event.preventDefault();
    fetchData_byUser(currentPage, itemsPerPage, event.target.value.trim());
  })

previousPag.addEventListener('click', (event)=>{
  event.preventDefault();
    if(currentPage > 1){
      currentPage = currentPage - 10;
      fetchData(currentPage, itemsPerPage);
    }
   
  
  
})
nextPage.addEventListener('click', (event)=>{
  event.preventDefault();

      currentPage = currentPage + 10;
      fetchData(currentPage, itemsPerPage);
    
  
   
  
})

