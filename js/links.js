let form = document.querySelector('.form');
let socialInput = document.querySelector('.social-input');
let socialInputButton = document.querySelector('.add-link');
let socialLinks = document.querySelector('.social-links');

socialInput.addEventListener('keyup', () => {  //Проверка на пустой инпут
 if (socialInput.value.length > 0) {
  socialInputButton.classList.add('active');
  socialInputButton.disabled = false;
 } else {
  socialInputButton.classList.remove('active');
  socialInputButton.disabled = true;
 }
})

socialInputButton.addEventListener('click', () => { //Добавление и удаление элемента
 let div = document.createElement('div');
 div.className = 'link-box';
 let img = document.createElement('img');
 img.className = 'delete-link';
 img.src = './img/pngegg.png'
 let input = document.createElement('input');
 input.value = socialInput.value;
 input.disabled = true;
 input.name = 'social'
 div.appendChild(input);
 div.appendChild(img)
 socialLinks.appendChild(div);
 socialInput.value = ''
 socialInputButton.classList.remove('active');
 socialInputButton.disabled = true;
 let deleteLink = document.querySelectorAll('.delete-link');
 let linkBox = document.querySelectorAll('.link-box')
 for (let i = 0; i < deleteLink.length; i++) {
  deleteLink[i].addEventListener('click', () => {
   linkBox[i].remove()
  })
 }
})



