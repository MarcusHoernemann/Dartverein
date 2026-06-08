self.addEventListener('install', (event) => {
    // Sofort aktivieren, ohne auf alte Caches zu warten
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Kontrolle über alle Clients übernehmen
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Einfach alles normal laden, damit die PWA-Pflicht erfüllt ist
    event.respondWith(fetch(event.request));
});
