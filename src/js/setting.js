/*----------------------------------------
	Header
----------------------------------------*/
$('.main-header__mobile-icon').on('click', function () {
	$(this).toggleClass("mobile-close");
	$(".main-header__navGlobal").fadeToggle(300).toggleClass("is-show");
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.main-header').addClass('is-active');
	} else {
		$('.main-header').removeClass('is-active');
	}
});



/*----------------------------------------
	Size
----------------------------------------*/
$(window).on('load', function () {
	$('.mv-top__slider .first img').addClass('zoom-out');
})

setTimeout(function(){
    $('.mv-top__slider .first img').removeClass('zoom-out');
}, 10000);

/*----------------------------------------
	Common Utility
----------------------------------------*/

// Scroll animation
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.box-sidebar').css({'top': '100px' });
		} else {
			$('.box-sidebar').css({'top': '200px' });
		}
	});
});


// Smooth Scroll
var headerHeight = $('#main-header').outerHeight() + 20;

var urlHash = location.hash;
if (urlHash) {
	$('body,html').stop().scrollTop(0);
	setTimeout(function () {
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({ scrollTop: position }, 500);
	}, 100);
}

$(function () {
	$('a[href*="#"], area[href*="#"]').not(".noScroll").click(function () {
		var speed = 400,
			href = $(this).prop("href"),
			hrefPageUrl = href.split("#")[0],
			currentUrl = location.href,
			currentUrl = currentUrl.split("#")[0];

		if (hrefPageUrl == currentUrl) {

			href = href.split("#");
			href = href.pop();
			href = "#" + href;

			var target = $(href == "#" || href == "" ? 'html' : href),
				position = target.offset().top - headerHeight;
			$('body,html').stop().animate({ scrollTop: position }, 500);
			return false;
		}

	});
});



/*----------------------------------------
	Pages
----------------------------------------*/
$(function () {
	
	
	$('.service-page__slider').slick({
		centerMode: true,
		centerPadding: '13%',
		slidesToShow: 2,
		autoplay: true,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '150px',
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '150px',
			  slidesToShow: 1
			}
		  }
		]
	});
	
	$('.kodawrari-top__slider').slick({
		centerMode: true,
		centerPadding: '13%',
		slidesToShow: 3,
		autoplay: true,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '150px',
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '150px',
			  slidesToShow: 1
			}
		  }
		]
	});


	$('.common-slider').each(function () {
		$(this).slick({
			pauseOnHover: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000,
			focusOnSelect: true,
			dots: true,
			appendDots: $(this).next(),
			dotsClass: 'slider-dots',
		});
	
		// On before slide change
		$(this).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$(this).next().find('button').html('');
		}).trigger('beforeChange');
	
		// On before slide change
		$(this).on('afterChange', function (event, slick, currentSlide) {
			$(this).next().find('button').html('');
			$('.slider-dots-box .slick-active button')
				.html(`<svg class="progress-svg" width="24" height="24">
			<g transform="translate(12,12)">
		  <circle class="circle-go" r="11" cx="0" cy="0"></circle>
			</g>
		</svg>`);
		}).trigger('afterChange');
	});
	

	//Slider MV
	$('.mv-top__slider').on('afterChange init', function(event, slick, direction){
		$('.mv-top__slider').next().find('button').html('');
		$('.slider-dots-box .slick-active button')
			.html(`<svg class="progress-svg" width="24" height="24">
		<g transform="translate(12,12)">
	  <circle class="circle-go" r="11" cx="0" cy="0"></circle>
		</g>
	</svg>`);
		slick.$slides.removeClass('prev').removeClass('next');
		for (var i = 0; i < slick.$slides.length; i++)
		{
			var $slide = $(slick.$slides[i]);
			if ($slide.hasClass('slick-current')) {
				$slide.prev().addClass('prev');
				$slide.next().addClass('next');
				break;
			}
		}
	}
	)
	.on('beforeChange', function(event, slick) {
		slick.$slides.removeClass('prev').removeClass('next');
		$('.mv-top__slider').next().find('button').html('');
	})
	.slick({
		dots: true,
		focusOnSelect: true,
		pauseOnHover:false,
		infinite: true,
		fade: true,
		autoplay: true,
		navs: false,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		appendDots: $('.slider-dots-box'),
		dotsClass: 'slider-dots',
	});
})


