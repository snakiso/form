
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


var phoneMask = IMask(
    document.getElementById('input-phone'), {
    mask: '+{7}(000)000-00-00'
});

