const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(result =>{
    const users = result.data;
    users.forEach( user => {
        const row = `
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="${user.avatar}" height="50px">
            </td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
        </tr>`;
        tbody.innerHTML +=row;
     });
});
const search = document.querySelector("serachbox");
fetch('https://reqres.in/api/users')
.then(respond => respond.json()
.then res =>{
    const useremail = res.email;
    res.email.forEach(element => {
        const col = `
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="${user.avatar}" height="50px">
            </td>
            <td>${user.first_name} ${user.last_name}</td>
        </tr>`;
        email.innerHTML +=col
    });
});
