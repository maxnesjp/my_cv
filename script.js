// ---------------------------------HEADER---------------------------------
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
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
})
// console.log(childrenOfBoxes)
// console.log(childrenOfBoxes[0][0].state)
window.addEventListener('scroll', checkBoxes)
setTimeout(() => {
  checkBoxes()
}, 200)

function checkBoxes() {
  // when do we want the content to come in?
  const triggerBottom = (window.innerHeight / 4) * 3
  boxes.forEach((box, index) => {
    setIndexes()
    // get the value of the top boundary of each box
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
      setIndexes()
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
          const currentIndex = i
          const children = box.children[0].children

          children[currentIndex].classList.remove('show')
        }
      }
    }
  })
}

function showChildren(child) {
  child.classList.add('show')
}

const arrowDown = document.getElementById('arrow-down-a')
const statesOfContainers = []
const listOfStates = []

// Set Index1 for containers that are shown to the user
setTimeout(() => {
  setIndexes()
}, 300)

function setIndexes() {
  listOfStates.length = 0
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains('show')) {
      boxes[i].style.transform = 'translateX(0)'

      listOfStates.push({
        currentIndex: 1,
      })
    } else {
      listOfStates.push({
        currentIndex: 0,
      })
    }
  }
  // setTimeout(() => {
  //   for (let i = 0; i < boxes.length; i++) {
  //     boxes[i].style.transform = ''
  //   }
  // }, 100)
  // console.log(listOfStates)
}

// set Container Name (class) as their id
for (let j = 0; j < boxes.length; j++) {
  let className = boxes[j].getAttribute('class').split(' ')[1]
  boxes[j].setAttribute('id', className)
}

arrowDown.addEventListener('click', () => {
  for (let j = 0; j < listOfStates.length; j++) {
    console.log('hi')
    const transformProperty = boxes[j].style.transform
    console.log(transformProperty)
    let className = boxes[j].getAttribute('class').split(' ')[1]
    setIndexes()
    var currentContainer = listOfStates[j]
    if (currentContainer.currentIndex === 0) {
      console.log('0')
      let hrefValue = `#${className}`
      arrowDown.setAttribute('href', hrefValue)
      console.log(hrefValue)
      break
    }
  }
})

// ------------------------------------------------------------------
