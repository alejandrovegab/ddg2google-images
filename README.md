# ddg2google-images

[![Firefox Add-on](https://img.shields.io/badge/Firefox-Get%20the%20Add--on-ff7118?logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/ddg-img-redir-ggl-img/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A lightweight browser extension that automatically redirects DuckDuckGo image searches to Google Images for richer image results and advanced search filtering.

---

## Features

* **Targeted Redirection:** Detects when an image search is performed on DuckDuckGo and routes the query directly to Google Images.
* **Efficient Performance:** Leverages URL parameter parsing and DOM `MutationObserver` APIs to intercept searches instantly without lag or heavy polling.
* **Minimal Footprint:** Zero background bloat, tracking, or unnecessary permissions.

---

## Installation

### Firefox (Recommended)
Install the official extension directly from the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/ddg-img-redir-ggl-img/).

---

### Manual Installation (Developer Mode)

#### Chromium (Chrome / Brave / Edge / Opera)

1. Clone or download this repository to your computer:
   git clone https://github.com/alejandrovegab/ddg2google-images.git

2. Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/` if you are on Microsoft Edge).

3. Enable **Developer mode** using the toggle switch in the top-right corner of the extensions page.

4. Click the **Load unpacked** button that appears in the top-left toolbar.

5. Select the `chrome/` folder inside the cloned `ddg2google-images` directory.
