let imagesForUpload = [];


let dragAndDrop = document.querySelector('.input-file'), //контейнер для перетягивания
 imagesList = document.querySelector('.images-list'), //Контейнер в котором отображаются изображения
 addBtn = document.querySelector('.choose-file')

dragAndDrop.addEventListener('dragenter', (e) => {
 e.preventDefault()
 dragAndDrop.classList.add('active')
})
dragAndDrop.addEventListener('dragleave', (e) => {
 e.preventDefault()
 dragAndDrop.classList.remove('active')
})
dragAndDrop.addEventListener('dragover', (e) => {
 e.preventDefault()
})

dragAndDrop.addEventListener('drop', (e) => { //перетягивание
 e.preventDefault()
 const files = e.dataTransfer.files


 createImg(files)
 removeImg()

})

function removeImg() { //Удаление изображения
 let removeButton = document.querySelector('.remove-btn');
 removeButton.addEventListener('click', () => {
  dragAndDrop.style.display = 'block'
  addBtn.style.display = 'block'
  document.querySelector('.image-box').remove()
  imagesForUpload = []
 })
}


function createImg(files) {  //функция создания изображения



 for (let i = 0; i < files.length; i++) {
  if (files.length > 1) {
   alert('Выберете один файл')
  } else {
   let size = files[i].size * 0.000976562 // Размер в кб
   imagesForUpload.push(files[i])

   let imageTmpUrl = URL.createObjectURL(files[i]);

   let div = document.createElement('div');
   div.className = 'image-box';
   imagesList.appendChild(div);

   let removeBtn = document.createElement('span');
   removeBtn.className = 'remove-btn'

   let imageInfo = document.createElement('div');
   let span = document.createElement('span');
   span.textContent = `${files[i].name}(${Math.trunc(size)}кб)`;
   imageInfo.className = 'image-info';
   imageInfo.appendChild(span);
   imageInfo.appendChild(removeBtn);
   div.appendChild(imageInfo);
   div.innerHTML += `<img src="${imageTmpUrl}" class="images-list-picture" alt="">`;
   //Отключаем место для добавления 
   dragAndDrop.style.display = 'none'
   addBtn.style.display = 'none'
  }
 }
}


function myFunc(input) {

 var files = input.files || input.currentTarget.files;
 var reader = [];
 for (var i in files) {
  if (files.hasOwnProperty(i)) {
   createImg(files)
   reader[i] = new FileReader();
   reader[i].readAsDataURL(input.files[i]);
   removeImg()
  }
 }
}



