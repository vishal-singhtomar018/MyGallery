// Add a little fade-in effect when scrolling
AOS.init({
    duration:800,
    once:true,
})

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = 'all 0.6s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});


// Animate progress bars when they come into view
 document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = bar.getAttribute("data-progress");
          bar.style.width = target + "%";
          observer.unobserve(bar); // animate only once
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  });


