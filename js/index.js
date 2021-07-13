function menuToggle () {
    var x = document.getElementById('myNavtoggle')
    if (x.className === 'navtoggle') {
      x.className += ' responsive'
    } else {
      x.className = 'navtoggle'
    }
  }
  
  function sectionShowHide () {
    var x = document.getElementById('showHideId')
    if (x.className === 'showHide') {
      x.className += ' responsiveSection'
    } else {
      x.className = 'showHide'
    }
  }