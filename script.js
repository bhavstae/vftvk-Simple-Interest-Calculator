
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var finalyear = new Date().getFullYear() + years;
	
    document.getElementById("result").innerHTML="<br />If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + finalyear + "</mark>";

}
function validamount(){
	 var principal = document.getElementById("principal").value;
if(principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	return;
    
}}
function showslider() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}
