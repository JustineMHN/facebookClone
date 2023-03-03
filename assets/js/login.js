/* DECLARATION DES VARIABLES */
var login_create_account = document.getElementById("login-create-account")
var container_register_main = document.getElementById("container-register-main")
var overlay = document.getElementsByClassName("overlay")[0]
var close = document.getElementById("close")
var eyes_icon = document.getElementsByClassName("eye-icon")
var formLogin = document.forms[0]
var formRegister = document.forms[1]
var firstname = formRegister.elements['firstname']
var lastname = formRegister.elements['lastname']
var email = formRegister.elements['email']
var emailLogin = formLogin.elements['email']
var password = formRegister.elements['password']
var passwordLogin = formLogin.elements['password']
var Confirmpassword = formRegister.elements['confirm-password']
var submit = formRegister.elements['submit']
var check = {}
/* ECOUTEURS D'EVENEMENT */

var listenerEvent ={
    openRegisterForm : ()=>{
        container_register_main.style.display = "block";
        overlay.style.display = "block";
    },
    closeRegisterForm : ()=>{
        container_register_main.style.display = "none";
        overlay.style.display = "none";
    },
    toggleEye : (ev)=>{
        ev.target.classList.toggle ('fa-eye-slash')
        var input = ev.target.parentNode.children[0];
        /* console.log(ev.target.classList);  */
        if (input.type === 'password') {
            input.type = 'text'
        } else {
            input.type = 'password'
        }
    },
    checkFirstname : (ev)=>{
        var input = ev.target
        var  content = input.value.trim()
        var error = ''
        document.getElementsByClassName('error-firstname').innerHTML = ' '
        if (!content) {
            error = "Veuillez renseigner votre prénom "
        }
       else if (!/^[a-zA-Z-]+$/.test(content)) {
            error = "Veuillez eviter les caractères spéciaux dans votre prénom"
        }
        if(content.length > 20){
            error = "La longueur du champ ne peut pas excéder 20 caractères"
        }
        if (error) {
            check = {...check, firstname: false}
            document.getElementById('error-firstname').innerHTML = error
        }else{
            check = {...check, firstname: true}
            document.getElementById('error-firstname').innerHTML = " "
        }
        setSubmitButton()
    },
    checkLastname : (ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-lastname').innerHTML = ' '
        if (!content) {
            error = "Veuillez renseigner votre nom "
        }
       else if (!/^[a-zA-Z-]+$/.test(content)) {
            error = "Veuillez eviter les caractères spéciaux dans votre nom"
        }
        if(content.length > 20){
            error = "La longueur du champ ne peut pas excéder 20 caractères"
        }
        if (error) {
            check = {...check, lastname: false}
            document.getElementById('error-lastname').innerHTML = error
        }else{
            check = {...check, lastname: true}
            document.getElementById('error-lastname').innerHTML = " "
        }
        setSubmitButton()
    },
    checkEmail :(ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-email').innerHTML = ' '
        if (!content) {
            error = "Veuillez renseigner votre adresse mail "
        }
       else if (!/^[a-zA-Z.-_]+[0-9]*[@][a-zA-Z.-_]+[.][a-z]{2,5}$/.test(content)) {
            error = "Veuillez respecter la syntax d'email: exemple89@exemple.com"
        }
        if (error) {
            check = {...check, email: false}
            document.getElementById('error-email').innerHTML = error
        }else{
            check = {...check, email: true}
            document.getElementById('error-email').innerHTML = " "
        }
        setSubmitButton()
    },
    checkLoginEmail :(ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-login-email').innerHTML = ' '
        if (!content) {
            error = "Veuillez renseigner votre adresse mail "
        }
       else if (!/^[a-zA-Z.-_]+[0-9]*[@][a-zA-Z.-_]+[.][a-z]{2,5}$/.test(content)) {
            error = "Veuillez respecter la syntax d'email: exemple89@exemple.com"
        }
        if (error) {
            check = {...check, email: false}
            document.getElementById('error-login-email').innerHTML = error
        }else{
            check = {...check, email: true}
            document.getElementById('error-login-email').innerHTML = " "
        }
        setLoginSubmitButton()
    },
    checkPassword :(ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-password').innerHTML = ' '
        if (!content){
            error = "Veuillez créer un mot de passe "
        }
        else if (!/^(?=.*[A-Z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@-_$!&])[A-Za-z@-_$!&\d]{8,}$/.test(content)){
            error = "Mininum 8 caractère avec au moins un Majuscule, un Miniscul un Chiffre et un Caractère speciaux"
        }
        if (error) {
            check = {...check, password: false}
            document.getElementById('error-password').innerHTML = error
        }else{
            check = {...check, password: true}
            document.getElementById('error-password').innerHTML = " "
        }
        setSubmitButton()
    },
    checkLoginPassword :(ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-login-password').innerHTML = ' '
        if (!content){
            error = "Veuillez saisir votre mot de passe "
        }
        else if (!/^(?=.*[A-Z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@-_$!&])[A-Za-z@-_$!&\d]{8,}$/.test(content)){
            error = "Un Majuscule, un Miniscul un Chiffre et un Caractère speciaux"
        }
        if (error) {
            check = {...check, password: false}
            document.getElementById('error-login-password').innerHTML = error
        }else{
            check = {...check, password: true}
            document.getElementById('error-login-password').innerHTML = " "
        }
        setLoginSubmitButton()
    },
    checkConfirmPassword :(ev)=>{
        var input = ev.target
        var content = input.value.trim()
        var error = '' 
        document.getElementsByClassName('error-confirm-password').innerHTML = ' '
        if (!content){
            error = "Veuillez confirmer votre mot de passe "
        }
        else if (input.value !== password.value){
            error = "Les deux mot de passe ne se correspondent pas"   
        }
        if (error) {
            check = {...check, Confirmpassword: false}
            document.getElementById('error-confirm-password').innerHTML = error
        }else{
            check = {...check, Confirmpassword: true}
            document.getElementById('error-confirm-password').innerHTML = " "
        }
        setSubmitButton()
    }

}

