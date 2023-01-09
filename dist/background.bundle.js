/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/


console.log("connected...");
const onInstallURL = "https://github.com/Zealest/quickrecap-ai";

// On Chrome Install
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: onInstallURL });
    }
});
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map
