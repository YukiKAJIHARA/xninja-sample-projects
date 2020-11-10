//キャッシュ名
var CACHE_NAME  = "PW-TEST-190705-01";

//キャッシュするファイル名
var urlsToCache = [
  "/",
  "/index.html",
  "/index.js",
  "/style.css",
  "/parts/nav.html",
];

//インストール時処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

// フェッチ時のキャッシュロード処理（2019/07/18 更新）
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});