/* FUNCTION ALLOW TO VERIFY THE REGISTER'FORM VALIDITY -- IF ALL KEY IN CHECK'OBJECT IS TRUE OR FALSE */
var checkFormValidity = ()=>{
    var result = true
    if (formRegister) {
        if (Object.keys(check).length === 5){
            for (const key in check) {
                if (Object.hasOwnProperty.call(check, key)) {
                    const value = check[key];
                        result = result && value
                    if (!result) {
                        /* console.log(result); */
                        return result
                    }   
                }
            }
            return result
        }
    }
    return false
    
}

/* FUNCTION ALLOW TO VERIFY THE LOGIN'FORM VALIDITY -- IF ALL KEY IN CHECK'OBJECT IS TRUE OR FALSE */
var checkFormLoginValidity = ()=>{
    var result = true
    if (formLogin) {
        if (Object.keys(check).length === 2){
            for (const key in check) {
                if (Object.hasOwnProperty.call(check, key)) {
                    const value = check[key];
                        result = result && value
                    if (!result) {
                        /* console.log(result); */
                        return result
                    }   
                }
            }
            return result
        }
    }
    return false
    
}

/* FUNCTION ALLOW TO VERIFY THE STATE OF THE REGISTER SUBMIT BUTTON -- DISPLAY OR NOT THE OPACITY OF THE BUTTON*/
var setSubmitButton = ()=>{
    if (formRegister) {
        if (checkFormValidity()) {  
            if (formRegister.elements[11]) {
                formRegister.elements[11].disabled = false
            }
        } else formRegister.elements[11].disabled = true
    }
}

/* FUNCTION ALLOW TO VERIFY THE STATE OF THE LOGIN SUBMIT BUTTON -- DISPLAY OR NOT THE OPACITY OF THE BUTTON*/
var setLoginSubmitButton = ()=>{
    if (formLogin) {
        if (checkFormLoginValidity()) {  
            if (formLogin.elements[2]) {
                formLogin.elements[2].disabled = false
            }
        } else formLogin.elements[2].disabled = true
    }
}

/* DECLENCHEUR D'EVENEMENT */
var setuplistener =()=>{
    login_create_account.addEventListener("click", ()=>{
        listenerEvent.openRegisterForm();
    }) 
    close.addEventListener("click", ()=>{
        listenerEvent.closeRegisterForm();
    })
    for (let index = 0; index < eyes_icon.length; index++) {
        const eye = eyes_icon[index];      
        eye.addEventListener("click", listenerEvent.toggleEye)
    }
    
    firstname ? firstname.oninput = listenerEvent.checkFirstname : null
    lastname ? lastname.oninput = listenerEvent.checkLastname : null
    email ? email.oninput = listenerEvent.checkEmail : null
    password ? password.oninput = listenerEvent.checkPassword : null
    email ? emailLogin.oninput = listenerEvent.checkLoginEmail : null
    password ? passwordLogin.oninput = listenerEvent.checkLoginPassword : null
    Confirmpassword ? Confirmpassword.oninput = listenerEvent.checkConfirmPassword : null
    
} 
