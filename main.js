var addstorage = document.getElementById('my-form');
var names = document.getElementById('name');
var emails = document.getElementById('email');

addstorage.addEventListener('submit', addtostorage);

window.addEventListener('DOMContentLoaded', ()=> {
    axios.get("https://crudcrud.com/api/a24677eebf454470b1dbd3c827892713/data")
    .then((response)=> {
        
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            
            additemlist(response.data[i]);
        }
        
    })
})


var container = document.getElementById('my-form');

// container.addEventListener('submit', additemlist);





function addtostorage() {
    
    if(names.value==='' || emails.value===''){
        alert('Plese enter details');
    }
   else {

    let myobj = {
        name: names.value,
        email: emails.value
    };
    
    axios.post("https://crudcrud.com/api/a24677eebf454470b1dbd3c827892713/data",myobj)
    .then((response)=> {
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
    
    // var objstr = JSON.stringify(myobj);
    // localStorage.setItem(names.value, objstr);
    // var newobj = JSON.parse(localStorage.getItem(names.value));
    additemlist(myobj);
}

}
function additemlist(myobj) {
    
   

    var li = document.createElement('li');
    li.className = myobj.name;
    li.id = myobj.email;
    li.appendChild(document.createTextNode('Name= ' +myobj.name +',  Email=' + myobj.email));
    
    container.appendChild(li);

    var newbutton = document.createElement('button');
    newbutton.className='btn btn-danger btn-float-right delete';
    
    newbutton.appendChild(document.createTextNode('Delete'));
    li.appendChild(newbutton);
    var editbtn = document.createElement('button');
    editbtn.className='btn btn-danger btn-float-right delete';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    
    event.preventDefault();

newbutton.onclick=   ()  =>{
  
    container.removeChild(li);
    console.log(li);
    axios.delete(`https://crudcrud.com/api/a24677eebf454470b1dbd3c827892713/data/${myobj._id}`)
    .then((response)=> {
        console.log(response);
    })
    localStorage.removeItem(li.id);
}
editbtn.onclick = () => {
    
    document.getElementById('name').value=li.id;
   document.getElementById('email').value=li.className;
   
   container.removeChild(li);
    localStorage.removeItem(li.id);

}

}