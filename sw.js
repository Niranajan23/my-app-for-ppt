self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('infogenius-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.tsx',
        '/index.css',
        '/manifest.json',
        'https://cdn-icons-png.flaticon.com/512/2065/2065224.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});