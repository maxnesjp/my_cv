// ---------------------------------HEADER---------------------------------
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const header = document.querySelector('.header')
const navA = document.querySelectorAll('.header a')

navA.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ffffff'
    changeOpacity()
    link.style.opacity = '1'
    link.style.borderWidth = '3px'
  })
  link.addEventListener('mouseout', () => {
    resetOpacity()
  })
})

function changeOpacity() {
  navA.forEach((link) => {
    link.style.opacity = '0.1'
  })
}

function resetOpacity() {
  navA.forEach((link) => {
    link.style.color = 'var(--primary-text-color)'
    link.style.opacity = '1'
    link.style.borderWidth = '1px'
  })
}

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  if (nav.classList.contains('active')) {
    nav.style.borderBottomRightRadius = '0px'
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

// ---------------------------------LOADER---------------------------------
const boxes = document.querySelectorAll('.container')
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

  checkBoxes()
}

window.onload = load
const coverBody = document.querySelector('.cover-body')
const loaderBody = document.getElementById('loader-body')
document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    loaderBody.style.visibility = 'visible'
    document.querySelector('#loader').style.visibility = 'visible'
    for (let i = 0; i < boxes.length; i++) {
      if (i % 2 === 0) {
        boxes[i].style.transform = 'translateX(400%)'
      } else {
        boxes[i].style.transform = 'translateX(-400%)'
      }
    }
  } else {
    document.querySelector('#loader').style.display = 'none'
    setTimeout(() => {
      loaderBody.style.visibility = 'hidden'
    }, 375)
  }
}

// ------------------------------------------------------------------

// ---------------------------------INTRO---------------------------------

const childrenOfBoxes = []

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

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')

// link1.addEventListener('click', function (e) {
//   var desiredElement = document.getElementById('autobiography-container')
//   console.log()
//   var topPos = body.offsetTop
//   // scroll to that element
//   desiredElement.scrollTop = topPos
//   return false
// })

// link2.addEventListener('click', function (e) {
//   setTimeout(() => {
//     var elmnt = document.getElementById('skills-container')
//     elmnt.scrollIntoView()
//   }, 3000)
//   e.preventDefault()
// })

// link3.addEventListener('click', function (e) {
//   var desiredElement = document.getElementById('certificates-container')
//   console.log()
//   var topPos = body.offsetTop
//   // scroll to that element
//   desiredElement.scrollTop = topPos
//   return false
// })

// link4.addEventListener('click', function (e) {
//   var desiredElement = document.getElementById('contact-container')
//   console.log()
//   var topPos = body.offsetTop
//   // scroll to that element
//   desiredElement.scrollTop = topPos
//   return false
// })
;[link1, link2, link3, link4].forEach((link) => {
  link.addEventListener('click', () => {
    console.log(link)
  })
})

$(document).ready(function () {
  var disable_scroll = false
  $(window).scroll(function (event) {
    if (disable_scroll == false) {
      checkBoxes()
    }
  })
  $('#link1').on('click', function () {
    disable_scroll = true
    $('html,body').animate(
      {
        scrollTop: $('#autobiography-container').offset().top,
      },
      function () {
        disable_scroll = false
      }
    )
  })
  $('#link2').on('click', function () {
    disable_scroll = true
    $('html,body').animate(
      {
        scrollTop: $('#skills-container').offset().top,
      },
      function () {
        disable_scroll = false
      }
    )
  })
  $('#link3').on('click', function () {
    disable_scroll = true
    $('html,body').animate(
      {
        scrollTop: $('#certificates-container').offset().top,
      },
      function () {
        disable_scroll = false
      }
    )
  })
  $('#link4').on('click', function () {
    disable_scroll = true
    $('html,body').animate(
      {
        scrollTop: $('#contact-container').offset().top,
      },
      function () {
        disable_scroll = false
      }
    )
  })
})

