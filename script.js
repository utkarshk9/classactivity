if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('/Service-worker.js') 
    .then(() => console.log('Service Worker registered!')) 
    .catch(err => console.log('Service Worker registration failed:', err)); 
    }
    