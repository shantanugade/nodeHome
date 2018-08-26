showUserAdmin = () => {

    $.ajax({
        url: "http://localhost:3000/userprofileadmin",
        method: "POST",
        data: {
            userToken:localStorage.getItem('token')
        },
        success: (result) => {

            console.log("======>",result.firstName);
            //document.write("user.png");
        //    document.getElementById('userImg').src = "./user.png";
           document.getElementById('fname').innerHTML= result.firstName +" "+ result.lastName
           document.getElementById('email').innerHTML= result.email;
         
            
        } ,
    
    });
   
}