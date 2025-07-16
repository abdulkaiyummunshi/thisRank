(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });
        
        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });
        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

        $('.dont_miss_wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            speed: 1000,
            cssEase: 'ease-in-out',
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.trending_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            // cssEase: 'ease-in-out',
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
        $('.weekly_top_area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            speed: 1000,
            cssEase: 'ease-in-out',
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.life_hacks').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            speed: 1000,
            cssEase: 'ease-in-out',
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        function faQ() {
            const $faqs = $(".faq");
            if ($faqs.length > 0) {
                $faqs.eq(0).addClass("active");
                $faqs.eq(0).find(".answer").css("max-height", $faqs.eq(0).find(".answer")[0].scrollHeight + "px");
                $faqs.eq(0).find(".icon").text("−");
            }

            $faqs.on("click", function () {
                const $this = $(this);
                const $answer = $this.find(".answer");
                const $icon = $this.find(".icon");

                if (!$this.hasClass("active")) {
                    $faqs.removeClass("active").find(".answer").css("max-height", "0");
                    $faqs.find(".icon").text("+");

                    $this.addClass("active");
                    $answer.css("max-height", $answer[0].scrollHeight + "px");
                    $icon.text("−");
                } else {
                    $this.removeClass("active");
                    $answer.css("max-height", "0");
                    $icon.text("+");
                }
            });
        }
        faQ();
        // Scroll-triggered Counter Animation
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });
        function btnChanger(){
            $('.right_arrow_btn').on('click', function () {
                if ($('.btn1').hasClass('active')) {
                    $('.btn1').removeClass('active');
                    $('.btn2').addClass('active');
                }
            });
            $('.left_arrow_btn').on('click', function () {
                if ($('.btn2').hasClass('active')) {
                    $('.btn2').removeClass('active');
                    $('.btn1').addClass('active');
                }
            });
        }
        btnChanger()
        
        // Back to Top Button
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".back_top").addClass("show");
            } else {
                $(".back_top").removeClass("show");
            }
        });
        $(".back_top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        $('.playBtn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function (url) {
                            // Support both ?v=ID and /embed/ID
                            const watchMatch = url.match(/[?&]v=([^&]+)/);
                            if (watchMatch && watchMatch[1]) return watchMatch[1];

                            const embedMatch = url.match(/embed\/([^\?&]+)/);
                            if (embedMatch && embedMatch[1]) return embedMatch[1];

                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            callbacks: {
                close: function () {
                    document.activeElement && document.activeElement.blur();

                    setTimeout(() => {
                        $('#main-content, .slick-current .playBtn').first().focus();
                    }, 100);
                }
            }
        });
        // Progress Bar Animation
        $(".progress-fill").each(function (index) {
            let bar = $(this);
            let value = bar.data("value");
            let valueText = $(".progress-value").eq(index);
            gsap.to(bar, {
                width: value + "%",
                duration: 2,
                ease: "power2.out"
            });
            gsap.to(valueText[0], {
                innerHTML: value + "%",
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        });

        //blog post gallery
        $('.post-gallery').slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            rtl: false,
            prevArrow:
            "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
            "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
  
    });
    
    $(window).on("load", function () {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "all 0.5s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    });


  const wrapper = document.getElementById("wrapper");
  const container = document.getElementById("trending");
  const itemHeight = 30;
  const originalItems = Array.from(wrapper.children);
  let index = 0;
  let paused = false;

  // Duplicate items for looping
  originalItems.forEach(item => {
    wrapper.appendChild(item.cloneNode(true));
  });

  function scrollNext() {
    if (paused) return;

    index++;
    wrapper.style.transition = 'transform 0.5s ease-in-out';
    wrapper.style.transform = `translateY(-${index * itemHeight}px)`;

    // If reached the original item count, reset instantly
    if (index === originalItems.length) {
      setTimeout(() => {
        wrapper.style.transition = 'none';
        wrapper.style.transform = 'translateY(0)';
        index = 0;

        // Force reflow so transition will work next time
        void wrapper.offsetWidth;
        wrapper.style.transition = 'transform 0.5s ease-in-out';
      }, 500); // match transition time
    }
  }

  const interval = setInterval(scrollNext, 2000); // every 2s

  // Pause on hover
  container.addEventListener('mouseenter', () => paused = true);
  container.addEventListener('mouseleave', () => paused = false);


})(jQuery);







