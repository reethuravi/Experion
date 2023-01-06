const p = new Promise((resolve,reject) =>{
    const name = 'javaScript';
    resolve(name);
});
p.then(res=>console.log(res));