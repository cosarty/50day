const boxEl = document.querySelectorAll('.box')

const roti = (window.innerHeight / 5) * 4
const checkBoxes = () => {
  Array.from(boxEl, (box) => {
    if (roti > box.getBoundingClientRect().top) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

checkBoxes()
window.addEventListener('scroll', checkBoxes)
