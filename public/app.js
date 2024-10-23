window.addEventListener('load', () => {

  console.log("Client side js is loaded!");
  


  fetch('/notes')
    .then(response => response.json())
    .then(data => {
      console.log(data);

/*
      //Select for element on the page
      let feed = document.getElementById('feed');
      //Loop through data and append to the page
      for (let i = 0; i < data.length; i++) {
        let currentName = data[i].name;
        let currentMessage = data[i].message;

        let currentEl = document.createElement('li');
        currentEl.className = "note-container";
        currentEl.innerHTML = currentName + " - " + currentMessage;

        feed.appendChild(currentEl);
      }
*/



    })
    .catch(error => {
      console.log(error)
    });

});



let msgButton = document.getElementById('msg-submit');
msgButton.addEventListener('click', () => {

  let nameInput = document.getElementById('name-input');
  let currentName = nameInput.value;

  let msgInput = document.getElementById('msg-input')
  let currentMessage = msgInput.value;

  let messageObj = {
    name: currentName,
    message: currentMessage
  };
  console.log(messageObj);


  /*
  let messageObjJSON = JSON.stringify(messageObj);
  fetch('/new-note', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: messageObjJSON
})
.then(response => response.json())
.then(data => {
    console.log("Did this work?");
    console.log(data);
})
.catch(error => {
  console.log(error);
});
*/


let feed = document.getElementById('feed');
let currentEl = document.createElement('li');
currentEl.className = "note-container";

currentEl.innerHTML = currentName + " - " + currentMessage;
feed.appendChild(currentEl);

msgInput.value = '';


});
