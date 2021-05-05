// ---------------------------------HEADER---------------------------------
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
// const helloWorld = document.getElementByClassName('hello-world')
toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  if (nav.classList.contains('active')) {
    setTimeout(() => {
      const newHelloWorld = document.createElement('h3')
      newHelloWorld.innerText = 'Hello, World'
      newHelloWorld.classList.add('hello-world')
      nav.appendChild(newHelloWorld)
      nav.style.borderBottomRightRadius = '0px'
    }, 550)
  } else {
    setTimeout(() => {
      nav.style.borderBottomRightRadius = '30px'
      removeElement('hello-world')
    }, 550)
  }
  //   if (helloWorld.length) {
  //     helloWorld.setAttribute('display', 'none')
  //   } else {
  //     helloWorld = document.createElement('h3')
  //     helloWorld.classList.add('hello-world')
  //     nav.appendChild(helloWorld)
  //   }
})
function removeElement(className) {
  var elem = document.querySelector(`.${className}`)
  $(`.${className}`).remove()
}
// ------------------------------------------------------------------

// ---------------------------------INTRO---------------------------------

setTimeout(() => {})
const childrenOfBoxes = []
const boxes = document.querySelectorAll('.container')
boxes.forEach((box) => {
  var boxChildren = box.children[0].children
  var listOfChildren = []
  for (var i = 0; i < boxChildren.length; i++) {
    boxChildren[i].classList.add('child-container')
    boxChildren[i].style.visiblity = 'hidden'
    const eachChild = {
      state: 0,
    }
    listOfChildren.push(eachChild)
  }
  childrenOfBoxes.push(listOfChildren)
  // children.forEach((child, idx) => {
  //   console.log(child)
  // })
  var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
})
// console.log(childrenOfBoxes)
// console.log(childrenOfBoxes[0][0].state)
window.addEventListener('scroll', checkBoxes)
setTimeout(() => {
  checkBoxes()
}, 200)

function checkBoxes() {
  // when do we want the content to come in?
  const triggerBottom = (window.innerHeight / 5) * 4
  boxes.forEach((box, index) => {
    // get the value of the top boundary of each box
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
      const children = box.children[0].children
      setTimeout(() => {
        for (var i = 0; i < childrenOfBoxes[index].length; i++) {
          if (childrenOfBoxes[index][i].state === 0) {
            childrenOfBoxes[index][i].state = 1
            const currentIndex = i
            children[currentIndex].style.visiblity = 'visible'
            children[currentIndex].classList.add('show')
          }
        }
      }, 300)
    } else {
      box.classList.remove('show')
      for (var i = 0; i < childrenOfBoxes[index].length; i++) {
        if (childrenOfBoxes[index][i].state === 1) {
          childrenOfBoxes[index][i].state = 0
          console.log(childrenOfBoxes[index][i].state)
          // children[currentIndex].style.visibility = 'hidden'
          const currentIndex = i
          const children = box.children[0].children
          console.log(children[currentIndex], 'removed')

          children[currentIndex].classList.remove('show')
          // if (currentIndex % 2 === 0) {
          //   children[currentIndex].style.transform = 'translateX(-800%)'
          // } else {
          //   children[currentIndex].style.transform = 'translateX(800%)'
          // }
        }
      }
    }
  })
}

function showChildren(child) {
  child.classList.add('show')
}

// ------------------------------------------------------------------
