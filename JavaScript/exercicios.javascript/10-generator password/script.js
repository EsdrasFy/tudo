let sliderElement = document.querySelector ("#slider");
let buttonElement = document.querySelector ("#button");
let hide = document.querySelector(".hide");

let sizePassword = document.querySelector ("#valor");
let password = document.querySelector ("#password");

let containerPassword = document.querySelector ("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
button.addEventListener ("click", generatePassword) /* tive q fazer deste modo, pois o onclick estava dando erro */


function generatePassword(){
let pass = " ";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))

    }
    /*containerPassword.classList.remove("hide"),  n deu certo esse metodo igual ao video*/

    console.log(pass)
    hide.style.display = "block";
    password.innerHTML = pass;
    
    novaSenha = pass;

}
password.addEventListener ("click", copyPassword)

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);

    deletePass()
}
function deletePass(){
    hide.style.display = "none";
}
