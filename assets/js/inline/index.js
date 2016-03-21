$(document).ready(function () {
  $(function() { $('#gcf-events').gCalFlow({
  calid: '03ljo8g8a9kkq8dohbb7f14sok@group.calendar.google.com',
  maxitem: 7,
  auto_scroll: false,
    daterange_formatter: function (start_date, end_date, allday_p) {
      function pad(n) { return n < 10 ? "0"+n : n; }
      return pad(start_date.getDate()) + "/" + pad(start_date.getMonth()+1);
    }
  });
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
