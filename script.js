const inputs = document.querySelectorAll('.controls input')

console.log(inputs)

const arr = [...inputs]
// inputs.forEach(input => )

function handleUpdate () {
  document.documentElement.style.setProperty(`--${this.name}`, this.value)

}

//może byc w handleUpdate pez parametru i this.value

arr.forEach(input=> input.addEventListener('change', handleUpdate))