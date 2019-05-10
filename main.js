let container = document.getElementById('container')
let fighters = ['roy', 'kirby', 'mario', 'jigglypuff', 'pichu', 'luigi', 'bowser', 'link', 'yoshi']

for (f in fighters) {
  let div = document.createElement('div')
div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
div.style.backgroundSize = 'contain'
div.style.backgroundRepeat = 'no-repeat'
div.style.border = '1px solid black'
container.appendChild(div)
}

container.style.display ='grid'
container.style.gridTemplate = 'repeat(3, 500px) / repeat(3, 25%)' // height / width
container.style.gridGap = '1%'
