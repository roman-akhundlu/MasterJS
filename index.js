const telebeler = [

    {
        fin:"433DBC",
        Ad:"Mark",
        Soyad:"The Splash",
        isStudent: true

    },

    {
        fin:"765C12",
        Ad:"John",
        Soyad: "Doe",
        isStudent: false
    }
]

for(i=0;  i<telebeler.length ; i++){
    document.querySelector("tbody").innerHTML += `<tr>
    <th scope="row">${telebeler[i].fin}</th>
    <td>${telebeler[i].Ad}</td>
    <td>${telebeler[i].Soyad}</td>
    <td>${telebeler[i].isStudent ? "Telebe mezundur" : "Telebe tehsil alir"}</td>
    <td><i class="bi bi-pencil-square"></i></td>
    <td><i class="bi bi-trash"></i></td>
    </tr>`
    
}
