// Get the modal
var modalProfile = document.getElementById('myModalProfileMade');

// Get the button that opens the modal
var btnOpen = document.getElementById('openModalBtnProfileMade');

// Get the <span> element that closes the modal
var span = document.getElementById('closeBtnProfile');

// When the user clicks the button, open the modal
btnOpen.onclick = function () {
  modalProfile.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalProfile.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalProfile) {
    modalProfile.style.display = 'none';
  }
};
