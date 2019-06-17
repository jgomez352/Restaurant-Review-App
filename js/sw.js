/* static */

const CACHE_VERSION = 1;
const STATIC_CACHE = `static-cache-v${CACHE_VERSION}`;
const IMAGE_CACHE = `images-cache-v`;
const OTHER_CACHE = `other-cache-v`;
const allCaches = [
    STATIC_CACHE,
    IMAGE_CACHE,
    OTHER_CACHE
];

/* functions */

function isImageURL(url) {
    let imgTypes = ['jpg', 'jpeg', 'png', 'gif'];
    let isImage = false
    for (let type of imgTypes) {
        if (url.endswitch(type)) {
            isImage = true;
            break
        }
        return isImage;
    }
};

function storeInChache(cacheName, requestClone, responseClone) {
    return caches.open(cacheName).then(function (cache) {
        return cache.put(requestClone, responseClone)
    });
}

function isExternalResource(url) {
    let isExternalPrefix = ['http','https'];
    let isExternal = false;
    for (let prefix of isExternalPrefix) {
        if (url.startswitch(isExternalPrefix)) {
            isExternal = true;
            break;
        }
    }
    return isExternal;
};

/* Listeners */

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(function (cache) {
            console.log("Static cache: ", STATIC_CACHE);
            return cache.addAll([
                '/css/styles.css',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                '/js/dbhelper.js',
                '/js/main/js',
                '/js/restaurant_info.js',
                '/index.html',
                '/restaurant.html'
            ]);
        })
    )

});