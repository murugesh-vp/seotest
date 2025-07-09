// add delayed functionality here
fetch('https://d2livegshl4cvv.cloudfront.net/seo/seo-data.json')
.then(response => response.text())
.then(structuredDataText => {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = structuredDataText;
  document.head.appendChild(script);
});
