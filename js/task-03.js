const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery')


// const pictureRef = images.map(({ url, alt }) => {
//   const listEl = document.createElement('li')
//   const imageEl = document.createElement('img')
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 480;
//   listEl.append(imageEl)
//   console.log(listEl);
//   return listEl;
// })

// galleryEl.append(...pictureRef)




const pictureEl = images.map(el => {
  const newElement = `<li>
  <img src=${el.url} alt='${el.alt}' width=480/>
  </li>`
return newElement
  
})
console.log(pictureEl.join(''));
galleryEl.insertAdjacentHTML('beforeend', [...pictureEl].join(''))

galleryEl.style.display = 'flex'
galleryEl.style.listStyle = 'none'
galleryEl.style.justifyContent = 'space-between'
galleryEl.style.alignItems ='center'

