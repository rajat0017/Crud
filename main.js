var addstorage = document.getElementById('my-form');
var names = document.getElementById('name');
var emails = document.getElementById('email');
addstorage.addEventListener('submit', addtostorage);


var container = document.getElementById('my-form');

container.addEventListener('submit', additemlist);

function additemlist(myobj) {
    myobj.preventDefault();

    var li = document.createElement('li');
    li.className = emails.value;
    li.id = names.value;
    li.appendChild(document.createTextNode('Name=  ' +names.value +',  Email=' + emails.value));
    
    container.appendChild(li);

    var newbutton = document.createElement('button');
    newbutton.className='btn btn-danger btn-float-right delete';
    
    newbutton.appendChild(document.createTextNode('delete'));
    li.appendChild(newbutton);
    var editbtn = document.createElement('button');
    editbtn.className='btn btn-danger btn-float-right delete';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);
    


newbutton.onclick=   ()  =>{
  
    container.removeChild(li);
    console.log(li);

    localStorage.removeItem(li.id);
}
editbtn.onclick = () => {
    
    document.getElementById('name').value=li.id;
   document.getElementById('email').value=li.className;
   
   container.removeChild(li);
    localStorage.removeItem(li.id);

}
}

function addtostorage(e) {

    let myobj = {
        name: names.value,
        email: emails.value
    };

    axios.post("https://crudcrud.com/api/e2406637d23c41319fcd969d14b2e6de/appointmentData",myobj)
    .then((response)=> {
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })

    // var objstr = JSON.stringify(myobj);
    // localStorage.setItem(names.value, objstr);
    // var newobj = JSON.parse(localStorage.getItem(names.value));
   

}
