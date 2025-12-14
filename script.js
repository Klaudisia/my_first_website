const button = document.querySelector('#love-button');
const body = document.querySelector('body');
const input = document.querySelector('#search');

let isLoved = false;

button.addEventListener('click', () => {
    if(isLoved){
        body.style.backgroundColor = "white";
        button.innerText = "Kocham Kamilka";
        button.style.backgroundColor = "rgba(124, 140, 206, 0.465)";  
        isLoved = false;   
    }else{
        const name = input.value;
        if(name == ""){
            button.innerText= "Kamilek + Klaudia = <3";  
        }else{
            button.innerText = name + " <3";
        }
        button.style.backgroundColor = "white"
        isLoved = true;
    }
});