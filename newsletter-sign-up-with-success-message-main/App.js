const emailForm = document.getElementById('emailinfo');
const email = document.getElementById('email');
const label = document.getElementById("label");
const state = document.getElementById("state");
const close = document.getElementById("close");

emailForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("hello")
    let email = document.getElementById('email');
    let notValid = document.getElementById("errorMsg");
    const normalState = document.getElementById("normalState");
    const successState = document.getElementById("successState")

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!emailPattern.test(email.value)) {
                notValid.style.display = "flex";
            } else {
                notValid.style.display = "none";
                normalState.style.display = "none";
                successState.style.display="block";
                const data = new FormData(emailForm)
                const userEmail = data.get("email")

                close.addEventListener("click", function(){
                    normalState.style.display = "block";
                    successState.style.display="none";
                })


                document.getElementById("thankyou").innerText=`
                A confirmation email has been sent to ${userEmail}. 
                Please open it and click the button inside to confirm your subscription.

                `

                
            }


});

