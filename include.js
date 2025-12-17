async function includeHeader(){
  const r = await fetch('/header.html');
  const h = await r.text();
  document.body.insertAdjacentHTML('afterbegin', h);
}
window.addEventListener('DOMContentLoaded', includeHeader);
