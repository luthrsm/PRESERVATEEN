$(document).ready(function() {
  $(".on").click(function() {
    $('.alert').css({
      'transform': 'translateX(0)',
      'display': 'block'
    });
    // Remover a classe light-mode quando a classe on está ativada
    $('.light-mode').css({
      'display': 'none'
    });
  });

  $(".close, .out").click(function() {
    $('.alert').css({
      'transform': 'translateX(150%)',
      'display': 'none'
    });
    // Adicionar a classe light-mode quando a classe on não está ativada
    $('.light-mode').css({
      'display': 'block'
    });
  });
})
