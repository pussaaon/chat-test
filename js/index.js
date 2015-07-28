$(document).ready(function(){
    $.getJSON( "chat-msg.json", function( data ) {
        console.log(data['chat-msg']);
        $.each( data['chat-msg'], function( key, item ) {
            var time = new Date(item.time);
            $( ".chat-msg-list" ).append(
                $('<li>').append([
                    $('<img>')
                        .attr('class','user-icon')
                        .attr('src',item.icon),
                    $('<div>')
                        .attr('class', 'msg-detail')
                        .append([
                            $('<p>')
                                .attr('class','user-info')
                                .append([
                                        $('<span>')
                                            .attr('class','user-name')
                                            .append(item.name),
                                        $('<span>')
                                            .attr('class','send-time')
                                            .append($.format.date(time, 'HH:mm')),
                                    ]),
                            $('<p>')
                                .attr('class','msg')
                                .append(item.message)
                        ])    
                ])
            );
        });
    });

    var userSession = {
        name: 'WonderGirl',
        icon: 'img/user-icon.png'
    };

    $('.btn-send').on('click',function(){
        if(!!$('.txt-chat').val().trim()) {
            $( ".chat-msg-list" ).prepend(
                $('<li>').append([
                    $('<img>')
                        .attr('class','user-icon')
                        .attr('src',userSession.icon),
                    $('<div>')
                        .attr('class', 'msg-detail')
                        .append([
                            $('<p>')
                                .attr('class','user-info')
                                .append([
                                        $('<span>')
                                            .attr('class','user-name')
                                            .append(userSession.name),
                                        $('<span>')
                                            .attr('class','send-time')
                                            .append($.format.date(new Date(), 'HH:mm')),
                                    ]),
                            $('<p>')
                                .attr('class','msg')
                                .append($('.txt-chat').val())
                        ])    
                ])
            );
    
            $('.txt-chat').val('');
        }
    });
});