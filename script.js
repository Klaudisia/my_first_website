const button = document.querySelector('#love-button');
const body = document.querySelector('body')

let isLoved = false;

button.addEventListener('click', () => {
    if(isLoved){
        body.style.backgroundColor = "white";
        button.innerText = "Kocham Kamilka";
        button.style.backgroundColor = "rgba(124, 140, 206, 0.465)";  
        isLoved = false;   
    }else{
        
        button.innerText= "Kamilek + Klaudia = <3";
        button.style.backgroundColor = "white";
        isLoved = true;
    }
});