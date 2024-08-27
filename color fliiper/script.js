let colorText = document.getElementById('colorText');
let btn = document.getElementById('btn');
let bgcolor = document.getElementById('bgcolor');
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F'];

btn.addEventListener('click',changebg)
    function changebg(){
    let hexcolor = "#"
    for (let i=0;i<6;i++){
        hexcolor += randomHexValue();
    }
    bgcolor.style.backgroundColor = hexcolor
 
    colorText.innerHTML = hexcolor
    
}

function randomHexValue(){
   let HexValue = Math.floor(Math.random()*16);
   return hex[HexValue]
}

