function testCheck() {
	var testCheck = sessionStorage.getItem("testCheck");
	console.log(testCheck);
	if(!testCheck){
		location.href='index.html';
	} else if(testCheck === 1) {
		return;
	}
};

function mainCheck() {
	var password = 'crtmh';
	var passwordCheck = sessionStorage.getItem('passCheck');

    if(!passwordCheck){
        var input = prompt("Please enter the password to get back to the main page: ","");
	if(input === null) {
	return;
	}else	if(input != password) {
		alert('Incorrect password!');
	}else {
	sessionStorage.setItem('passCheck', 1);
	location.href='../mainPage.html';

	}
}else{
    location.href='../mainPage.html';
}}

function sendMessageTest(fieldArray) {
    var fieldArray = [];
    var channelCheck = document.getElementsByName('channel');
    var check = document.getElementById("embedAdd").checked;

    //---Fields---\\
    var msgContent = document.getElementById('msgBox');
    var fieldsBox = document.getElementById('fields');
    var colorPicker = document.getElementById('color');
    var author = document.getElementById('embedAuthor');
    var authorUrl = document.getElementById('embedAURL');
    var thumbnail = document.getElementById('embedThumb');
    var title = document.getElementById('embedTitle');
    var desc = document.getElementById('embedDesc');
    var image = document.getElementById('embedImage');
    var footer = document.getElementById('embedFooter');
    var footerURL = document.getElementById('embedFURL');
    var reset = document.getElementById('resetColor');
    var resetFields = document.getElementById('resetFields');
    //------------\\

    //---Field Values---\\
    var fieldsVal = document.getElementById('fields').value;
    var msgValue = document.getElementById('msgBox').value;
    var color = document.getElementById('color').value;
    var authorVal = document.getElementById('embedAuthor').value;
    var authorUrlVal = document.getElementById('embedAURL').value;
    var thumbnailVal = document.getElementById('embedThumb').value;
    var titleVal = document.getElementById('embedTitle').value;
    var descVal = document.getElementById('embedDesc').value;
    var imageVal = document.getElementById('embedImage').value;
    var footerVal = document.getElementById('embedFooter').value;
    var footerURLVal = document.getElementById('embedFURL').value;
    //------------\\

    for(var i = 1; i < (parseInt(fieldsVal)+1); i++){
        fieldArray[i-1] = {name: document.getElementById("name"+i).value, value: document.getElementById("value"+i).value, inline: document.getElementById("inline"+i).checked};
    };
    console.log(fieldArray);

    var stamp = new Date().toISOString();
	var request = new XMLHttpRequest();

    for (var i = 0, length = channelCheck.length; i < length; i++) {
        if (channelCheck[i].checked) {
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

    var embedMsg = {
            title: titleVal,
            description: descVal,
            //url: "https://discordapp.com",
            color: hexToDecimal(color),
            timestamp: stamp,
            footer: {
              icon_url: footerURLVal,
              text: footerVal
            },
            thumbnail: {
              url: thumbnailVal
            },
            image: {
              url: imageVal
            },
            author: {
              name: authorVal,
              //url: "https://discordapp.com",
              icon_url: authorUrlVal
            },
            fields: fieldArray
          };


          if(!check) {
            var params = {
                username: "Otaku Hook",
                avatar_url: "https://media.discordapp.net/attachments/771195933873537044/823620925689561158/image0.jpg",
                content: msgValue
                }
            resetFields.checked = true;
        }else {
            var params = {
                username: "Otaku Hook",
                avatar_url: "https://media.discordapp.net/attachments/771195933873537044/823620925689561158/image0.jpg",
                content: msgValue,
                embeds: [embedMsg]
        }
    }
        
        request.send(JSON.stringify(params));
        //msgContent.value = '';
        //fieldsBox.value = '';

        if(reset.checked){
        colorPicker.value = "#91f786";
        }
        msgBox.focus();

        if(resetFields.checked) {
            fields = '';
            msgContent.value = '';
            fieldsBox.value = '';
            author.value = '';
            authorUrl.value = '';
            thumbnail.value = '';
            title.value = '';
            desc.value = '';
            image.value = '';
            footer.value = '';
            footerURL.value = '';
            resetFields.checked = false;
        }
    };

    function hexToDecimal(color) {
        return parseInt(color.replace("#",""), 16)
      }
    
    function fieldCalc(fields){
        var field = [];

        if(!document.getElementById('name1')){
        for(var i = 1; i < (parseInt(fields) + 1); i++){

            var fieldBlock= `
            <p class="fieldHeader"><b>Field `+i+`</b></p>
            <input class="fieldInput" id="name`+i+`" placeholder="Name:" type="text"><br><br>
            <input class="fieldInput" id="value`+i+`" placeholder="Value:" type="text"><br><br>
            <input class="fieldButton" id="inline`+i+`" type="checkbox"><label for="field`+i+`">Inline?</label>
            `;

            field[i] = document.createElement("DIV");
            field[i].setAttribute("id", "fieldDivInd"+i);
            field[i].innerHTML = fieldBlock;
            document.getElementById("fieldDiv").appendChild(field[i]);

            //document.getElementById("fieldDiv").style.overflow = 'scroll';

            console.log(i);
            
        }
    }else {
        document.getElementById("fieldDiv").innerHTML = '';
        console.log('Cleared');
        fieldCalc(fields);
    }
};

function embedFields() {
    var fields = document.getElementById('fields').value;
    var fieldValues = [];
    for(var i = 1; i < (parseInt(fields) + 1); i++){
        fieldValues = `
            {
            name: "Field 1",
            value: "some of these properties have certain limits..."
            }
        `
    }
};

function getEmbeds() {
    var check = document.getElementById("embedAdd").checked;

    if(check) {
        document.getElementById("addEmbed").classList.remove("hide");
    }else {
        document.getElementById("addEmbed").classList.add("hide");
    }
};

    window.onload = testCheck();
