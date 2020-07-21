$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="list" data-message-id=${message.id}>
          <div class="top">
            <div class="top__name">
              ${message.user_name}
            </div>
            <div class="top__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="list" data-message-id=${message.id}>
        <div class="top">
          <div class="top__name">
            ${message.user_name}
          </div>
          <div class="top__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.new-message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('input').prop('disabled',false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.form-btn').prop("disabled",false);
    });
  });
});