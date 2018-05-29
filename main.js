$(document).on('submit', 'form.testEmail', function(e){
    e.preventDefault();
    
    var form = $(this);
    var section = $(".email")[0];
    var msg = $("#contents");
    var to = $("#to");
    var head = $("#header");
    console.log(to);
    var data = {
        email: $("input[id='email']", form).val(),
        head: $("input[id='head']", form).val(),
        message: $("input[id='msg']", form).val(),
    }
    $.ajax({
        type: 'POST',
        url: 'email.php',
        data: data,
        dataType: 'json',
        async: true
    })
    .done(function ajaxDone(data){
        console.log(data.email);
        to.text(data.email);
        head.text(data.header);
        msg.text(data.content);
        section.style.display = "block";
    })
    .fail(function ajaxFailed(e) {
        console.log(e);
    })
    .always(function ajaxAlways(data){

    })
    
    return false;
})