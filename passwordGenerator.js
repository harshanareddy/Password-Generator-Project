const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

console.log(characters.length)
let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")
let passwordlen = 0
let hasGeneratedPassword = false



function passwordGenerator(){
   passwordlen = document.getElementById("password-length").value
   if(passwordlen){
        let password1 =  stringGenerator()
        let password2 =  stringGenerator()
        password1El.textContent = password1
        password2El.textContent = password2
        hasGeneratedPassword = true
   }
   else if(passwordlen == ""){
        alert("Please, provide the length of the password")
   }

}

function stringGenerator(){
    let password = ""
    let charCount = 0
    while(charCount<passwordlen){
        let index = Math.floor(Math.random()*(characters.length))
        password = password + characters[index]
        charCount++
    }
    return password;
}

function copyPassword1(){
    if(hasGeneratedPassword === true){
        navigator.clipboard.writeText(password1El.textContent)
        alert("Password is copied!")
    }      
}
function copyPassword2(){
    if(hasGeneratedPassword === true){
        navigator.clipboard.writeText(password2El.textContent)
        alert("Password is copied!")
    } 
}
