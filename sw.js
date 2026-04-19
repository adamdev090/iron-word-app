// Minimal service worker — enables PWA install only
// No caching — app always requires network connection
// This prevents any risk of saving data while offline

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// No fetch handler — all requests go directly to network
