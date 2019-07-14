function buttonClicked(id) {
	if (id === 'yesButton') {
		document.getElementById('form').style.display = 'block';
		document.getElementById('noClick').style.display = 'none';
	} else {
		document.getElementById('form').style.display = 'none';
		document.getElementById('noClick').style.display = 'block';
	}
}
