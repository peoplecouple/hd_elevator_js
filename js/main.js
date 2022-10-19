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

    SCT > 600
      ? document.querySelector('.to_top').classList.add('on')
      : document.querySelector('.to_top').classList.remove('on')
  });

  const slideDots = document.querySelectorAll('.slide_dots li');

  const MAINSLIDE = new Swiper('.main_slider', {
    loop: true,
    slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
    on: {
      slideChangeTransitionEnd: function () {
        let count = this.realIndex; // 0 1 2
        slideDots.forEach(it => it.classList.remove('on'))
        slideDots[count].classList.add('on');
        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
      }
    }
  });

  // const MAINSLIDE = new Swiper('.main_slider', {
  //   loop: true,
  //   on: {
  //     init: function () {
  //       const current = document.querySelector('.swiper-slide-active')
  //       current.classList.add('on');
  //       document.querySelector('.main_slider_num').innerHTML =
  //         (this.realIndex + 1) + " / <span>" + (this.slides.length - 2) + "</span>";
  //       // console.log(this.slides.length-2)
  //     }
  //   }
  // })

  // const totalslide = document.querySelectorAll('.swiper-slide')
  // const slideDots = document.querySelectorAll('.slide_dots li')

  // MAINSLIDE.on('slideChangeTransitionEnd', function () {
  //   const current = document.querySelector('.swiper-slide-active')

  //   totalslide.forEach(el => el.classList.remove('on'))
  //   current.classList.add('on')
  //   // console.log(totalslide, current, this.realIndex)
  //   let count = this.realIndex
  //   slideDots.forEach(el => el.classList.remove('on'))
  //   slideDots[count].classList.add('on')
  //   document.querySelector('.main_slider_num').innerHTML =
  //     (this.realIndex + 1) + " / <span>" + (this.slides.length - 2) + "</span>";
  // })

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


  const PLS = new Swiper('.portfolio_left_slide', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  })

  const PRS = new Swiper('.portfolio_right_slide', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
  })


  const solutionDots = document.querySelectorAll('.solution_dots li');
  solutionDots.forEach((el, idx) => {
    el.addEventListener('click', () => {
      SCS.slideTo(idx);
      solutionDots.forEach(el => el.classList.remove('on'))
      el.classList.add('on')
    })
  })

  const SCBOX = document.querySelectorAll('.Solution .content_box>div')
  const SCS = new Swiper('.Solution .center_slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 100,
    slideActiveClass: 'on',
    speed: 500,
    on: {
      slideChangeTransitionEnd: function () {
        let count = this.realIndex; // 0 1 2
        SCBOX.forEach(it => it.classList.remove('on'))
        SCBOX[count].classList.add('on');
        solutionDots.forEach(el => el.classList.remove('on'))
        solutionDots[count].classList.add('on')
        document.querySelector('.solution_slider_num').innerHTML = (this.realIndex + 1) + " <span>  / " + (SCBOX.length);

      }
    }
  })


  //슬라이드 두개 연동
  // PRS.controller.control = PLS;
  // PLS.controller.control = PRS;

  document.querySelector('.Portfolio .prev').addEventListener('click', function () {
    PRS.slidePrev();
  })
  document.querySelector('.Portfolio .next').addEventListener('click', function () {
    PRS.slideNext();
  })

  document.querySelector('.Solution .prev').addEventListener('click', function () {
    SCS.slidePrev();
  })
  document.querySelector('.Solution .next').addEventListener('click', function () {
    SCS.slideNext();
  })

  document.querySelector('#FL').addEventListener('change', (e) => {
    let lnk = e.target.value
    lnk && window.open(lnk)
  })

  document.querySelector('.to_top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    WebGLSampler.toString(window, 3, { screenTop: 0 })
  })

  const FT_LINK = document.querySelectorAll('.ft_top .right li')
  const FT_CONTENT = document.querySelectorAll('.ft_top .content .link')

  FT_LINK.forEach((el, idx) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('on')) {
        el.classList.remove('on')
        FT_CONTENT[idx].classList.remove('on')
      } else {
        FT_LINK.forEach(el => el.classList.remove('on'))
        el.classList.add('on')
        FT_CONTENT.forEach(el => el.classList.remove('on'))
        FT_CONTENT[idx].classList.add('on')
      }
    })
  })

  console.log(document.cookie);
  const COOKIE = document.cookie;
  if (!COOKIE) { //쿠키가 없으면
    document.querySelector('.popup').style.display = "block"
  }

  document.querySelector('.popup button').addEventListener('click', function () {
    document.querySelector('.popup').style.display = "none"
  })


  document.querySelector('.popup input').addEventListener('change', () => {

    const date = new Date();
    date.setTime(date.getTime() + (10 * 1000)); //10초 짜리 팝업
    let expires = "expires=" + date.toUTCString();
    document.cookie = "name=popup; " + expires + ";path=/"
    document.querySelector('.popup').style.display = "none"
  })

})
