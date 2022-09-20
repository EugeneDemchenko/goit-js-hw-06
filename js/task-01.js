const menu = document.querySelector('#categories')
const menuItem = menu.children
console.log(`Number of categories: ${menuItem.length}`)


// const menuList = document.querySelectorAll('.item')
// console.log(menuList)
const titleOne = menuItem[0].firstElementChild
console.log(`Category: ${titleOne.textContent}`)
const subMenuOne = menuItem[0].lastElementChild
console.log(`Elements: ${subMenuOne.children.length}`)

const titleTwo = menuItem[1].firstElementChild
console.log(`Category: ${titleTwo.textContent}`)
const subMenuTwo = menuItem[1].lastElementChild
console.log(`Elements: ${subMenuTwo.children.length}`)

const titleThree = menuItem[2].firstElementChild
console.log(`Category: ${titleThree.textContent}`)
const subMenuThree = menuItem[2].lastElementChild
console.log(`Elements: ${subMenuThree.children.length}`)
