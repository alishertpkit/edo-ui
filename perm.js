async function hasPerm(p){
  const uid = localStorage.getItem('uid')||'1';
  const r = await fetch('/api/permissions/check',{
    method:'POST',
    headers:{'Content-Type':'application/json','X-User-Id':uid},
    body:JSON.stringify({perm:p})
  });
  const j = await r.json();
  return !!j.allowed;
}
async function guard(sel, perm){
  const ok = await hasPerm(perm);
  document.querySelectorAll(sel).forEach(el=>{
    if(!ok) el.style.display='none';
  });
}
