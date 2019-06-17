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
