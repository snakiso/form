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
 let a = document.createElement('a');
 a.textContent = socialInput.value;
 a.href = socialInput.value;
 a.target = '_blank'
 div.appendChild(a);
 div.appendChild(img)
 socialLinks.appendChild(div);
 socialInput.value = ''
 socialInputButton.classList.remove('active');
 socialInputButton.disabled = true;
 let deleteLink = document.querySelectorAll('.delete-link');

 for (let i = 0; i < deleteLink.length; i++) {
  deleteLink[i].addEventListener('click', () => {

   div.remove()
  })
 }
})



