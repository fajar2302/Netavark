// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('activity1');
var btn2 = document.getElementById('activity2');
var btn3 = document.getElementById('activity3');
var btn4 = document.getElementById('activity4');
var btn5 = document.getElementById('activity5');
var btn6 = document.getElementById('activity6');
var btn7 = document.getElementById('activity7');
var btn8 = document.getElementById('activity8');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Menentukan URL baru
var newUrl1 = 'https://online.fliphtml5.com/bpaod/ktyp/';
var newUrl2 = 'https://online.fliphtml5.com/bpaod/qbhy/';
var newUrl3 = 'https://online.fliphtml5.com/tncov/ppra/';
var newUrl4 = 'https://online.fliphtml5.com/tncov/nchs/';
var newUrl5 = 'https://online.fliphtml5.com/tncov/apdc/';
var newUrl6 = 'https://online.fliphtml5.com/tncov/kotg/';
var newUrl7 = 'https://online.fliphtml5.com/tncov/uisd/';
var newUrl8 = 'https://online.fliphtml5.com/dfdxe/fein/';

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
btn4.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl4;
};
btn5.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl5;
};
btn6.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl6;
};
btn7.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl7;
};
btn8.onclick = function () {
  modal.style.display = 'block';
  iframe.src = newUrl8;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  console.log('oke!!!');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
