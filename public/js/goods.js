const control = document.getElementById('file');
const output = document.getElementById('output');
control.addEventListener('change', event => {
  event.preventDefault();
  const file = control.files[0];
  
  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = () => {
    output.src = reader.result;
  }
})




