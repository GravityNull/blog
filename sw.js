// sw.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'gravitynull.in',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// default to `networkFirst` strategy
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate()
);

var version="v2.0.2";var swPath;var urlObject=new URL(location);var host;if(urlObject.searchParams.get("swPath")){swPath=urlObject.searchParams.get("swPath");}
else{if(urlObject.searchParams.get("version")){version=urlObject.searchParams.get("version");}
if(urlObject.searchParams.get("swJSHost")){host="https://"+urlObject.searchParams.get("swJSHost");}
else{host="https://sdki.truepush.com/sdk/";}
swPath=host+version+"/sw.js";}
importScripts(swPath);
