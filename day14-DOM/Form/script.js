

document.addEventListener('submit',function(e){
    e.preventDefault()

    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let address = document.getElementById('address').value
    let pincode = document.getElementById('pincode').value
    let gender = document.getElementById('gender').value
    let food = document.getElementById('pizza','fires','sandwiches','tacos').value
    let state = document.getElementById('state').value
    let country = document.getElementById('country').value


    let tbody = document.getElementById('table');
    
    const newRow = tbody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);


    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = address;
    cell4.textContent = pincode;
    cell5.textContent = gender;
    cell6.textContent = food;
    cell7.textContent = state; 
    cell8.textContent = country;
    
   e.form.reset();
    
});