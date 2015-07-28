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
});