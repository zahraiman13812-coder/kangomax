const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}
document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox?.querySelector('img');
const closeLightbox=()=>{if(lightbox){lightbox.hidden=true;document.body.style.overflow='';}};
document.querySelectorAll('.pack-card').forEach(card=>card.addEventListener('click',()=>{
  if(!lightbox||!lightboxImg)return;
  lightboxImg.src=card.dataset.image;
  lightboxImg.alt=card.querySelector('img')?.alt||'KANGOMAX packaging';
  lightbox.hidden=false;
  document.body.style.overflow='hidden';
}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
document.querySelectorAll('.faq-list details').forEach(item=>item.addEventListener('toggle',()=>{
  if(item.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==item)other.open=false;});
}));
const revealTargets=document.querySelectorAll('.benefit-card,.facts-card,.formula-aside,.pack-card,.origin-visual,.origin-copy,.safety-panel,.faq-list details');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver'in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
 }),{threshold:.12});
 revealTargets.forEach(el=>observer.observe(el));
}else revealTargets.forEach(el=>el.classList.add('visible'));
