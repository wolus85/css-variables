const inputs = document.querySelectorAll('.controls input')

console.log(inputs)

const arr = [...inputs]
// inputs.forEach(input => )

function handleUpdate() {
  console.log(this.name)
  console.log(this.value)
  const suffix = this.dataset.sizing || '';
  document.querySelector('img').style.setProperty(`--${this.name}`, this.value + suffix)

}

//może byc w handleUpdate pez parametru i this.value

arr.forEach(input => input.addEventListener('change', handleUpdate))