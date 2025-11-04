
$(function(){
  // smooth scroll
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = $(this.hash);
    if(target.length) $('html,body').animate({scrollTop: target.offset().top - 20}, 500);
  });

  // scroll top button
  var $st = $('#scrollTop');
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 300) $st.fadeIn();
    else $st.fadeOut();
  });
  $st.on('click', function(){ $('html,body').animate({scrollTop:0},400); });

  // contact form submission - 3 fields: name, email, requirement
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    $('#formMsg').text('');
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var requirement = $('#requirement').val().trim();
    if(!name || !email || !requirement){
      $('#formMsg').css('color','red').text('Please fill all fields.');
      return;
    }
    var subject = 'Portfolio Contact: ' + requirement.substring(0,60);
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nRequirement:\n' + requirement;
    var mailto = 'mailto:anirbanpradhan562@gmail.com' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
    $('#formMsg').css('color','green').text('Your default mail client should open to send the message.');
  });
});
