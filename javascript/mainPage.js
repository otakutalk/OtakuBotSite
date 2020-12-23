function mainCheck() {
	var passCheck = sessionStorage.getItem("passCheck");
	console.log(passCheck);
	if(!passCheck){
		location.href='index.html';
	} else if(passCheck === 1) {
		return;
	}
};

function copyID(user){
	var msgBox = document.getElementById('msgBox');
	msgBox.focus();
	var idValue = document.getElementById(user).value;
	msgBox.value = msgBox.value + idValue + ' ';
};

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
		case '#emotional-support':
			channel = 'https://discord.com/api/webhooks/786576562681806878/Kiv0cI5NJ22SQUnB7nHr6N169dIguUkZIm9SoclgQUmFFyWUsEwvYCQGhRs0qO1JC5pW';
			break;
		case '#haikyuu':
			channel = 'https://discord.com/api/webhooks/786656815626190860/pYQaQZuOncP5deQXwG0RvHhryvI7un3OfvYSCY4Jrxx2B6AdHC_ibmnqWJKPuSqmrzOo';
			break;
		case '#bot-channel':
			channel = 'https://discord.com/api/webhooks/786570252888047627/XWj3-I97XdQdFsglQiUZh5FnoAg3s_a27hCNcNczXTTbGG9rSwENrKmWuMZyymyTrXvu';
	}
	
	request.open('POST', channel);
	request.setRequestHeader('Content-type', 'application/json');
	
	var avatar = '';
	switch(character) {
		case 'Tsukki':
			avatar = 'https://cdn.discordapp.com/attachments/532403178768039940/786402334367678534/bleh-7032.png';
			break;
		case 'Tendou':
			avatar = 'https://cdn.discordapp.com/attachments/532403178768039940/786403557896355870/lwd6acnojr.png';
			break;
		case 'Kenma':
			avatar = 'https://cdn.discordapp.com/attachments/731366873806929930/786404996068933672/7b3fc75f386cf49ebb9516ea98d3b607.png';
			break;
		case 'Kuroo':
			avatar = 'https://cdn.discordapp.com/attachments/731366873806929930/786405115095023626/latest.png'
			break;
		case 'Kageyama':
			avatar = 'https://cdn.discordapp.com/attachments/731366873806929930/786405243675869214/original.png';
			break;
		case 'Hinata':
			avatar = 'https://cdn.discordapp.com/attachments/731366873806929930/786405345584742486/cccda6f18583df1e4c6e1fe57d21320371cab360_00.png';
			break;
		case 'Ciel':
			avatar = 'https://cdn.discordapp.com/attachments/772508309465989140/786416262683164692/image0.jpg';
			break;
		case 'Alois':
			avatar = 'https://media.discordapp.net/attachments/772508309465989140/786416228503388180/image0.jpg';
			break;
		case 'Oikawa':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786585723385413693/336324826052201.png';
			break;
		case 'Bokuto':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786586486773514250/qqz2asvw4aj51.png';
			break;
		case 'Daichi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786586529409269770/170833.png';
			break;
		case 'Suga':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786586561868988416/4efbf5b659b05f31ac38ee6c53973d1a.png';
			break;
		case 'Noya':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786586609801101322/7f85eb612a2fc1c8b58c1b9ca72e2ad9.png';
			break;
		case 'Tanaka':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786586649600983060/5d68de542c3477013c7ac02e2bdeca9a.png';
			break;
		case 'Yamaguchi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786587110391414784/EVLiPB_UEAAyb4H.png';
			break;
		case 'Asahi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786588822225158174/250885.png';
			break;
		case 'Ushijima':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786588858506280980/yrXnBkVt.png';
			break;
		case 'Akaashi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786588901736579132/300.png';
			break;
		case 'Lev':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786588952328798228/ee4277c4d3f4f59c73fea3ef5baa4f90.png';
			break;
		case 'Iwaizumi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786625825201455140/39563e54ee28340bf6120a0f57bcf6d9.png';
			break;
		case 'Kindaichi':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786712971974803496/2Q.png';
			break;
		case 'Yuzu':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786940604016885840/6NJRG9.png';
			break;
		case 'Mei':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/786941223880753162/latest.png';
			break;
		case 'Osamu':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/791315977018933258/unknown.png'
			break;
		case 'Atsumu':
			avatar = 'https://cdn.discordapp.com/attachments/643322146931867648/791316827237122048/unknown.png'
			break;
		case 'Kakeru':
			avatar = 'https://cdn.discordapp.com/attachments/731366873806929930/786427810403057694/orange-kakeru-naruse.png';
	}
	
	var params = {
    username: character,
    avatar_url: avatar,
    content: msgValue
	}
	
	request.send(JSON.stringify(params));
	msgContent.value = '';
	msgBox.focus();
};

window.onload = mainCheck();
