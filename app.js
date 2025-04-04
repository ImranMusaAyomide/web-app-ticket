     
     const avatarImageInput = document.querySelector("input#avatar");
     const avatarIcon = document.getElementById("avatar-icon");
     const avatarBtnContainer = document.getElementById ("avatar-btn-container");
     const dragDropPar = document.querySelector("#avatar-label > div p");

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
    