let fetchRes = fetch("products.json");
fetchRes.then(res =>
    res.json()).then(data => {
      mainList(data);
      console.log(data)

    })
function mainList(data){
    let lis=' '
    let arr = data;
        console.log(data)
         for (var i=0; i < data.length; i++) {
             let imagePath = arr[i].image;
             lis+=`     <tr class=''>
                            <td><img class='imageStyle' src="${imagePath}" alt=''></td>
                            <td>${arr[i].id}</td>
                            <td>${arr[i].title} </td>
                            <td>${arr[i].category}</td>
                            <td>${arr[i].description}</td>
                            <td>${arr[i].price}</td>
                            <td> ${arr[i].rating.rate}</td>
                        </tr>`
         }
         document.getElementById("elements").innerHTML = lis;
}