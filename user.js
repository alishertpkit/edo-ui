function setUser(id){
  localStorage.setItem('uid', id);
  document.getElementById('uid').textContent = id;
}
function getUser(){
  return localStorage.getItem('uid') || '1';
}
document.addEventListener('DOMContentLoaded', ()=>{
  const u = getUser();
  const el = document.getElementById('uid');
  if(el) el.textContent = u;
});
