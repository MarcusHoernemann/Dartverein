const CACHE_NAME = 'dartlog-cache-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/Dartverein/',
                '/Dartverein/index.html',
                '/Dartverein/manifest.json',
                '/Dartverein/logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
