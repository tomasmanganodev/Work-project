import { getData} from "./postGet.js";

export async function fetchData(page, pageSize){
    try {
        const url = `http://localhost:3333/user/${page}/${pageSize}`;
        const data = await getData(url);
        const paglist = document.getElementById('PaglastPage');
        console.log(data.length); 
        updateTable(data);
        paglist.innerHTML = getLastPage(pageSize, data.length);;
        

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
}

export async function fetchData_byUser(page, pageSize, username){
  try {
      const url = `http://localhost:3333/user/${page}/${pageSize}/${username}`;
      const data = await getData(url);
      console.log(data); 
      updateTable(data);
      getLastPage(pageSize, data.length);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
}



function updateTable(data) {
 
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 
    

    let tableHTML = '';

    data.forEach((item) => {
      
        tableHTML += `<tr class="rowRegister">
                      <td class="cellRegister" scope="row">${item.id}</td>
                      <td class="cellRegister">${item.name}</td>
                      <td class="cellRegister">${item.email}</td>
                      <td class="cellRegister">${item.username}</td>
                      <td class="cellRegister">${item.salaries}</td>
                      <td class="cellRegister">${dates(item.birthdate)}</td>
                      <td class="cellRegister">${dates(item.date_start)}</td>
                    </tr>`;
      
      
    });
  
    tableBody.innerHTML = tableHTML;
    
  }
  function dates(data){
    const date = new Date(data);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2); 
    
    return `${year}/${month}/${day}`; 

  }

  export function getLastPage(pageSize, length){
    return Math.floor((length / pageSize) + 1);
    
  }