Hackerman = (function() {
  var page = document.querySelector('.page');

  function yearsHacked(i) {

    var years = document.getElementById('years');

    if (years.innerHTML < 1986) {
      setTimeout(function() {
        years.innerHTML = i;
        yearsHacked(i + 1);
      }, 1);
    }

  }

  function warp() {
    page.className += ' warp';
    setTimeout(function() {
      yearsHacked(1);
    }, 4000);
  }

  function abort() {
    window.location = 'http://www.craftedbykiwi.com'
  }

  function hacktime(e) {
    e.preventDefault();

    var target = e.target,
      input = target.parentNode.previousElementSibling;

    input.checked = true;

    setTimeout(function() {
      if (input.value === 'yes') {
        warp();
      } else {
        abort();
      }
    }, 2500);
  }

  function init() {
    var warp = document.querySelector('.confirm');
    warp.addEventListener('click', hacktime);
  }

  document.addEventListener("DOMContentLoaded", init);

})()