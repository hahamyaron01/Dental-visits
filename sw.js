// Service worker מינימלי — נדרש להתקנה כאפליקציה.
// בכוונה בלי מטמון, כדי שעדכון גרסה ייכנס מיד.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
