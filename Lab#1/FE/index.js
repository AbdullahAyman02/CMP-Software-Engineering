function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEmployee(item.id));
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error =>
    {
      console.log('error', error)
    })
}

// TODO
// add event listener to submit button
document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  createEmployee(); // Call createEmployee function
});

// TODO
// add event listener to delete button
// UPDATE: Implemented at line 22

// TODO
function createEmployee (){
  // get data from input field
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const formData = { name, id };
  
  // send data to BE
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // call fetchEmployees
    fetchEmployees();
  })
    .catch(error => {
      console.error('Error:', error);
    });
}

// TODO
function deleteEmployee (id){
  // get id
  // UPDATE: id is passed as an argument
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // call fetchEmployees
    fetchEmployees();
  })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchEmployees()
