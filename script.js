
/* script.js - small interactions */
document.addEventListener('DOMContentLoaded', function(){
  var nav = document.getElementById('mainNav');
  var toggle = document.getElementById('navToggle');
  toggle && toggle.addEventListener('click', function(){ nav.classList.toggle('show'); });
  // Simple visual form validation
  var form = document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('[name=name]').value.trim();
      var phone = form.querySelector('[name=phone]').value.trim();
      var service = form.querySelector('[name=service]').value;
      if(!name || !phone){
        alert('Пожалуйста, укажите имя и телефон.');
        return;
      }
      // visual success
      form.reset();
      alert('Спасибо! Ваша заявка показана визуально (форма не отправляет письма). Мы свяжемся с вами по телефону.');
    });
  }
});
