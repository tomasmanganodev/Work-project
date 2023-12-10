import { fetchData, fetchData_byUser} from "../fetch/userPagination.js";

const itemsPerPage = 10; // Number of items per page
let currentPage = 1; // Current page
const textField = document.getElementById('searchUsername');



fetchData(currentPage, itemsPerPage);


  


textField.addEventListener('input', (event)=>{
    event.preventDefault();
    fetchData_byUser(currentPage, itemsPerPage, event.target.value.trim());
  })

/*
function renderPagination(totalPages) {
  const paginationElement = document.getElementById('pagination');
  let paginationHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                          <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                        </li>`;
  }

  paginationElement.innerHTML = paginationHTML;
}

function changePage(page) {
  currentPage = page;
  fetchAndRenderItems(currentPage, itemsPerPage);
}

// Initial fetch for the first page
fetchAndRenderItems(currentPage, itemsPerPage);
*/