function testCheck() {
	var testCheck = sessionStorage.getItem("testCheck");
	console.log(testCheck);
	if(!testCheck){
		location.href='index.html';
	} else if(testCheck === 1) {
		return;
	}
};

function sendMessageTest() {
	var msgValue = document.getElementById('msgBox').value;
	var msgContent = document.getElementById('msgBox');
    var colorPicker = document.getElementById('color');
    var color = document.getElementById('color').value;
    var reset = document.getElementById('resetColor');
    var fieldsBox = document.getElementById('fields');
    var fields = document.getElementById('fields').value;
    var stamp = new Date().toISOString();
	var request = new XMLHttpRequest();

    request.open('POST', 'https://discord.com/api/webhooks/786570252888047627/XWj3-I97XdQdFsglQiUZh5FnoAg3s_a27hCNcNczXTTbGG9rSwENrKmWuMZyymyTrXvu');
	request.setRequestHeader('Content-type', 'application/json');

    var embedMsg = {
            title: "Title",
            description: "Description",
            //url: "https://discordapp.com",
            color: hexToDecimal(color),
            timestamp: stamp,
            footer: {
              icon_url: "https://cdn.discordapp.com/attachments/643322146931867648/822141301796503562/image0.png",
              text: "Footer Text"
            },
            thumbnail: {
              url: "https://cdn.discordapp.com/attachments/643322146931867648/822141302257745980/image2.png"
            },
            image: {
              url: "https://cdn.discordapp.com/attachments/643322146931867648/822141302027714580/image1.png"
            },
            author: {
              name: "Author Name",
              url: "https://discordapp.com",
              icon_url: "https://cdn.discordapp.com/attachments/643322146931867648/822141302501933066/image3.png"
            },
            fields: [
              {
                name: "Field 1",
                value: "some of these properties have certain limits..."
              },
              {
                name: "field2",
                value: "try exceeding some of them!"
              },
              {
                name: "field3",
                value: "an informative error should show up, and this view will remain as-is until all issues are fixed"
              },
              {
                name: "field4",
                value: "these last two",
                inline: true
              },
              {
                name: "field5",
                value: "are inline fields",
                inline: true
              }
            ]
          }

    var params = {
        username: "Test",
        avatar_url: null,
        content: msgValue,
        embeds: [embedMsg]
        }
        
        request.send(JSON.stringify(params));
        msgContent.value = '';
        fieldsBox.value = '';

        if(reset.checked){
        colorPicker.value = "#91f786";
        }
        msgBox.focus();
    };

    function hexToDecimal(color) {
        return parseInt(color.replace("#",""), 16)
      }
    
    function fieldCalc(fields){
        var field = [];
        if(!document.getElementById('name1')){
        for(var i = 1; i < (parseInt(fields) + 1) ; i++){

            var fieldBlock= `
            <p class="fieldHeader">Field `+i+`</p>
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
}

    window.onload = testCheck();
