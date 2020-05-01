function Slaider(index) {
   const prev = document.getElementById('btn-prev');
   const next = document.getElementById('btn-next');
   const slides = document.querySelectorAll('.slide');
   const dots = document.querySelectorAll('.dot');

   //let index = 0;

   function prepereSlaider(index) {
      activeSlide(index);
      activeDot(index);
   }

   function activeSlide(index) {
      slides.forEach(item => {
         item.classList.remove('active');
      });
      slides[index].classList.add('active');
   }

   function activeDot(index) {
      dots.forEach(item => {
         item.classList.remove('active');
      });
      dots[index].classList.add('active');
   }

   function nextSlide() {
      if (index == slides.length - 1) {
         index = 0;
         prepereSlaider(index);
      } else {
         index++;
         prepereSlaider(index);
      }
   }

   function prevSlide() {
      if (index == 0) {
         index = slides.length - 1;
         prepereSlaider(index);
      } else {
         index--;
         prepereSlaider(index);
      }
   }

   dots.forEach((item, indexDot) => {
      item.addEventListener('click', (e) => {
         index = indexDot;
         prepereSlaider(indexDot);
         //clearInterval(interval);
      });
   });

   next.addEventListener('click', nextSlide);
   prev.addEventListener('click', prevSlide);
   // next.addEventListener('click',()=>clearInterval(interval));
   // prev.addEventListener('click',()=>clearInterval(interval));

   const interval = setInterval(nextSlide, 5000);
}
Slaider(0);