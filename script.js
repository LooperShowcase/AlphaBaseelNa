function lightMode() {
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
}
function darkMode() {
    document.body.style.backgroundColor="black"
    document.body.style.color="black"
}

function changeBG() {
    document.body.style.background=document.getElementById("color").value
}

function addItem() {
 let item=   document.createElement("li") 
 item.innerHTML=document.getElementById("item").value
 document.getElementById("list").appendChild (item)
}
function changepfp() {
    let newImage= document.getElementById('upload').files[0].name;
    document.getElementById('pfp').src=newImage

}
function lightMode() {
    document.body.classList.remove('dark-mode');
}

function darkMode() {
    document.body.classList.add('dark-mode');
}

function changeBG() {
    const colorPicker = document.getElementById('color');
    const color = colorPicker.value;
    document.body.style.backgroundColor = color;
}
