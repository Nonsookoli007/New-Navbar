const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active'); // Toggles the class for the slide effect
    burger.classList.toggle('toggle'); // For hamburger animation
});


// In your main thread
const worker = new Worker('myWorker.js');
worker.postMessage('some message');

worker.onmessage = (event) => {
  // This listener might return true to indicate an asynchronous response
  if (event.data === 'some message') {
    // Simulate a long-running task
    setTimeout(() => {
      worker.postMessage('response'); 
    }, 5000);
    return true; // Indicate asynchronous response
  }
};

// If the worker is terminated before the timeout, you'll get the error.
