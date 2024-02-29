function SendOTP(){
    const email = document.getElementById("email");
    const otpverify = document.getElementsByClassName("email-verify")[0];
    
    let otp_code = Math.floor(Math.random() * 10000);
    let emailbody = `<h1> Your OTP is </h1> ${otp_code}`;
    Email.send({
        SecureToken : "30d3fa8e-b4ee-454b-9228-d19ae6b266bf",
        To : email.value,
        From : "kunduakash423@gmail.com",
        Subject : "Email OTP using Javascript",
        Body : Emailbody,
    }).then(
      message => {
        if(message ==="OK"){
          alert("OTp sent to your email " + email.value);
          
          otpverify.style.display ="flex";
          let otp_inp = document.getElementById("otp-input");
          let otp_btn = document.getElementById("btn-verify-otp");

          otp_btn.addEventListener("click", ()=>{

            if(otp_inp.value == otp_code){

              alert("Email address verified...");
              otpverify.style.display ="none";
              email.value ="";
              otp_inp.value =""; 
            }
            else{
              alert("Invalid OTP")
            }
          })
        }
      }
    );
}