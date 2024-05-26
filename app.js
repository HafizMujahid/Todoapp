

function add () {
    var todopp = document.getElementById("todopp")
    var todoinput = document.getElementById("todoinput")
     console.log("todoinput", todoinput.value)



    var li = document.createElement("li")
li.innerHTML = todoinput.value;
 console.log("li",li)


 var editbtn = document.createElement("button")
 editbtn.innerHTML = "Edit"

 var Deletebtn = document.createElement("button")
 editbtn.innerHTML = "Delete"

 li.appendChild(editbtn)
 li.appendChild(Deletebtn)

todopp.appendChild(li)
todoinput.value = ""







}


