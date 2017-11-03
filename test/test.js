const fileInput = document.querySelector('#file-upload')
fileInput.addEventListener('change', function(event) {
  const file = this.files[0]
  console.log(chunkFile(file))
})
