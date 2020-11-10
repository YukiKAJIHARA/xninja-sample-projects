/* You can write external javascript here */

console.log("index.js is loaded")

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(
  function (registration) {
          if (typeof registration.update == 'function') {
                  registration.update();
          }
  })
  .catch(function (error) {
      console.log("Error Log: " + error);
  });
}