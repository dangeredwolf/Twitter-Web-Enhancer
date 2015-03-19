// TWELoad.js
// Copyright (c) 2015 Dangered Wolf

console.log("TWELoad loaded");

if (document.domain === "tweetdeck.twitter.com") {
  console.log("TweetDeck? well then, download tweetdeck enhancer. im out");
  return;
}

function TDEURLExchange(url) {
  injurl = document.createElement("div");
  injurl.setAttribute("type",url);
  injurl.id = "TDEURLExchange";
  document.head.appendChild(injurl);
  console.log("injected url exchange with id " + injurl.id);
}

if (typeof chrome !== "undefined") {
  var isChromium = true;
  console.log("Chromium Detected");
} else {
  console.log("Not Chromium");
}

if (typeof safari !== "undefined") {
  var isSafari = true;
  console.log("Safari Detected: This is experimental!!");
} else {
  console.log("Not Safari");
}

var isWebKit = isSafari || isChromium;

if (!isWebKit) {
  console.log("Not WebKit");
  var isGecko = true;
} else {
  console.log("WebKit Detected");
}

InjectStyle = document.createElement("link");
InjectStyle.rel = "stylesheet";
InjectStyle.href = (isChromium && chrome.extension.getURL("resources/app.css")) || (isSafari && safari.extension.baseURI + "resources/app.css") || "https://dangeredwolf.com/assets/twtentest/app.css";
document.head.appendChild(InjectStyle);

console.log("Bootstrapping TDEinject");
InjectScript = document.createElement("script");

if (isChromium) {
  TDEURLExchange(chrome.extension.getURL(""));
  InjectScript.src = chrome.extension.getURL("resources/TWEinject.js");
} else if (isSafari) {
  TDEURLExchange(safari.extension.baseURI + "/");
  InjectScript.src = safari.extension.baseURI + "resources/TWEinject.js";
} /*else {
  TDEURLExchange("https://dangeredwolf.com/assets/tdetest/");
  InjectScript.src = "https://dangeredwolf.com/assets/tdetest/TDEinject.js"; // Firefox version can't update properly yet
}*/

if (isWebKit) {
  InjectScript.type = "text/javascript";
  document.head.appendChild(InjectScript);
} else {
  console.log("no gecko plz");
}
