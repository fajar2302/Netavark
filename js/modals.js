// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('openModalBtn1');
var btn2 = document.getElementById('openModalBtn2');
var btn3 = document.getElementById('openModalBtn3');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Menentukan URL baru
var newUrl1 = 'https://online.fliphtml5.com/bpaod/ljhk/';
var newUrl2 = 'https://online.fliphtml5.com/bpaod/ncxw/';
var newUrl3 = 'https://online.fliphtml5.com/bpaod/roaf/';

// Mendapatkan elemen iframe berdasarkan ID
var iframe = document.getElementById('iframeUrl');

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl1;
};
btn2.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl2;
};
btn3.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl3;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
