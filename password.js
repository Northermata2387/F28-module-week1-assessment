// PASSWORD VALIDATOR


// CODE HERE 

let password = 'Doggies74839'

// checking variable requirements are met
let numCheck = false
let upperCheck = false
let letterCheck = false
let minChars = false

for(let i = 0; i < password.length; i++){
    //verfiy password contains at min one number
    if(!isNaN(+password[i])){
        numCheck = true
    }

    //verify number is uppercase
    if (password [i] === password[i].toUpperCase() && isNaN(+password[i])){
        upperCheck = true
    }
}

//verify password contains at min one letter
if(/[a-zA-Z].test(password)/){
    letterCheck = true
}

//verify password has min and max char length
if(password.length >= 10 && password.length <= 20){
minChars = true
}

if(minChars && letterCheck && upperCheck && numCheck){
    console.log('Password Verified!')
} else {
    console.log('Check your password to make sure it fills all the requirements')
}