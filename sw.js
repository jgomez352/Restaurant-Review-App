/* static */

const CACHE_VERSION = 6;
const STATIC_CACHE = `static-cache-v${CACHE_VERSION}`;
const allCaches = [
    STATIC_CACHE
];

/* function(s) */

function storeInCache(cacheName, requestClone, responseClone) {
    console.log('SW is storing in cache.');
    return caches.open(cacheName).then(function (cache) {
        return cache.put(requestClone, responseClone)
    });
}

/* Listener(s) */

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(function (cache) {
            console.log("Static cache: ", STATIC_CACHE);
            return cache.addAll([
                "/",
                'css/styles.css',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'favicon.ico',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'index.html',
                'restaurant.html'
            ]);
        }).catch(function (error) {
            // Registration Failed
            console.log('Static cache error: ' + error);
        })
    );
});
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            console.log("clearing old cache...");
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (!allCaches.includes(cacheName)) {
                        console.log(`Deleting: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );

});
self.addEventListener("fetch", function (event) {
    if (event.request.method === "GET") {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                if (response) { return response; }
                try {
                    return fetch(event.request).then(function (response) {
                        storeInCache(STATIC_CACHE, event.request.clone(), response.clone());
                        return response;
                    });
                }
                catch (e) {
                    console.log("catch error: " + e);
                }
            })
        );
    }
    else {
        event.respondwith(fetch(event.request));
    }
});
