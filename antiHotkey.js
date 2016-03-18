function toggleFullScreen() {
  // if ((document.fullScreenElement && document.fullScreenElement !== null) ||
  // (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  // } else {
  //   if (document.cancelFullScreen) {
  //     document.cancelFullScreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitCancelFullScreen) {
  //     document.webkitCancelFullScreen();
  //   }
  // }
}

window.onbeforeunload = confirmExit;
function confirmExit() {
    return "You have attempted to leave this page. Are you sure?";
}
function createTheHell() {
  var strWindowFeatures = "location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes";
  var newWin = window.open("http://localhost:8080", '_blank', strWindowFeatures);
  newWin.focus();
  newWin.location.replace('http://localhost:8080')
}
(function() {
  function preventFuckingAll(e) {
    e.stopPropagation();
    e.preventDefault();
    e.cancelBubbles = true;
    return false;
  }
  document.addEventListener('mousedown', function(e) {
    toggleFullScreen();
    createTheHell();
  })
  document.addEventListener('keydown', function(e) {
    console.log('Key was pressed');
    toggleFullScreen();
    createTheHell();
    console.log('new win was created',newWin);
    preventFuckingAll(e);
    return false;
  })
})()
