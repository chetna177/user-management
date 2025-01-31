let form = document.getElementById("forms");
console.log(form);

let id = "111 ";
let fullname = " Tamanna Khan";
let email = "tamnna79@gmail.com";
let department = "manager";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  id = form.idno.value;
  fullname = form.name.value;
  email = form.email.value;
  department = form.department.value;
   
  window.localStorage.setItem("id",id);
  window.localStorage.setItem("name",fullname);
  window.localStorage.setItem("email",email);
  window.localStorage.setItem("department",department);

   window.location.href = "view.html";

});




// async function getData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");

//   let val = await res.json().then((data)=>{addUsers(data)}).catch(()=>console.log("error 404"));
//    return val;
// }

// let data = getData();

