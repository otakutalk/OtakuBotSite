function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that runs
			mainCheck();
        }
    }

function mainCheck() {
	var password = 'crtmh';
	var testPass = 'uwu';
	var passBox = document.getElementById('passBox');
	var input = document.getElementById('passBox').value;
	//var input = prompt("Please enter the password to get back to the main page: ","");
	
	if(input === null) {
		alert('Please enter a password to continue');
	}else if(input == password){
	location.href='./mainPage.html';
	//localStorage.setItem('passCheck', null);
	sessionStorage.setItem("passCheck",1);
	}else if(input == testPass){
		location.href='./html/testPage.html';
		sessionStorage.setItem('testCheck',1);
	}else	if(input != password && input!= testPass) {
		alert('Incorrect password!');
		passBox.value = '';
		passBox.focus();
	}
}
