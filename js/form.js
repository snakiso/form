
let submit = document.querySelector('.submit');
let checkbox = document.querySelector('.checkbox');
let select = document.querySelector('.select');

checkbox.addEventListener('click', () => {
 if (checkbox.checked && select.value !== '0') {
  submit.disabled = false
 } else {
  submit.disabled = true
 }
})


var inp = document.getElementById("input-phone");

inp.onclick = function () {
 inp.value = "+7";
}

var old = 0;

inp.onkeydown = function () {
 var curLen = inp.value.length;

 if (curLen < old) {
  old--;
  return;
 }

 if (curLen == 2)
  inp.value = inp.value + "(";

 if (curLen == 6)
  inp.value = inp.value + ")-";

 if (curLen == 11)
  inp.value = inp.value + "-";

 if (curLen == 14)
  inp.value = inp.value + "-";

 if (curLen > 16)
  inp.value = inp.value.substring(0, inp.value.length - 1);

 old++;
}