const control = document.getElementById('file');
control.addEventListener('change', event => {
  const file = control.files[0];
  console.log('имя файла:', file.name);
  console.log('тип', file.type);
  const form = new FormData();
  form.append('name', file);
  let xhr = new XMLHttpRequest();
  xhr.onload = () => { console.log('отправили?') }
  xhr.open("POST", "/goods/add", true);
  xhr.send(form)

})



z
