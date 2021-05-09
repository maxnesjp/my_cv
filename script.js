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
// boxes.forEach((box) => {
//   box.classList.add('show')
// })
// boxes.forEach((box) => {
//   box.classList.remove('show')
// })

window.addEventListener('scroll', checkBoxes)
window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth',
})
window.onload = onloadf

checkBoxes()

function onloadf() {
  // window.scrollTo(0, document.body.scrollHeight)
  // window.scrollTo(0, document.body.scrollHeight)
  // setTimeout(() => {}, 200)
  // if ('scrollRestoration' in history) {
  //   history.scrollRestoration = 'manual'
  // }
  // window.scrollTo(0, 0)

  console.log('success')
}

function checkBoxes() {
  console.log('scroll')

  // when do we want the content to come in?
  const triggerBottom = (window.innerHeight / 4) * 3
  boxes.forEach((box, index) => {
    // get the value of the top boundary of each box
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
      // box.style.transform = 'none'
      setCorrectHref()
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

function setCorrectHref() {
  const arrowDown = document.getElementById('arrow-down-a')
  // console.log(1)
  for (let i = 0; i < boxes.length; i++) {
    if (!boxes[i].classList.contains('show')) {
      const classesOfBox = boxes[i]
      const currentId = $(boxes[i]).attr('id')
      console.log(currentId)
      // window.open(arrowDown.href, '_blank')
      arrowDown.setAttribute('href', `#${currentId}`)
      break
    }
  }
}
$(document).ready(function () {
  const arrowDown = document.getElementById('arrow-down-a')
  // Add smooth scrolling to all links
  $(arrowDown).on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )
    } // End if
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        2,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )
    } // End if
  })
})
// arrowDown.addEventListener('click', () => {
//   console.log('hi')
//   console.log('clcik')

// })

// ------------------------------------------------------------------
