$(document).ready(function(){


    document.getElementById('profilecard').style.display="none";

    searchUser =() => {


        


        $.ajax({
            url: "http://localhost:3000/searchuser",
            method: "POST",
            data: {
                email : document.getElementById('email').value,
                
            },
            success: (result) => {
                console.log("====>in frontensadd",result.email);
                if(result===null) {
                    document.getElementById('email').value = "User Not Found";
                    document.getElementById('email').style.color="red";
                }
    
                else {
                    //document.getElementById('profilecard').style.display="block";
                    $('#profilecard').slideToggle();
                    document.getElementById('fname').innerHTML= result.firstName +" "+ result.lastName;
                  
                    document.getElementById('emailtext').innerHTML= result.email;
    
    
                }
            } ,
        
        });
       
    }
    
    




});

