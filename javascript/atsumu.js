function handle(e, character){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that runs
			sendMessage(character);
        }
    }

function mainCheck() {
	var password = 'doodoofart';
	//var passBox = document.getElementById('passBox');
	//var input = document.getElementById('passBox').value;
	
	var input = prompt("Please enter the password to get back to the main page: ","");
	
	if(input === null) {
	return;
	}else	if(input != password) {
		alert('Incorrect password!');
	}else {
	sessionStorage.setItem('passCheck', 1);
	location.href='../mainPage.html';
	}
}

function copyID(user){
	var msgBox = document.getElementById('msgBox');
	msgBox.focus();
	var idValue = document.getElementById(user).value;
	msgBox.value = msgBox.value + idValue + ' ';
}

function sendMessage(character) {
	var msgValue = document.getElementById('msgBox').value;
	var msgContent = document.getElementById('msgBox');
	var request = new XMLHttpRequest();
	var channelCheck = document.getElementsByName('channel');
	var channelName = '';
	
	for (var i = 0, length = channelCheck.length; i < length; i++) {
		if (channelCheck[i].checked) {
			//alert(channelCheck[i].value);
			channelName = channelCheck[i].value;
			break;
		}
	}
	
	var channel = '';
	switch(channelName) {
		case '#otaku-talk':
			channel = 'https://discord.com/api/webhooks/786411804648800268/HV-oqZHtNXYL0grF0Gc-G-6aQsM5YrxJFQtSykY7nF2NgEj3LpB5fSii0EYNxfVCD599';
			break;
		/*case '#haikyuu':
			channel = 'https://discord.com/api/webhooks/786656815626190860/pYQaQZuOncP5deQXwG0RvHhryvI7un3OfvYSCY4Jrxx2B6AdHC_ibmnqWJKPuSqmrzOo';
			break;*/
	}
	
	request.open('POST', channel);
	request.setRequestHeader('Content-type', 'application/json');
	
	var avatar = '';
	switch(character) {
		case 'Atsumu':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/791316827237122048/unknown.png';
}
	
	var params = {
    username: character,
    avatar_url: avatar,
    content: msgValue
	}
	
	request.send(JSON.stringify(params));
	msgContent.value = '';
	msgBox.focus();
}
