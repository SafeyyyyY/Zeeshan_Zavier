(function(){
  const isMobile = window.matchMedia('(max-width:768px)').matches;

  // Scroll reveal untuk media row
  const rows = document.querySelectorAll('.media-row');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });
  rows.forEach(r => observer.observe(r));

  // Efek parallax mainan
  if(isMobile){
    window.addEventListener('scroll',()=>{
      const y = window.scrollY;
      document.querySelectorAll('.toy').forEach((t,i)=>{
        t.style.transform = `translateY(${Math.sin((y+i*40)/100)*10}px)`;
      });
    },{passive:true});
  }

  // Tombol play/pause lagu Toy Story
  const playBtn = document.getElementById('playSong');
  const song = document.getElementById('toySong');
  let isPlaying = false;

  playBtn.addEventListener('click',()=>{
    if(!isPlaying){
      song.play();
      playBtn.textContent = '⏸️ Hentikan Lagu';
      isPlaying = true;
    } else {
      song.pause();
      playBtn.textContent = '▶️ Putar Lagu';
      isPlaying = false;
    }
  });
})();
