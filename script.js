// ---------------------------------HEADER---------------------------------
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const header = document.querySelector('.header')

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

function load() {
  let opacity = 0
  let position = 100
  let interval = setInterval(changing, 20)

  function changing() {
    // opacity
    header.style.opacity = opacity
    if (opacity > 1) {
      header.style.opacity = 1
      clearInterval(interval)
    }
    opacity = opacity + 0.015
    // position
    nav.style.transform = `translateY(-${position}%)`
    position = position - 4
  }
}

window.onload = load
const coverBody = document.querySelector('.cover-body')
const loaderBody = document.getElementById('loader-body')
document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    loaderBody.style.visibility = 'visible'
    document.querySelector('#loader').style.visibility = 'visible'
  } else {
    document.querySelector('#loader').style.display = 'none'
    loaderBody.style.visibility = 'hidden'
  }
}

// ------------------------------------------------------------------

// ---------------------------------INTRO---------------------------------

const childrenOfBoxes = []
const boxes = document.querySelectorAll('.container')
const lastContainer = document.getElementById('contact-container')
const body = document.body
const arrowDown = document.getElementById('arrow-down-a')
const arrowAwesome = document.getElementById('arrow-down')
const arrowUp = document.getElementById('arrow-up-a')

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
  // check if the last container (contact page) is shown to the user

  if (lastContainer.classList.contains('show')) {
    arrowDown.style.visibility = 'hidden'
    // make the arrow up visible
    arrowUp.style.visibility = 'visible'
    arrowUp.style.cursor = 'pointer'
  } else {
    arrowDown.style.visibility = 'visible'
    // make the arrow up disappear
    arrowUp.style.visibility = 'initial'
  }

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

arrowUp.addEventListener('click', () => {
  // Scroll to the TOP of the page
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})

function setCorrectHref() {
  // console.log(1)
  const arrowDown = document.getElementById('arrow-down-a')
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

// ---------------------------------CERTIFICATES---------------------------------
const googleCertificateBtn = document.getElementById('google-certificate-btn')
const googleCertificateA = document.getElementById('google-a')
const udemyCertificateBtn = document.getElementById('udemy-certificates-btn')
const udemyCertificateA = document.getElementById('udemy-a')

googleCertificateBtn.addEventListener('click', () => {
  const windowWidth = $(window).width()
  let heightOfPdf = 500
  if (windowWidth > 1000) {
    heightOfPdf = 800
  } else if (windowWidth > 800) {
    heightOfPdf = 600
  }
  coverBody.style.visibility = 'visible'
  const pdf = document.createElement('div')
  pdf.classList.add('pdf')
  pdf.innerHTML = `
  <embed src="Coursera Google IT Support Certificate.pdf#view=Fit" width="100%" height="${heightOfPdf}px" />
  `
  coverBody.appendChild(pdf)
})

googleCertificateA.addEventListener('click', () => {
  const windowWidth = $(window).width()
  let heightOfPdf = 500
  if (windowWidth > 1000) {
    heightOfPdf = 800
  } else if (windowWidth > 800) {
    heightOfPdf = 600
  }
  coverBody.style.visibility = 'visible'
  const pdf = document.createElement('div')
  pdf.classList.add('pdf')
  pdf.innerHTML = `
  <embed src="Coursera Google IT Support Certificate.pdf#view=Fit" width="100%" height="${heightOfPdf}px" />
  `
  coverBody.appendChild(pdf)
})
udemyCertificateBtn.addEventListener('click', () => {
  const windowWidth = $(window).width()
  let heightOfPdf = 500
  if (windowWidth > 1000) {
    heightOfPdf = 800
  } else if (windowWidth > 800) {
    heightOfPdf = 600
  }
  coverBody.style.visibility = 'visible'
  const pdf = document.createElement('div')
  pdf.classList.add('pdf')
  pdf.innerHTML = `
  <embed src="Maxim_Nesterov_Udemy_Certificates.pdf#view=Fit" width="100%" height="${heightOfPdf}px" />
  `
  coverBody.appendChild(pdf)
})

udemyCertificateA.addEventListener('click', () => {
  const windowWidth = $(window).width()
  let heightOfPdf = 500
  if (windowWidth > 1000) {
    heightOfPdf = 800
  } else if (windowWidth > 800) {
    heightOfPdf = 600
  }
  coverBody.style.visibility = 'visible'
  const pdf = document.createElement('div')
  pdf.classList.add('pdf')
  pdf.innerHTML = `
  <embed src="Maxim_Nesterov_Udemy_Certificates.pdf#view=Fit" width="100%" height="${heightOfPdf}px" />
  `
  coverBody.appendChild(pdf)
})

coverBody.addEventListener('click', () => {
  coverBody.style.visibility = 'hidden'
  const allPdfs = document.querySelectorAll('.pdf')
  allPdfs.forEach((doc) => doc.remove())
})
//
{
  /*  */
}

// ---------------------------------CYCLING---------------------------------

// put all divs with class 'panel' in a node list or simply list
const panelContainer = document.querySelector('.panelsContainer')
const panels = document.querySelectorAll('.panelsContainer .panel')
// let activePanel = document.querySelector('.panelsContainer .panel.active')
let focusedPanel = document.querySelector('.cycling .focused')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log('clicked')
    // add a class 'active' whenever we click on a panel
    removeActiveClasses()
    panel.classList.add('active')
    setTimeout(() => {}, 300)
  })
})

function removeActiveClasses() {
  const activeClasses = document.querySelectorAll('.panel.active')
  activeClasses.forEach((panel) => {
    panel.classList.remove('active')
  })
}

function removeFocusedClasses() {
  const focusedClasses = document.querySelectorAll('.panel.active.focused')
  focusedClasses.forEach((panel) => {
    panel.classList.remove('focused')
  })
}

// ------------------------------------------------------------------

// ---------------------------------CONTACT---------------------------------

const labels = document.querySelectorAll('.boxes .form-control label')
const textArea = document.querySelector('.textarea')
const textAreaMsg = document.querySelector('.textarea-msg')
const sayHiBtn = document.getElementById('sayhi-btn')

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 45}ms">${letter}</span>`
    )
    .join('')
})

textArea.addEventListener('keyup', () => {
  if (textArea.length !== 0) {
    labels[1].style.innerHTML = ''
  }
})

// textArea change color on hover effect
textArea.addEventListener('focus', (event) => {
  textAreaMsg.style.color = '#44c767'
  textAreaMsg.style.borderBottomColor = '#44c767'
})

textArea.addEventListener('focusout', (event) => {
  textAreaMsg.style.color = 'initial'
  textAreaMsg.style.borderBottomColor = 'initial'
})

// ------------------------------------------------------------------

// ---------------------------------FOOTER---------------------------------
const footerName = document.getElementById('footer-name')
const currentYear = new Date().getFullYear()

footerName.innerHTML = `©${currentYear}, Maxim Nesterov`
