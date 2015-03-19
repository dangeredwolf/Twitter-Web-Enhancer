// TWEinject.js
// Copyright (c) 2015 Dangered Wolf

// made with love <3

// also dedicated to my amazing boyfriend danny <333

// this is actually a heavily modified fork of TDE 5.0.2's TDEinject with far less daemons lol

(function() {

var TDEBaseURL = "https://dangeredwolf.com/assets/twetest/";

if (typeof window.TDEURLExchange !== "undefined") {
  if (typeof TDEURLExchange.getAttribute === "function") {
    if (TDEURLExchange.getAttribute.toString() === "function getAttribute() { [native code] }") {
      if (typeof TDEURLExchange.getAttribute("type") === "string") {
        console.log("completed integrity check");
        TDEBaseURL = TDEURLExchange.getAttribute("type");
      }
    }
  }
} else {
  console.log("TDEURLExchange failed :( defaulting to streamed sources, may not work... but we'll try...");
}

var steal_log = console.log;
var steal_warn = console.warn;
var steal_debug = console.debug;
var steal_info = console.info;

function WaitForTwitterDumbConsolePatches() {
  if (console.log.toString() === "function log() { [native code] }") {
    setTimeout(WaitForTwitterDumbConsolePatches,50);
    return;
  } else {
    window.console.log = steal_log;
    window.console.warn = steal_warn;
    window.console.debug = steal_debug;
    window.console.info = steal_info;
  }
}

if (console.log.toString() === "function log() { [native code] }" && console.warn.toString() === "function warn() { [native code] }" && console.debug.toString() === "function debug() { [native code] }" && console.info.toString() === "function info() { [native code] }") {
  console.log("We're clear! You may not patch me out, twitter :)");
  setTimeout(WaitForTwitterDumbConsolePatches,50);
}

/*function StreamAngularJS() {

  if (!ShouldUpgrade) {
    return;
  }

  // TDE now uses Angular JS for other nice material things

  // AngularJS Material Stylesheet

  var angularstyles = document.createElement("link");
  angularstyles.rel = "stylesheet";
  angularstyles.href = TDEBaseURL + "resources/angular/angular-material.min.css";
  angularstyles.id = "angularstyles";
  document.head.appendChild(angularstyles);

  // AngularJS / AngularJS Material Scripts

  var injectAngularJS = document.createElement("script");
  injectAngularJS.type = "text/javascript";
  injectAngularJS.src = TDEBaseURL + "resources/angular/hammer.min.js";
  injectAngularJS.id = "injectAngularJS";
  document.body.appendChild(injectAngularJS);

  var injectAngularJS2 = document.createElement("script");
  injectAngularJS2.type = "text/javascript";
  injectAngularJS2.src = TDEBaseURL + "resources/angular/angular.min.js";
  injectAngularJS2.id = "injectAngularJS2";
  document.body.appendChild(injectAngularJS2);

  var injectAngularJS3 = document.createElement("script");
  injectAngularJS3.type = "text/javascript";
  injectAngularJS3.src = TDEBaseURL + "resources/angular/angular-animate.min.js";
  injectAngularJS3.id = "injectAngularJS3";
  document.body.appendChild(injectAngularJS3);

  var injectAngularJS4 = document.createElement("script");
  injectAngularJS4.type = "text/javascript";
  injectAngularJS4.src = TDEBaseURL + "resources/angular/angular-aria.min.js";
  injectAngularJS4.id = "injectAngularJS4";
  document.body.appendChild(injectAngularJS4);

  var injectAngularJS5 = document.createElement("script");
  injectAngularJS5.type = "text/javascript";
  injectAngularJS5.src = TDEBaseURL + "resources/angular/angular-material.min.js";
  injectAngularJS5.id = "injectAngularJS5";
  document.body.appendChild(injectAngularJS5);

}*/

function InjectRobotoFonts() {
  InjectFonts = document.createElement("style");
  InjectFonts.innerHTML = "@font-face{font-family:'Roboto';font-style:normal;font-weight: 300;src:local('Roboto Light'),local('Roboto-Light'),url(" + TDEBaseURL + "resources/fonts/Roboto300latinext.woff2" + ") format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';\
    font-style: normal;\
    font-weight: 300;\
    src: local('Roboto Light'), local('Roboto-Light'), url(" + TDEBaseURL + "resources/fonts/Roboto300latin.woff2" + ") format('woff2');\
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\
  }\
  /* latin-ext */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 400;\
    src: local('Roboto'), local('Roboto-Regular'), url(" + TDEBaseURL + "resources/fonts/Roboto400latinext.woff2" + ") format('woff2');\
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
  }\
  /* latin */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 400;\
    src: local('Roboto'), local('Roboto-Regular'), url(" + TDEBaseURL + "resources/fonts/Roboto400latin.woff2" + ") format('woff2');\
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\
  }\
  /* latin-ext */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 500;\
    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + TDEBaseURL + "resources/fonts/Roboto500latinext.woff2" + ") format('woff2');\
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
  }\
  /* latin */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 500;\
    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + TDEBaseURL + "resources/fonts/Roboto500latin.woff2" + ") format('woff2');\
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\
  }\
  /* latin-ext */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 700;\
    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + TDEBaseURL + "resources/fonts/Roboto700latinext.woff2" + ") format('woff2');\
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
  }\
  /* latin */\
  @font-face {\
    font-family: 'Roboto';\
    font-style: normal;\
    font-weight: 700;\
    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + TDEBaseURL + "resources/fonts/Roboto700latin.woff2" + ") format('woff2');\
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\
  }";

  document.head.appendChild(InjectFonts);

}

function Analytics() {
  if (typeof $ === "undefined") {
    setTimeout(Analytics,500);
    return;
  }
  if (typeof $.ajax === "undefined") {
    setTimeout(Analytics,500);
    return;
  }
  $.ajax({url:"https://dangeredwolf.com/analytics/TWE?crypto=sha3&v=0.1.2b&release=beta"});
}

setTimeout(InjectRobotoFonts,0);
setTimeout(Analytics,1000);

console.log("TWEinject loaded");

})();

