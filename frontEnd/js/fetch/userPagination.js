import { getData} from "./postGet.js";

export async function fetchData(page, pageSize){
    try {
        const url = `http://localhost:3333/user/${page}/${pageSize}`;
        const data = await getData(url);
        updateTable(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
}

function updateTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 
    console.log(data);
    
    /*data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
      `;
      tableBody.appendChild(row);
    });*/ 
    
    
  }