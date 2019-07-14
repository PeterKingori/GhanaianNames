function buttonClicked(id) {
	// Will display either the form or a message to the user depending on whether he/she selects Yes or No.
	if (id === 'yesButton') {
		document.getElementById('form').style.display = 'block';
		document.getElementById('noClick').style.display = 'none';
	} else {
		document.getElementById('form').style.display = 'none';
		document.getElementById('noClick').style.display = 'block';
	}
}

function checkValid() {
	// Get the values of the day and month from the form
	var day = document.getElementById('userDay').value;
  var dayInt = parseInt(day);
  var month = document.getElementById("userMonth").value;
  var monthInt = parseInt(month);
  var yearValue = document.getElementById("userYear").value;
  var yearInteger = parseInt(yearValue);
	console.log(day, month, yearValue);
}