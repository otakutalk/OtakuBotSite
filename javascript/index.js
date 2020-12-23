function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that runs
			mainCheck();
        }
    }

function mainCheck() {
	var password = 'crtmh';
	var passBox = document.getElementById('passBox');
	var input = document.getElementById('passBox').value;
	//var input = prompt("Please enter the password to get back to the main page: ","");
	
	if(input === null) {
		alert('Please enter a password to continue');
	}else	if(input != password) {
		alert('Incorrect password!');
		passBox.value = '';
		passBox.focus();
	}else {
	location.href='./mainPage.html';
	//localStorage.setItem('passCheck', null);
	sessionStorage.setItem("passCheck",1);
	}
}
