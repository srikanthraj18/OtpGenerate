 var otp;
        function otpgen()
        {
            var num1=Math.trunc(Math.random()*10);
            var num2=Math.trunc(Math.random()*10);
            var num3=Math.trunc(Math.random()*10);
            var num4=Math.trunc(Math.random()*10);
            var otp=`${num1}${num2}${num3}${num4}`
return otp
        }
        function Otpoutput()
        {
            otp=otpgen()
            document.getElementById("otp").innerHTML=otp
            document.getElementById("otpoutput").style.display="flex"
        }
 function closeoutput()
 {
    document.getElementById("otpoutput").style.display="none"

 }
 function accessotp(){
    var usergiveotp=document.getElementById("userval").value   
    if(usergiveotp==otp)
    {
        document.getElementById("message").innerHTML="Access Granted"
         document.getElementById("message").style.color="green"
    }
    else{
        document.getElementById("message").innerHTML="Access Denied"
        document.getElementById("message").style.color="red"

    }
 }
