function validamount(){
	 var p = parseFloat(document.getElementById("Amount"));
if(p < 1) {
		alert("Enter a positive number");
		document.getElementById("Amount").focus();
		return false;
    }
    return true;
}
function showslider(x) {
   
		 document.getElementById("rateSpan").innerText = x;
}
function compute()
{
    var p = parseFloat(document.getElementById("Amount").value);
   var r = parseFloat(document.getElementById("Interest rate").value);
    var n= parseFloat(document.getElementById("No. of Years").value);
     var Interest = p*r*n/100;
     var FY = new Date().getFullYear() + n;
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+p+"</mark>,<br /> at an interest rate of <mark>"+r+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+FY+"</mark>";

}
        

