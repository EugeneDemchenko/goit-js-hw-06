const menu = document.querySelector('#categories')
const menuItem = menu.children
console.log(`Number of categories: ${menuItem.length}`)

for (const item of menuItem) {
        console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}
