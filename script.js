const labels = document.querySelectorAll('.form-control label')


labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map ((letter, idx) => `<Span style="transition-delay:${idx * 50}ms">${letter}</Span>`)
    .join('')
})