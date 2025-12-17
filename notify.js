async function notify(){
  const inc = await (await fetch('/api/incoming')).json();
  const tsk = await (await fetch('/api/tasks')).json();
  const now = new Date();

  const newInc = inc.filter(x=>x.status==='registered').length;
  const overdue = tsk.filter(t=>t.due_date && new Date(t.due_date)<now && t.status!=='done').length;

  const el = document.getElementById('notify');
  if(el) el.textContent = `Новые: ${newInc} | Просрочено: ${overdue}`;
}
window.addEventListener('DOMContentLoaded', notify);
