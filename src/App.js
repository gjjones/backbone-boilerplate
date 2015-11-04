var KermitModel = Backbone.Model.extend({
  defaults: {
    name: 'Kermit',
    occupation: 'The Host'
  }
});

var KermitView = Backbone.View.extend({
  el: '#kermit-view',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var html = '<b>Name:</b> ' + this.model.get('name');
    html += ', occupation: ' + this.model.get('occupation');
    this.$el.html(html);
    return this;
  }
});

var kermit = new KermitModel();
new KermitView({model: kermit});
