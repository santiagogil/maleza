// JS Goes here - ES6 supported
//javascript file
// document.addEventListener('ready', function (e) {
  document.getElementById('hamburger').addEventListener('click', event => {

      let sidebar = document.getElementById('sidebar')
      let hamburger = document.getElementById('hamburger')
      let close = document.getElementById('close')
      let sidebarWidth = sidebar.getBoundingClientRect().width

      event.preventDefault()
      sidebar.classList.toggle('transform-off')

      // hamburger.style.transform = hamburger.style.transform ? '' : 'translate3d(-' + sidebarWidth + 'px, 0, 0)'
  })

  document.getElementById('close').addEventListener('click', event => {
      event.preventDefault()
      document.getElementById('hamburger').style.transform = ''
      document.getElementById('sidebar').classList.add('transform-off')
  })
// })
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


