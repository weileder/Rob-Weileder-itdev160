//Utility Functions
function get(element) {
  return document.getElementById(element);
}

//Application Functions
function openModal(){
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal(){
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  //Clear text
  title.value = '';
  text.value = '';

  //Hide Modal
  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent(){
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var content = get('display-content');

  //Create content elements
  var newTitle = document.createElement('h2');
  var newTitleText = document.createTextNode(title.value);
  var newContent = document.createElement('p');
  var newContentText = document.createTextNode(text.value);

  //Add elements
  newTitle.appendChild(newTitleText);
  newContent.appendChild(newContentText);
  content.appendChild(newTitle);
  content.appendChild(newContent);

  closeModal();
}

//Wire up the event handlers
window.addEventListener('load', function() {
  var newButton = get('new-button');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');

  newButton.addEventListener('click', openModal, false);
  cancelButton.addEventListener('click', closeModal, false);
  saveButton.addEventListener('click', saveContent, false);
});
