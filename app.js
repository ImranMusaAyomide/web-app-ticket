     
     const avatarImageInput = document.querySelector("input#avatar");
     const avatarIcon = document.getElementById("avatar-icon");
     const avatarBtnContainer = document.getElementById ("avatar-btn-container");
     const dragDropPar = document.querySelector("#avatar-label > div p");
<<<<<<< HEAD
     const removeUploadedFileBtn = document.querySelector("#avatar-btn-container button#remove-img");
     const nameInput = document.getElementById("fullname")
     const emailInput =document.getElementById("email") 
     const usernameInput =document.getElementById("gitusername");
     const form = document.querySelector("form");
     const formMain =document.getElementById("form-main");
     const ticketMain =document.getElementById("ticket-main");


     const fullnameSpan = document.querySelector ("#ticket-main h1 > span")
     const emailSpan = document.querySelector ("#ticket-main p > span")
     const userImg = document.querySelector ("#user-info-img")
     const ticketUserNamePar = document.querySelector ("#user-info #user-name")
     const userGitIdSpan = document.querySelector ("#user-info #user-gitid")
     const ticketIdPar = document.querySelector ("#ticket-main #ticketid")

     const defaultAvatar = avatarIcon.src;
=======

>>>>>>> ecc69c945384fb15130a82287bc38475d17ffdac
     avatarImageInput.onchange = () => {
        let reader;
        if (avatarImageInput.files && avatarImageInput.files[0]) {
            reader = new FileReader();
            
            reader.onload = function(e){
                avatarIcon.setAttribute("src", e.target.result);
            }
            avatarBtnContainer.style.display = "block";
            dragDropPar.style.display = "none";
        } else {
            avatarBtnContainer.style.display = "none";
            dragDropPar.style.display = "block";
        }
        reader.readAsDataURL(avatarImageInput.files[0]);
     } 
<<<<<<< HEAD
     removeUploadedFileBtn.onclick = () => {
        avatarImageInput.files = null;
        avatarBtnContainer.style.display =  "none";
        dragDropPar.style.display= "block";
        avatarIcon.src = defaultAvatar;
     }

     form.onsubmit = (e) => { 
        e.preventDefault();

        let ticketCode = Math.floor((Math.random() * 9999) +1);
        ticketCode = ticketCode.toString().padStart(5, "0");    

        fullnameSpan.innerHTML = nameInput.value;
        emailSpan.innerHTML = emailInput.value;
        userGitIdSpan.innerHTML = usernameInput.value;
        ticketUserNamePar.innerHTML= nameInput.value;
        ticketIdPar.innerHTML = "#" + ticketCode;
        userImg.src = avatarIcon.src;

        formMain.style.display = "none";
        ticketMain.style.display = "block";
    }

=======
>>>>>>> ecc69c945384fb15130a82287bc38475d17ffdac
    