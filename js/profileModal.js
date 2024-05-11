// Get the modal
var modalProfile = document.getElementById('profileModal');

// Get the button that opens the modal
var btnOpen = document.getElementById('OpenEditProfile');

// Get the <span> element that closes the modal
var spanClose = document.getElementsByClassName('closeBtn')[0];

// When the user clicks the button, open the modal
btnOpen.onclick = function () {
  modalProfile.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
  modalProfile.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalProfile) {
    modalProfile.style.display = 'none';
  }
};
