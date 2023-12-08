import { fetchData } from "../fetch/userPagination";

const itemsPerPage = 10; // Number of items per page
let currentPage = 1; // Current page




fetchData(currentPage, itemsPerPage);


/*
function fetchAndRenderItems(page, limit) {
  fetch(`${apiUrl}?page=${page}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      renderTable(data.items);
      renderPagination(data.totalPages);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function renderTable(items) {
  const tableBody = document.getElementById('table-body');
  let tableHTML = '';

  // Loop through fetched items and create table rows
  items.forEach((item) => {
    tableHTML += `<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <!-- Add other table cells based on item properties -->
                  </tr>`;
  });

  tableBody.innerHTML = tableHTML;
}

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