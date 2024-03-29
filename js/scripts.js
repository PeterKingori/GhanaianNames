function buttonClicked(id) {
	// Will display either the form or a message to the user depending on whether he/she selects Yes or No.
	if (id === 'yesButton') {
		document.getElementById('form').style.display = 'block';
		document.getElementById('noClick').style.display = 'none';
		document.getElementById('result').style.display = 'none';
		document.getElementById('resetButton').style.display = 'block';
	} else {
		document.getElementById('form').style.display = 'none';
		document.getElementById('result').style.display = 'none';
		document.getElementById('noClick').style.display = 'block';
	}
}

function checkValid() {
	// Get the values of the day and month from the form
	var day = parseInt(document.getElementById('userDay').value);
//	var dayInt = parseInt(day);
	var month = parseInt(document.getElementById("userMonth").value);
//	var monthInt = parseInt(month);
	var year = parseInt(document.getElementById("userYear").value);
//	var yearInteger = parseInt(yearValue);

	//Check the validity of the day and month digits
	if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 1900)) {
		if (month === 2 && day > 29) {
			alert('Enter a valid day for the month of February.');
		} else {
			document.getElementById("reportBack").innerHTML = 'Great!';
			calculateDay();
		}
	} else if (day <= 0 || day > 31) {
		alert('Enter a valid day of the month.');
	} else if (month <= 0 || month > 12) {
		alert('Enter a valid month of the year.');
	} else if (year < 1900) {
		alert('You are not that old!');
	} else {
		document.getElementById('reportBack').innerHTML = 'Enter valid values in the form for it to output your results.';
		alert('Enter valid values in the form for it to output your results.');
	}
//	console.log(day, typeof(day), month, typeof(month), year, typeof(year));
	document.getElementById('form').style.display = 'none';
	document.getElementById('result').style.display = 'block';
}

// This function will calculate the day of the week the person was born on
function calculateDay() {
	var date = parseInt(document.getElementById('userDay').value);
//	var dateInt = parseInt(date);
	var month = parseInt(document.getElementById('userMonth').value);
//	var monthInt = parseInt(month);
	var year = parseInt(document.getElementById('userYear').value);
//	var yearInt = parseInt(year);

	if (month >= 3) {
		month -= 2;
	} else {
		month += 10;
	}
	if ((month === 11) || (month === 12)) {
		year--;
	}
	var century = Math.floor(year / 100);
	var yearDigits = year % 100;

	var dayOfBirth = (date + Math.floor((2.6 * month) - 0.2) + yearDigits + Math.floor(yearDigits / 4) + Math.floor(century / 4) - (2 * century)) % 7;

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
	
	if (gender === 'male') {
		dayWeek = daysOfWeek[dayOfBirth];
		akanName = maleNames[dayOfBirth];
    document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
	} else {
		dayWeek = daysOfWeek[dayOfBirth];
		akanName = femaleNames[dayOfBirth];
    document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
	}
}


//  if (gender === "male") {
//    if (dayOfBirth === 0) {
//      dayWeek = daysOfWeek[0];
//      akanName = maleNames[0];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 1) {
//      dayWeek = daysOfWeek[1];
//      akanName = maleNames[1];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 2) {
//      dayWeek = daysOfWeek[2];
//      akanName = maleNames[2];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 3) {
//      dayWeek = daysOfWeek[3];
//      akanName = maleNames[3];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 4) {
//      dayWeek = daysOfWeek[4];
//      akanName = maleNames[4];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 5) {
//      dayWeek = daysOfWeek[5];
//      akanName = maleNames[5];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 6) {
//      dayWeek = daysOfWeek[6];
//      akanName = maleNames[6];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    }
//  } else {
//    if (dayOfBirth === 0) {
//      dayWeek = daysOfWeek[0];
//      akanName = femaleNames[0];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 1) {
//      dayWeek = daysOfWeek[1];
//      akanName = femaleNames[1];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 2) {
//      dayWeek = daysOfWeek[2];
//      akanName = femaleNames[2];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 3) {
//      dayWeek = daysOfWeek[3];
//      akanName = femaleNames[3];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 4) {
//      dayWeek = daysOfWeek[4];
//      akanName = femaleNames[4];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 5) {
//      dayWeek = daysOfWeek[5];
//      akanName = femaleNames[5];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    } else if (dayOfBirth === 6) {
//      dayWeek = daysOfWeek[6];
//      akanName = femaleNames[6];
//      document.getElementById("reportTwo").innerHTML = ("Hi " + userName + ". You were born on a " + dayWeek + ", and your Akan name is " + akanName);
//    }
//  }		
















