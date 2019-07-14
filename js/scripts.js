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
	
  //Check the validity of the day and month digits
  if ((dayInt > 0 && dayInt <= 31) && (monthInt > 0 && monthInt <= 12) && (yearInteger >= 1900)) {
    if (monthInt === 2 && dayInt > 29) {
      alert('Enter a valid day for the month of February.');
    } else {
      document.getElementById("reportBack").innerHTML = 'Great!';
      calculateDay();
    }
  }
	else if (dayInt <= 0 || dayInt > 31)
	{
    alert('Enter a valid day of the month.');
  }
	else if (monthInt <= 0 || monthInt > 12)
	{
    alert('Enter a valid month of the year.');
  }
	else if (yearInteger < 1900)
	{
    alert('You are not that old!');
  }
	else
	{
    document.getElementById('reportBack').innerHTML = 'Enter valid values for the day and month of the year.';
  }
}
	





