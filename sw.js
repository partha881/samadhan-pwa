self.addEventListener('install', function(event) {
  console.log('[SW] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('[SW] Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});