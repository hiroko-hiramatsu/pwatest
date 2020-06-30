importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
    {
      url: '/index.html',
      revision: '1'
    },
    {
      url: '/style.css',
      revision: '1'
    },
    { 
  　url: '/app.js',
      revision: '1'
    },
  ]);

window.addEventListener("load", function() {
    document.getElementById("hello").addEventListener("click", function() {
        document.getElementById("message").innerHTML += "Hello, ";
    });
    document.getElementById("bye").addEventListener("click", function() {
        document.getElementById("message").innerHTML += "Bye, ";
    });
    document.getElementById("exit").addEventListener("click", function() {
        window.history.back();
    });
});
