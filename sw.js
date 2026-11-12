// Service worker بسيط: بيخلي المتصفح يعتبر الصفحة تطبيق قابل للتثبيت. مفيش تخزين مؤقت، فالتحديثات بتوصل فورًا.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;e.respondWith(fetch(r))});
