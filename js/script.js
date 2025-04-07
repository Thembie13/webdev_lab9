function init(){
	var button = document.getElementById('entrybutton'); // grabs entrybutton from html

	function showMeText(){
		var textbox = document.getElementById('entryinput');
		document.getElementById('textoutput').innerHTML = textbox.value
		alert("Tsithembile Tembo:" + textbox.value)
	}

  button.addEventListener('click', showMeText)

}
window.addEventListener('load', init);  
