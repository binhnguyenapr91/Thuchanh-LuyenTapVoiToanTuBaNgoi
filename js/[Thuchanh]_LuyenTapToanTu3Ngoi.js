function tinhBai1() {
    let inputA = document.getElementById("numberA").value;
   // alert(inputA)
    a= parseInt(inputA);
    let inputB = document.getElementById("numberB").value;
    //alert(inputB);
    b= parseInt(inputB);
    //alert(a+b);
    let result = (a+b<4) ? "Below":"Over";
    //alert(result)
    document.getElementById("resultbai1").innerHTML = "Ket qua: "+ result;

}

function tinhBai2() {
    let inputMessage = document.getElementById("message").value;
    //alert(inputMessage);

    let result = (inputMessage == "Employee") ? "Hello" : (inputMessage == "Director") ? "Greeting" : (inputMessage =="") ? "No Login": "";
    //alert(result)
    document.getElementById("resultbai2").innerHTML = "Message: "+ result;

}