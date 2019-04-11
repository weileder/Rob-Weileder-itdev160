//Initiate date for chat window
var messageData = {
    recvrName: "Cheryl",
    messages: ["Hey Jimmy!",
                "Hi Cheryl. What's up?",
                "How did your exam go today?",
                "I think that I did really well!",
                "GREAT!!! Are you busy Friday night?"],
    addMessageHandler: function addMessage(level, text) {
      messageData.messages.push(text);
      //determine proper justification and font color for messages
        switch (level) {
          case 1:
            document.getElementById('messages').className = 'out-message';
            break;
          case 2:
            document.getElementById('messages').className = 'in-message';
            break;
          };
      document.getElementById('messages').textContent += newText + '\n';
      document.getElementById('message-input').value = '';
      return text;
    },
    getNewText: function getText() {
      var text = document.getElementById('message-input').value;
      return text;
    }
  };

//Package Contructor
function Package(messageData) {
  this.recvrName = messageData.recvrName;
  this.messages = messageData.messages;
};

//write data to page
function writePackageInfo(package) {
  //Refer to elements
  var receiverT1 = document.getElementById('receiver'),
      messagesT1 = document.getElementById('messages');

  //write to elements
  receiverT1.textContent = messageData.recvrName;
  for (var i = 0; i < messageData.messages.length; i++) {
    if ((i === 0) || (i === 2) || (i === 4)) {
    document.getElementById('messages').className = 'out-message';
    messagesT1.textContent += messageData.messages[i] + '\n';
  }
    else {
    document.getElementById('messages').className = 'in-message';
    messagesT1.textContent += messageData.messages[i] + '\n';
     }
    }

};

//vars
var level = 0;
var newText = '';

//button click event handler
document.getElementById('send-button').addEventListener('click', function(){
  level = 1;
  newText = messageData.getNewText();
  messageData.addMessageHandler(level, newText);
  console.log(document.getElementById('messages').className);
  });
document.getElementById('reply-button').addEventListener('click', function(){
  level = 2;
  newText = messageData.getNewText();
  messageData.addMessageHandler(level, newText);
  console.log(document.getElementById('messages').className);
  });



function init() {
  //write package data
  const package = messageData;
  writePackageInfo(package);
};

//Call the function to perform the required tasks
init();
