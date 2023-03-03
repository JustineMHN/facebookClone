/* DECLARATION DES VARIABLES */
var cover = document.querySelector('.cover')
var file_cover_input = document.getElementsByClassName('cover')[0].children[0]
var file_profile_input = document.getElementsByClassName('profile-picture')[0].children[0]
var cover_image = document.getElementsByClassName('cover')[0].children[1]
var fileList = file_cover_input.files
var profile_picture = document.getElementsByClassName('profile-picture')[0]
var profile_picture_image = document.getElementsByClassName('profile-picture')[0].children[1]


/* OBJET D'EVENEMENT */

var listenerEvent = {
    addCover : ()=>{        
        file_cover_input.click()
    },
    addProfile : ()=>{     
        file_profile_input.click()
    },
    fileChange : (ev)=>{
        var ifiles = ev.target.files
        var content = ev.target.parentNode.children[1]
        var file = ifiles[0]
        var reader = new FileReader()
        content.innerHTML = " "
        if (file) {
            reader.readAsDataURL(file)
        }

        reader.onload = ()=> {
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                var img = new Image()
                img.src = reader.result
                content.appendChild(img)
            }else console.log('Choisissez une extension jpeg');
            /* console.log(reader.result); */
        } 
       
    }
}


/* DECLENCHEUR D'EVENEMENT */

var setupListener = ()=> {
    cover.onclick = listenerEvent.addCover
    profile_picture.onclick = listenerEvent.addProfile
    file_cover_input.onchange = listenerEvent.fileChange
    file_profile_input.onchange = listenerEvent.fileChange
}