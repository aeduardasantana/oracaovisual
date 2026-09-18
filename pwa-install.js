let deferredInstallPrompt=null;
const installButtons=()=>[...document.querySelectorAll('#installHeaderButton,#installAppButton')];
function updateInstallButtons(available){installButtons().forEach(button=>{button.hidden=!available})}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;updateInstallButtons(true)});
document.addEventListener('click',async event=>{const button=event.target.closest('#installHeaderButton,#installAppButton');if(!button)return;if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;updateInstallButtons(false);return}const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);alert(isiOS?'Para instalar: toque em Compartilhar e depois em “Adicionar à Tela de Início”.':'Se a opção de instalação não aparecer, use o menu do navegador e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”.')});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;updateInstallButtons(false)});
if(window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true)updateInstallButtons(false);
