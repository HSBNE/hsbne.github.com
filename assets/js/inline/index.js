$(document).ready(function () {
        
        //anon oauth token
        var token = 'FN5RRHYSMEODBAWWPCGR';
        //user id
        var userid = '64082425769';
        //id to target
        var $events = $("#smallevents");
        
        $events.html("<i>Loading events, please stand by...</i>");
        $.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&token='+token+'&user.id='+userid+'&include_all_series_instances=on&include_unavailable_events=on', function(res) {
            if(res.events.length) {
                var s = "";
                for(var i=0;i<6;i++) {
                    var event = res.events[i];
                    var eventTime = moment(event.start.local).format('DD/MM');
                    console.dir(event);
                    s += "<li><a href='" + event.url + "'> "+ eventTime + " " + event.name.text + "</a></li>";
                }
                $events.html(s);
            } else {
                $events.html("<p>Sorry, there are no upcoming events.</p>");
            }
        });


  $('.carousel').carousel({
    interval: 5000
  })

  var PostView = Backbone.View.extend({
      tagName: 'div',
      className: 'row col-md-8',
      render: function () {
          this.$el.html(
              _.template(
                  $('#post_' + this.model.data.type ).html()
              )(this.model)
          );
          $('#blogfeed').append(this.$el);
      }
  });

  var url = 'http://hsbne.tumblr.com';
  var limit = 4;

  $.getJSON(url+'/api/read/json?callback=?',
    {
      num: limit
    },
    function(data) {
      $('#blogfeed').empty();
      $.each(data.posts, function(i,post,list){
        var view = new PostView({model: { data: post }});
        view.render();
      });
    }
  );
});
