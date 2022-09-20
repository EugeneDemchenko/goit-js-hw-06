const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menu = document.querySelector('#ingredients')

const elements = ingredients.map((el) => {
  const listEl = document.createElement('li')
listEl.classList.add('item')
listEl.textContent = el
return listEl
})
menu.append(...elements)



// const elements = []
// for (let i = 0; i < ingredients.length; i += 1) {
//   const listEl = document.createElement('li')
//   listEl.classList.add('item')
//   listEl.textContent = ingredients[i]
//   elements.push(listEl)
//   }
// menu.append(...elements)



// const listEl = document.createElement('li')
// listEl.classList.add('item')
// listEl.textContent = ingredients[0]
// const listEl1 = document.createElement('li')
// listEl1.classList.add('item')
// listEl1.textContent = ingredients[1]
// const listEl2 = document.createElement('li')
// listEl2.classList.add('item')
// listEl2.textContent = ingredients[2]
// const listEl3 = document.createElement('li')
// listEl3.classList.add('item')
// listEl3.textContent = ingredients[3]
// const listEl4 = document.createElement('li')
// listEl4.classList.add('item')
// listEl4.textContent = ingredients[4]
// const listEl5 = document.createElement('li')
// listEl5.classList.add('item')
// listEl5.textContent = ingredients[5]

// menu.append(listEl, listEl1, listEl2, listEl3, listEl4, listEl5)


// menu.appendChild(listEl)
// menu.appendChild(listEl1)
console.log(menu)