// todo: add card status
const cardStatus = document.querySelectorAll('.card-status')

cardStatus.forEach((item) => {
  const status = item.getAttribute('class').split(' ')[1]
  console.log(status)

  const statusText = ['Available', 'Unavailable', 'Booking', 'Done']
  const result = statusText.find((item) => item.toLowerCase() === status)
  console.log(result)
  
  item.textContent = result;
})

// todo: disable lantai 3 button for 'gedung-serbaguna'
const gedungRadio = document.querySelectorAll('input[name="gedung"]')
const lantai3Radio = document.querySelector('label[for="lantai-3"]')

gedungRadio.forEach(item => {
  item.addEventListener('click', (el) => {
    let selected = item.getAttribute("id"); 
    console.log(selected)

    if (selected === 'gedung-serbaguna') {
      lantai3Radio.previousElementSibling.setAttribute('disabled',true)
      console.log('disabled')
      lantai3Radio.classList.add('disabled')
    } else {
      lantai3Radio.previousElementSibling.setAttribute('disabled',false)
      console.log('enabled')
      lantai3Radio.classList.remove("disabled");
    }
  })
})

