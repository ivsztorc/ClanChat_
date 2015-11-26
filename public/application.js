$(function(){

$('#chat_form').on('submit', function(e){
e.preventDefault();
var username = $('#username').val();
var message = $('#message').val();
var since = $('#since').val();
var data = {'username': username, 'message': message, 'since': since };
$.ajax({
type: 'POST',
url: '/chat',
data: data,
  // beforeSend: function(){},
  success: function(data){
  $.each(data, function(i, message){
  $('#chatbox').prepend('<li><span title="04:35:16PM"><span class="username">&lt;'+ message.username +'&gt; </span><span class="message">'+ message.message +'</span></span></li>');
  });
  $('#since').val(data[data.length-1].timestamp);
  $('#message').val('');
  },
  complete: function(){$('#chat').text(message)}
});


});

});