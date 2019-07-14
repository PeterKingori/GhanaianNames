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
	} else if (dayInt <= 0 || dayInt > 31) {
		alert('Enter a valid day of the month.');
	} else if (monthInt <= 0 || monthInt > 12) {
		alert('Enter a valid month of the year.');
	} else if (yearInteger < 1900) {
		alert('You are not that old!');
	} else {
		document.getElementById('reportBack').innerHTML = 'Enter valid values for the day and month of the year.';
	}
//	console.log(dayInt, typeof(dayInt), monthInt, typeof(monthInt), yearInteger, typeof(yearInteger));
}

// This function will calculate the day of the week the person was born on
function calculateDay() {
	var date = document.getElementById('userDay').value;
	var dateInt = parseInt(date);
	var month = document.getElementById('userMonth').value;
	var monthInt = parseInt(month);
	var year = document.getElementById('userYear').value;
	var yearInt = parseInt(year);

	if (monthInt >= 3) {
		monthInt -= 2;
	} else {
		monthInt += 10;
	}
	if ((monthInt === 11) || (monthInt === 12)) {
		yearInt--;
	}
	var centuryDigits = Math.floor(yearInt / 100);
	var yearDigits = yearInt % 100;

	var dayOfBirth = (dateInt + Math.floor((2.6 * monthInt) - 0.2) + yearDigits + Math.floor(yearDigits / 4) + Math.floor(centuryDigits / 4) - (2 * centuryDigits)) % 7;

	if (dayOfBirth < 0) {
		dayOfBirth += 7;
	}
//  console.log(dayOfBirth);
	
	var gender = document.querySelector('input[name="gender"]:checked').value;
	var userName = document.getElementById("userName").value;
	var akanName;
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dayWeek;
	var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
	
//	console.log(dayOfBirth, gender, userName);
}






