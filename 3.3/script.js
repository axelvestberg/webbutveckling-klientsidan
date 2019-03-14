function myAlert() {
	alert("Alert box activated beep boop");
}
function myConfirm() {
	confirm("Klicka på ett alternativ");
}
function myPrompt() {
	prompt("Skriv något skoj");
}

var myWindow;
function myOpen() {
	myWindow = window.open(
		"https://google.se",
		"_blank",
		"width=1200, height=700"
	);
	console.log("open");
}
function myClose() {
	myWindow.close();
	console.log("close");
}
