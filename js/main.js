'use strict';

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$(window).on('load', function() {
	$.scrollify.move(0);
});
$(document).ready(function() {
	$.scrollify({
		section: '.js-screen',
		scrollSpeed: 1500,
		scrollbars: true,
		updateHash: false,
		before: function before(index, sections) {
			var classBody = $.scrollify.current().attr('data-section-name');
			$('.js-screen').removeClass('active');
			for (var i = 0; i <= index; ++i) {
				$('body').attr('class', '');
				$('body').addClass(classBody);
			}
		},
		after: function after() {
			var current = $.scrollify.current();
			var classBody = $.scrollify.current().attr('data-section-name');
			$(current).addClass('active');
			$('body').removeClass(classBody);
			$('body').addClass(classBody);
		},
		afterResize: function afterResize() {
			$.scrollify.disable();
			$.scrollify.enable();
		},
		afterRender: function afterRender() {
			$.scrollify.instantMove(0);
		}
	});
	$('#moveDown').click(function() {
		$.scrollify.next();
	});
	$('#moveUp').click(function() {
		$.scrollify.previous();
	});
});
// popover
$(function() {
	$('[data-toggle="popover"]').popover({
		html: 'true',
		content: function content() {
			return $($(this).data('contentwrapper')).html();
		},
		trigger: 'click'
	});
});
$('[data-toggle="popover"]').on('shown.bs.popover', function() {
	$('.b-screen.active, html').toggleClass('popover-is-open');
	// $('.js-close-pop').click(function(){
	//     $(this).parents('.popover').attr("style", "");
	//     $('.b-screen.active, html').toggleClass('popover-is-open');
	// });
});
$('body').on('click', '.js-close-pop', function() {
	var target = $(this).data('target');
	$(target).popover('toggle');
	$('.b-screen.active, html').toggleClass('popover-is-open');
	// $('[data-toggle="popover"]').each(function () {
	//     //the 'is' for buttons that trigger popups
	//     //the 'has' for icons within a button that triggers a popup
	//     if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	//         $(this).popover('hide');
	//     }
	// });
});
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
