// ---------------------------------HEADER---------------------------------
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  if (nav.classList.contains('active')) {
    nav.style.borderBottomRightRadius = '0px'
    // setTimeout(() => {
    //   const newHelloWorld = document.createElement('h3')
    //   newHelloWorld.innerText = 'Hello, World'
    //   newHelloWorld.classList.add('hello-world')
    //   nav.appendChild(newHelloWorld)
    //   nav.style.borderBottomRightRadius = '0px'
    // }, 550)
  } else {
    setTimeout(() => {
      nav.style.borderBottomRightRadius = '30px'
      // removeElement('hello-world')
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

window.addEventListener('scroll', checkBoxes)
window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth',
})
checkBoxes()
function checkBoxes() {
  // console.log('scroll')

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
      // console.log(currentId)
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

// ---------------------------------AUTOBIOGRAPHY---------------------------------
/* Helper function */
function download_file(fileURL, fileName) {
  // for non-IE
  if (!window.ActiveXObject) {
    var save = document.createElement('a')
    save.href = fileURL
    save.target = '_blank'
    var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1)
    save.download = fileName || filename
    if (
      navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
      navigator.userAgent.search('Chrome') < 0
    ) {
      document.location = save.href
      // window event not working here
    } else {
      var evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false,
      })
      save.dispatchEvent(evt)
      ;(window.URL || window.webkitURL).revokeObjectURL(save.href)
    }
  }

  // for IE < 11
  else if (!!window.ActiveXObject && document.execCommand) {
    var _window = window.open(fileURL, '_blank')
    _window.document.close()
    _window.document.execCommand('SaveAs', true, fileName || fileURL)
    _window.close()
  }
}
/*--------------------------------------------------------*/
const resumeButton = document.getElementById('resume-button')
resumeButton.addEventListener('click', () => {
  download_file('resume_Maxim_Nesterov.pdf', 'resume') //call function
})

// ------------------------------------------------------------------

// ---------------------------------CYCLING---------------------------------

// put all divs with class 'panel' in a node list or simply list
const panels = document.querySelectorAll('.panels .panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // add a class 'active' whenever we click on a panel
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