window.addEventListener('scroll', checkBoxes)
window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth',
})

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
  console.log('scroll')
  // when do we want the content to come in?
  setTimeout(() => {
    boxes.forEach((box, index) => {
      // get the value of the top boundary of each box
      const boxTop = box.getBoundingClientRect().top
      const triggerBottom = (window.innerHeight / 10) * 6
      if (boxTop < triggerBottom) {
        if (!box.classList.contains('show')) {
          box.style.transform = 'translateX(0)'
        }
        box.classList.add('show')

        setCorrectHref()
        const children = box.children[0].children
        for (var i = 0; i < childrenOfBoxes[index].length; i++) {
          if (childrenOfBoxes[index][i].state === 0) {
            childrenOfBoxes[index][i].state = 1
            const currentIndex = i
            children[currentIndex].style.visiblity = 'visible'
            children[currentIndex].classList.add('show')
          }
        }
      } else {
        box.classList.remove('show')
        for (let i = 0; i < boxes.length; i++) {
          if (!boxes[i].classList.contains('show')) {
            if (i % 2 === 0) {
              boxes[i].style.transform = 'translateX(600%)'
            } else {
              boxes[i].style.transform = 'translateX(-600%)'
            }
          }
        }
        for (var i = 0; i < childrenOfBoxes[index].length; i++) {
          if (childrenOfBoxes[index][i].state === 1) {
            childrenOfBoxes[index][i].state = 0
            const currentIndex = i
            const children = box.children[0].children

            children[currentIndex].classList.remove('show')
          }
        }
      }
      if (!boxes[index].classList.contains('show')) {
        const childBox = boxes[i].children[0]
        for (var i = 0; i < childBox.length; i++) {
          childBox[i].classList.remove('show')
        }
      }
    })
  }, 300)
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
const pdfDiv = document.querySelector('.pdf-div')

googleCertificateBtn.addEventListener('click', (event) => {
  const source = 'Coursera Google IT Support Certificate.pdf'
  createElement()
  createCertificate(source)
})
googleCertificateA.addEventListener('click', (event) => {
  const source = 'Coursera Google IT Support Certificate.pdf'
  createElement()
  createCertificate(source)
})

udemyCertificateBtn.addEventListener('click', (event) => {
  const source = 'Maxim_Nesterov_Udemy_Certificates.pdf'
  createElement()
  createCertificate(source)
})
udemyCertificateA.addEventListener('click', (event) => {
  const source = 'Maxim_Nesterov_Udemy_Certificates.pdf'
  createElement()
  createCertificate(source)
})

function createElement() {
  const pdfDiv = document.createElement('div')
  pdfDiv.classList.add('pdf-div')
  coverBody.appendChild(pdfDiv)
  coverBody.style.visibility = 'visible'
}

function createCertificate(src) {
  console.log(1)
  ;(async () => {
    window.Accusoft.PdfViewerControl.create({
      sourceDocument: src,
      container: document.querySelector('.pdf-div'),
    })
  })()
}

coverBody.addEventListener('click', () => {
  coverBody.style.visibility = 'hidden'
  const allPdfs = document.querySelectorAll('.pdf-div')
  allPdfs.forEach((doc) => doc.remove())
})

// ------------------------------------------------------------------

// ---------------------------------SKILLS---------------------------------
const skills = document.querySelectorAll('.skill')
skills.forEach((skill) => {
  const span = skill.querySelector('.nowrap')
  const icon = skill.querySelector('.awesome')
  icon.addEventListener('mouseover', () => {
    span.style.textDecoration = 'underline'
    span.style.textDecorationColor = '#ff7b54'
  })
  icon.addEventListener('mouseout', () => {
    span.style.textDecoration = 'none'
  })
})

// ------------------------------------------------------------------

// ---------------------------------CYCLING---------------------------------

// put all divs with class 'panel' in a node list or simply list
const panelContainer = document.querySelector('.panelsContainer')
const panels = document.querySelectorAll('.panelsContainer .panel')
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

const cyclingTitle = document.querySelector('.cycling h2')
const titleSpan = cyclingTitle.querySelector('span')
const titleIcon = cyclingTitle.querySelector('.awesome')
titleIcon.addEventListener('mouseover', () => {
  titleSpan.style.textDecoration = 'underline'
  titleSpan.style.textDecorationColor = '#ff7b54'
})
titleIcon.addEventListener('mouseout', () => {
  titleSpan.style.textDecoration = 'none'
})

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
  textAreaMsg.style.color = '#ffffff'
  textAreaMsg.style.borderBottomColor = '#44c767'
})

textArea.addEventListener('focusout', (event) => {
  textAreaMsg.style.color = 'var(--primary-text-color)'
  textAreaMsg.style.borderBottomColor = 'initial'
})

// ------------------------------------------------------------------

// ---------------------------------FOOTER---------------------------------
const footerName = document.getElementById('footer-name')
const currentYear = new Date().getFullYear()

footerName.innerHTML = `©${currentYear}, Maxim Nesterov`
