    $(document).ready(function() {
        
        //anon oauth token
        var token = 'FN5RRHYSMEODBAWWPCGR';
        //org id
        var userid = '64082425769';

        var $events = $("#events");
        
        $events.html("<i>Loading events, please stand by...</i>");
        $.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&token='+token+'&user.id='+userid+'&include_all_series_instances=on&include_unavailable_events=on', function(res) {
            if(res.events.length) {
                var s = "";
                for(var i=0;i<res.events.length;i++) {
                    var event = res.events[i];
                    var eventDay = moment(event.start.local).format('DD');
                    var eventMonth = moment(event.start.local).format('MMM');
                    var monthfromnow = moment().          
//                    console.dir(event);
                    s += "<div class='media'>";
                    s += "<a class='pull-left' href='" + event.url + "'>";
                    s += "<div class='media-left'><h2 class='media-heading'>" + eventDay + "</h2>"+ eventMonth + "</div>";
                    s += "<div class='media-body'>";
                    s += "<h4 class='media-heading'><a href='" + event.url + "'> " + event.name.text + "</a></h4>";
                    s += "<blockquote class='media'>";
                    s += "<p>" + event.description.text + "</p></blockquote></div></div>";
                }
                $events.html(s);
            } else {
                $events.html("<p>Sorry, there are no upcoming events.</p>");
            }
        });
        

        
    });
