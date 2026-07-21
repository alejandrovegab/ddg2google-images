// If we're already on DDG images on page load, redirect immediately
if (location.href.includes('ia=images') || location.href.includes('iax=images')) {
  const query = new URLSearchParams(window.location.search).get('q');
  if (query) {
    location.replace(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`);
  }
}

// Also watch for in-page navigation to images tab
let lastUrl = location.href;

new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    if (currentUrl.includes('ia=images') || currentUrl.includes('iax=images')) {
      const query = new URLSearchParams(window.location.search).get('q');
      if (query) {
        location.replace(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`);
      }
    }
  }
}).observe(document, { subtree: true, childList: true });