$(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000
  })

  var PostView = Backbone.View.extend({
      tagName: 'div',
      className: 'row span8',
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
  var limit = 2;

  $.getJSON(url+'/api/read/json?callback=?',
    {
      limit: limit
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
