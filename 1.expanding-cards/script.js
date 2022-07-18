const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', function () {
    console.log('panel: ', panel)
    removeActive()
    panel.classList.add('active')
  })
})

const removeActive = () => {
  Array.from(panels)
    .find((p) => p.classList.contains('active'))
    ?.classList.remove('active')
}
