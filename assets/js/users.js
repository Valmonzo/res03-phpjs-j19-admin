function getAllUsers()

{
    fetch('https://valmontpehautpietri.sites.3wa.io/Cours/php/res03-php-j19-api/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    for(let i = 0; i < data.length; i++) {
        let id = data[i].id;
        let username = data[i].username;
        let firstName = data[i].firstName;
        let lastName = data[i].lastName;
        let email = data[i].email;

        let tbody = document.getElementById("users-tbody");

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let btnUser = document.createElement("button");
        let btnEdit = document.createElement("button");
        let btnDelete = document.createElement("button");

        td1.textContent = username;
        td2.textContent = firstName;
        td3.textContent = lastName;
        td4.textContent = email;

        btnUser.setAttribute("user-id", id);
        btnEdit.setAttribute("user-id", id);
        btnDelete.setAttribute("user-id", id);

        td5.appendChild(btnUser);
        td6.appendChild(btnEdit);
        td7.appendChild(btnDelete);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        tbody.appendChild(tr);

    }

});
}

export { getAllUsers };