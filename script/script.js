$(document).ready(function(){ //$ selecciona la clase
  //Se coloca el codigo JS que utiliza jQuery
  configurarInicio();
  $('.myicon').click(function(e){
    $('#navbar ul').toggleClass('lista-sm');
  })
  
  function configurarInicio(){
    var urlPath = window.location.pathname;
    console.log(urlPath);
    $('nav a').each(function(){
      console.log($(this));
      var href = $(this).attr('href');
      console.log(href);
      var indice = urlPath.length - href.length;
      console.log(urlPath.substring(indice));
      if(urlPath.substring(indice) === href){
        console.log('Match');
        $(this).closest('li').addClass('active');
      }
    })
  }
})