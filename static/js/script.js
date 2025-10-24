(function(){
const btn = document.getElementById('surpriseBtn');
const cards = document.querySelectorAll('.card');
const orb = document.getElementById('floating-orb');


// small tilt from data attribute
cards.forEach(c=>{
const t = parseFloat(c.dataset.tilt) || 0;
c.style.transform = `rotate(${t}deg)`;
c.addEventListener('mouseenter', ()=> c.style.transform = `rotate(${t/2}deg) translateY(-10px)`);
c.addEventListener('mouseleave', ()=> c.style.transform = `rotate(${t}deg)`);
});


// surprise button -> tiny confetti-ish particles using DOM
btn.addEventListener('click', ()=>{
for(let i=0;i<14;i++){
const p = document.createElement('div');
p.className='tiny';
p.style.position='fixed';
p.style.left=(50 + (Math.random()*60-30))+'%';
p.style.top=(40 + Math.random()*20)+'%';
p.style.width = p.style.height = (6 + Math.random()*8)+'px';
p.style.borderRadius = Math.random()>0.5? '50%':'4px';
p.style.background = `hsl(${Math.floor(Math.random()*360)},70%,60%)`;
p.style.opacity = '0.95';
p.style.transform = `translateY(${ -40 - Math.random()*120 }px) rotate(${Math.random()*360}deg)`;
p.style.transition = 'transform 900ms ease-out, opacity 900ms linear';
document.body.appendChild(p);
setTimeout(()=>{ p.style.transform = `translateY(${200 + Math.random()*200}px) rotate(${Math.random()*360}deg)`; p.style.opacity='0'; },20);
setTimeout(()=> p.remove(),1100);
}
});


// Orb follows mouse slowly
let mx=0,my=0;
window.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY; orb.style.left = (mx + 20) + 'px'; orb.style.top = (my + 20) + 'px'; });


// keyboard tiny easter egg: press O to flip colors
window.addEventListener('keydown', (e)=>{
if(e.key.toLowerCase() === 'o'){
document.documentElement.style.setProperty('--accent', '#' + Math.floor(Math.random()*16777215).toString(16));
document.querySelector('.title').classList.toggle('pulse');
}
});


})();