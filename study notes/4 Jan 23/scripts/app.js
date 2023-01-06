fetch('https://reqres.in/api/users')
.then(response => response.json())
// .then(data => console.log(data));

// Print full data
// .then(result => {
//     console.log(result.data);
// });

.then(result =>{
    result.data.forEach(user =>{
        console.log(user.email);
    })
});