let div = document.getElementsByClassName("error");
let nav = document.getElementsByTagName("nav");
let text = (div.textContent =
  "Error not being able fetch the request Error(404)!");
let table = document.getElementById("userslist");

//fetching the data from api
async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");

  let val = await res.json().catch(() => nav.appendChild(div));
  if (localStorage.length === 0) {
    createTable(val);
  } else if (localStorage.length > 0) {
    addUsers(val);
  }
}

let data = getData();
let newelement = {};
//creating new element
function createnewObj() {
  newelement = {
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    department: localStorage.getItem("department"),
  };
  
  return newelement;
}

function addUsers(data) {
  let element = data;
  element.map((sd) => {

    let keys = Object.keys(sd);
    if (keys.includes("department") == false) {
      let dept = ["Software Developer", "Software Testing"];
      if (sd.id % 2 == 0) {
        sd["department"] = dept[0];
      } else {
        sd["department"] = dept[1];
      }
      // addcreateTable(sd);
    }
  });

  element.push(createnewObj());
   editUsers(element);
}


function createTable(data) {
  data.map((sd) => {
    let names = sd.name.split(" ");

    let fname = names[0];
    let lname = names[1];

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = `${sd.id}`;
    cell2.innerHTML = `${fname}`;
    cell3.innerHTML = `${lname}`;
    cell4.innerHTML = `${sd.email}`;
    cell5.innerHTML = `${sd.department}`;
    cell6.innerHTML = `<button id= "delete-btn" style="background-color:red ; color: white;font-size: medium; border-radius:5px ;padding:5px;">Delete</button>`
    table.append(row)
  });
}
let unique = new Set();
function editUsers(data) {

  data.map((d) => {
    if (
      d.id === localStorage.getItem("id") ||
      d.name === localStorage.getItem("name") ||
      d.email === localStorage.getItem("email")
    ) {
      d.id = localStorage.getItem("id");
      d.name = localStorage.getItem("name");
      d.email = localStorage.getItem("email");
      d.department = localStorage.getItem("department");
    }
  });
  for (let i = 0; i < data.length; i++) {

    for(let j=1;j<data.length;j++){
      if (
        data[i].id !== data[j].id &&
        data[i].name !== data[j].name &&
        data[i].email !== data[j].email
      ) {
          unique.add(data[i])
      
      }
    }

    }
    //creating table with unique elements
    console.log(unique)
    createTable([...unique]);
}

 
 
