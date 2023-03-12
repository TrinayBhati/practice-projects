let date;
let a;
let time;
setInterval(() => {
	a = new Date();
 date = a.toLocaleDateString();
 time = a.getHours() +  ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("timePrint").innerText = time;
document.getElementById("datePrint").innerText = " " + date;
}, 1000)