$(document).ready(function () {
    $("#profilecard").hide();

    searchUser = () => {

        $.ajax({
            url: "http://localhost:3000/searchuser",
            method: "POST",
            data: {
                email: document.getElementById('email').value,
                userToken: localStorage.getItem('token'),

            },
            success: (result) => {

                if (result === null) {
                    alert("User Not Found");
                }

                else {
                    $('#profilecard').slideToggle();
                    document.getElementById('fname').innerHTML = result.firstName + " " + result.lastName;

                    document.getElementById('emailtext').innerHTML = result.email;


                }
            },

        });

    }






});

