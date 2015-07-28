$(document).ready(function(){
    $.getJSON( "chat-msg.json", function( data ) {
        var reverseList = data['chat-msg'].reverse();
        $.each( reverseList, function( key, item ) {
            var time = new Date(item.time);
            prependMsgList(
                item.name,
                item.icon,
                time,
                item.message);
        });
    });

    var userSession = {
        name: 'WonderGirl',
        icon: 'img/user-icon.png'
    };

    $('.btn-send').on('click',function(){
        if(!!$('.txt-chat').val().trim()) {
            prependMsgList(
                userSession.name,
                userSession.icon,
                new Date(),
                $('.txt-chat').val());
            $('.txt-chat').val('');
        }
    });
});

var prependMsgList = function(name,icon,time,msg){
    $( ".chat-msg-list" ).prepend(
        $('<li>').append([
            $('<img>')
                .attr('class','user-icon')
                .attr('src',icon),
            $('<div>')
                .attr('class', 'msg-detail')
                .append([
                    $('<p>')
                        .attr('class','user-info')
                        .append([
                                $('<span>')
                                    .attr('class','user-name')
                                    .append(name),
                                $('<span>')
                                    .attr('class','send-time')
                                    .append($.format.date(time, 'HH:mm')),
                            ]),
                    $('<p>')
                        .attr('class','msg')
                        .append(msg)
                ])    
        ])
    );
};