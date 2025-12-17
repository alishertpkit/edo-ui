async function api(url, opt){
  const r = await fetch(url, Object.assign({
    headers:{'Content-Type':'application/json'}
  }, opt||{}));
  const t = await r.text();
  try{ return JSON.parse(t) }catch(e){ return t }
}
