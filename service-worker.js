const CACHE='oracao-visual-v8';
const FILES=[
  './',
  './index.html',
  './oracoes-ilustradas.html',
  './ave-maria.html',
  './pai-nosso.html',
  './rosario.html',
  './rosario.css?v=20261013-3',
  './rosario.js?v=20261013-3',
  './styles.css?v=20260918-6',
  './oracoes-ilustradas.css?v=20261012-1',
  './app.js?v=20260917-2',
  './manifest.webmanifest?v=20260916-1',
  './assets/app-icon.svg',
  './assets/oracao-visual-hero.webp',
  './assets/trindade/santissima-trindade.svg?v=20260916-3'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    }
    return response;
  }).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});