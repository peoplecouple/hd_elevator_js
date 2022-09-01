window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.top_close_btn').addEventListener('click', function () {
    document.querySelector('.TopBanner').classList.add('on')
    document.querySelector('.MainVisual').classList.add('on')
  });

  document.querySelector('.Header .top_service .lan strong').addEventListener('click', function () {
    this.classList.toggle('on')
    document.querySelector('.Header .top_service .lan').classList.toggle('on')
  })

  document.querySelector('.Header .top_search strong').addEventListener('click', function () {
    this.classList.toggle('on')
    document.querySelector('.Header .top_search .search_box').classList.toggle('on')
  })
  document


  window.addEventListener('scroll', () => {
    let SCT = window.scrollY;
    SCT > 0
      ? document.querySelector('.Header').classList.add('on')
      : document.querySelector('.Header').classList.remove('on')
  });

  const MAINSLIDE = new Swiper('.main_slider', {
    loop: true,
    on: {
      init: function () {
        const current = document.querySelector('.swiper-slide-active')
        current.classList.add('on');
        document.querySelector('.main_slider_num').innerHTML =
          (this.realIndex + 1) + " / <span>" + (this.slides.length - 2) + "</span>";
        // console.log(this.slides.length-2)
      }
    }
  })

  const totalslide = document.querySelectorAll('.swiper-slide')
  const slideDots = document.querySelectorAll('.slide_dots li')

  MAINSLIDE.on('slideChangeTransitionEnd', function () {
    const current = document.querySelector('.swiper-slide-active')

    totalslide.forEach(el => el.classList.remove('on'))
    current.classList.add('on')
    // console.log(totalslide, current, this.realIndex)
    let count = this.realIndex
    slideDots.forEach(el => el.classList.remove('on'))
    slideDots[count].classList.add('on')
    document.querySelector('.main_slider_num').innerHTML =
      (this.realIndex + 1) + " / <span>" + (this.slides.length - 2) + "</span>";
  })

  document.querySelector('.MainVisual .prev').addEventListener('click', function () {
    MAINSLIDE.slidePrev();
  })
  document.querySelector('.MainVisual .next').addEventListener('click', function () {
    MAINSLIDE.slideNext();
  })

  slideDots.forEach((el, idx) => {
    el.addEventListener('click', () => {
      console.log(idx)
      MAINSLIDE.slideTo(idx + 1)
    })
  })
})
