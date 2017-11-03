const fileInput = document.querySelector('#file-upload')
fileInput.addEventListener('change', function(event) {
  const file = this.files[0]
  const size = parseInt(document.querySelector('#size').value, 10)
  const useMB = document.querySelector('#useMB').checked
  alert(chunkFile(file, size, useMB).length + " chunks")
})
