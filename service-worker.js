const CACHE_NAME = 'umbanda-guia-v1';

// Recursos essenciais para o funcionamento do app (App Shell)
// Nota: Removemos index.tsx do precache para evitar erros em produção,
// ele será cacheado dinamicamente se acessado.
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora requisições para a API do Gemini (devem ser sempre online)
  if (event.request.url.includes('generativelanguage')) {
    return;
  }

  // Estratégia Stale-while-revalidate modificada para Cache-First em assets estáticos
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // Se não estiver no cache, busca na rede
      return fetch(event.request).then((networkResponse) => {
        // Verifica se a resposta é válida
        // Importante: Aceita type 'cors' para permitir cache do CDN do Tailwind e React
        if (!networkResponse || networkResponse.status !== 200 || 
            (networkResponse.type !== 'basic' && networkResponse.type !== 'cors')) {
          return networkResponse;
        }

        // Clona a resposta para salvar no cache
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Fallback opcional para offline total se necessário
      });
    })
  );
});