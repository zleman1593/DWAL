/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			$(".logo").addClass("hideLogo");
	$(".navLink").removeClass("blackNavbarLinks");
			$(".navLink").addClass("whiteNavbarLinks");


		}
		else {
			$(".logo").removeClass("hideLogo");
			classie.remove( header, 'navbar-shrink' );
		

				$(".navLink").addClass("blackNavbarLinks");
			$(".navLink").removeClass("whiteNavbarLinks")
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();