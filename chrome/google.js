if (location.href.includes('source=lnms')) {
  const query = new URLSearchParams(window.location.search).get('q');
  if (query) {
    location.replace(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`);
  }
}