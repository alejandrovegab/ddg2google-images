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

#### Chrome / Brave / Edge
1. Clone or download this repository:
   ```bash
   git clone [https://github.com/alejandrovegab/ddg2google-images.git](https://github.com/alejandrovegab/ddg2google-images.git)
