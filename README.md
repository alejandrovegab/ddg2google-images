# DuckDuckGo to Google Images

[![Firefox Add-on](https://img.shields.io/badge/Firefox-Get%20the%20Add--on-ff7118?logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/ddg-img-redir-ggl-img/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A lightweight browser extension that automatically redirects DuckDuckGo image searches to Google Images for richer image results and advanced search filtering.

---

## Features

* **Targeted Redirection:** Detects when an image search is performed on DuckDuckGo and routes the query directly to Google Images.
* **Efficient Performance:** Leverages URL parameter parsing and DOM `MutationObserver` APIs to intercept searches instantly without lag or heavy polling.
* **Minimal Footprint:** Zero background bloat, tracking, or unnecessary permissions.

---

## 🚀 Installation

### Option 1: Firefox Add-ons Store (Recommended)

<a href="https://addons.mozilla.org/en-US/firefox/addon/ddg-img-redir-ggl-img/">
  <img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr2020.svg" alt="Get the Add-on on Firefox" height="60" />
</a>

*(Works on Firefox, Zen Browser, LibreWolf, and other Gecko-based browsers).*

---

### Option 2: Manual / Developer Installation

#### Chrome / Chromium Browsers
1. Clone or download this repository:
   ```bash
   git clone [https://github.com/alejandrovegab/DuckDuckGo-Images-to-Google-Images.git](https://github.com/alejandrovegab/DuckDuckGo-Images-to-Google-Images.git)
   ```
2. Open `chrome://extensions/` in your browser.
3. Toggle on **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the "chrome" folder.

#### Firefox / Gecko Browsers
1. Clone or download this repository.
2. Navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...** and select the `manifest.json` file in the "firefox".
