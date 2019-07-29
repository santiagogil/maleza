// JS Goes here - ES6 supported
//javascript file
var lozad = require('lozad')

      const observer = lozad()

  window.addEventListener('load', () => {
      observer.observe()

      let sidebar = document.getElementById('sidebar')
      let hamburger = document.getElementById('hamburger')
      let close = document.getElementById('close')

  hamburger.addEventListener('click', event => {
      event.preventDefault()
      sidebar.classList.toggle('transform-off')
  })

  close.addEventListener('click', event => {
      event.preventDefault()
      hamburger.style.transform = ''
      sidebar.classList.toggle('transform-off')
  })
    let share = document.getElementById('web-share')
    let url = window.location.href
    let title = document.title
    if (share) {
      if (!navigator.share) return share.remove()
      share.addEventListener('click', event => {
        // event.preventDefault()
        if (!navigator.share) return share.remove()
        navigator.share({"url": url, "title": title})
          .then(console.log)
          .catch(console.log)
      })
    }
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'UA-141188337-1');
})
// if (window.netlifyIdentity) {
//   window.netlifyIdentity.on("init", user => {
//     if (!user) {
//       window.netlifyIdentity.on("login", () => {
//         document.location.href = "/admin/";
//       });
//     }
//   });
// }
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


