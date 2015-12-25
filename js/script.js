(function () {
  $("#menu").metisMenu();
  $('button#resize').on('click', function(){
    $('div.menu').animate({
       'width': 'toggle',
       });
       var elem = $('#tog').attr('class');
       var target = $('div#tog');
       if(elem == 'hidden'){
        target.addClass('shown');
        target.removeClass('hidden');
       } else {
         target.addClass('hidden');
         target.removeClass('shown');
       }



  });

})();
