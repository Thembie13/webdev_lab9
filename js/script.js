function init(){
	var button = document.getElementById('entrybutton'); // grabs entrybutton from html

	function showMeText(){
		var textbox = document.getElementById('entryinput');
		document.getElementById('textoutput').innerHTML = textbox.value
		alert("Tsithembile Tembo:" + textbox.value)
	}

  //function ShowMetext deals: 
  // 1. gets entry button 
  // 2. makes the textoutput have the  textbox.value
  // 3. alaert box has my name and the textbox.value  

  button.addEventListener('click', showMeText) // button clicked -> showMeText Function 

}
window.addEventListener('load', init);  // function loads 
