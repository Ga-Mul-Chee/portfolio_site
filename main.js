//AOS
AOS.init();
////AOS
$(document).ready(function(){
    //MENU
    var Offset = $( '.main_menu' ).offset();
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > Offset.top ) {
            $( '.main_menu' ).addClass( 'fixed' );
        }
        else {
            $( '.main_menu' ).removeClass( 'fixed' );
            }
    });
    ////MENU
    //MENU SCROLL
    $(".menu_btn").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();    
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
    ////MENU SCROLL
});