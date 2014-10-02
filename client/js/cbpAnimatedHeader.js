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

	//Template.header.rendered = function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 100;
//------
	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}
//------
	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
	
		
		if (Router.current().route.name  === 'initialMenu'){
			//$(".logo").addClass("hideLogo");
			$(".logo").addClass("logoStay");
		} 
		$(".navLink").removeClass("blackNavbarLinks");
			$(".navLink").addClass("whiteNavbarLinks");
				//classie.add( header, 'navbar-shrink' );
				$(".navbar-fixed-top").addClass('navbar-shrink');


		}
		else {
			//$(".logo").removeClass("hideLogo");
			
			if (Router.current().route.name  === 'initialMenu'){
				$(".logo").removeClass("logoStay");
				$(".navLink").addClass("blackNavbarLinks");
			$(".navLink").removeClass("whiteNavbarLinks")
		}
				$(".navbar-fixed-top").removeClass('navbar-shrink');
		}
		didScroll = false;
	}
//------
	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

//};