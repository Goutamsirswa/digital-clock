setInterval(DisplayClock ,1000);
function DisplayClock()
{
var CT=new Date();
var temp=CT.toLocaleTimeString();
document.getElementById('clock').innerHTML=temp;
}
