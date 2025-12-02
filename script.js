document.addEventListener('DOMContentLoaded', ()=> {
  const chatMini = document.getElementById('chatMini');
  const chatBox  = document.getElementById('chatBox');
  const chatClose= document.getElementById('chatClose');
  const chatSend = document.getElementById('chatSend');
  const chatInput= document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  // mostrar só a bolhinha ao entrar
  chatMini.style.display = 'flex';
  chatBox.classList.remove('open');

  // função que abre o chat (e esconde a mini)
  function openChat(){
    chatMini.style.display = 'none';
    chatBox.classList.add('open');
    chatBox.setAttribute('aria-hidden','false');
    // garante scroll no fim
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // fecha chat (volta a bolhinha)
  function closeChat(){
    chatBox.classList.remove('open');
    chatBox.setAttribute('aria-hidden','true');
    // delay para manter display flex/none limpo
    setTimeout(()=> chatMini.style.display = 'flex', 150);
  }

  // toggle clicando na mini
  chatMini.addEventListener('click', openChat);
  chatClose.addEventListener('click', closeChat);

  // enviar mensagem local (aparece no chat)
  function sendMsg(){
    const text = chatInput.value.trim();
    if(!text) return;
    const div = document.createElement('div');
    div.className = 'msg youMsg';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // opcional: salvar no localStorage (mantém enquanto navegador aberto)
    try {
      const arr = JSON.parse(localStorage.getItem('blink_chat') || '[]');
      arr.push({user:'you', text, at: Date.now()});
      localStorage.setItem('blink_chat', JSON.stringify(arr));
    } catch(e){}
  }

  chatSend.addEventListener('click', sendMsg);
  chatInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMsg(); });

  // opcional: carregar histórico do localStorage
  try {
    const arr = JSON.parse(localStorage.getItem('blink_chat') || '[]');
    arr.forEach(o=>{
      const d = document.createElement('div');
      d.className = (o.user === 'you') ? 'msg youMsg' : 'msg blinkMsg';
      d.textContent = o.text;
      chatMessages.appendChild(d);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch(e){}
});
