// Place any custom jQuery here //

(function () {
	$('#search').hide();
		$('#glyph-search').click(function() {
			$('#search').slideToggle("fast", function() {			
		});
  });
  
  $('.main-nav #search').hide();
		$('.main-nav #search-option').click(function() {
			$('.main-nav #search').slideToggle("fast", function() {			
		});
  });
  
}());