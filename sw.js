self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Service worker básico para habilitar la PWA
  e.respondWith(fetch(e.request));
});
