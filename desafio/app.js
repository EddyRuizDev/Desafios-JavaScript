
//Insertar y eliminar elementos Interactuando con HTML

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "Soy un elemento nuevo agregado"

 list.insertBefore(newElement, list.children[1])

list.children[0].insertAdjacentElement('beforebegin',newElement)
 list.insertAdjacentElement('afterbegin',newElement)
 list.insertAdjacentElement('beforeend',newElement)
list.children[1].insertAdjacentElement('afterend',newElement)

 list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
 list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

list.replaceChild(newElement,list.children[0])

// DOM manipulation convenience metodos


list.children[0].before(newElement)
list.prepend(newElement)
list.append(newElement)
list.children[1].after(newElement)

document.getElementById('hijo-a-reemplazar').replaceWith(newElement)

// Clonar y eliminar elementos


list.after(list.cloneNode(true))

list.remove()

list.removeChild(list.children[1])