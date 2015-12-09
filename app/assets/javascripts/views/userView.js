app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "container__bio",
  template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'toggleVisible',
    'change .edit-me': 'updateElement',
    'blur .edit-me': 'updateElement'

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el = $(editable.makeInputBoxes(this.$el, this.model))
    this.listenTo(this.model, "blur", this.render);
    this.listenTo(this.model, "change", this.render);
    return this;
  },

  toggleVisible: function(e){
    $(e.currentTarget).parent().children().toggle()
  },


  updateElement: function(e){
    var $el = $(e.currentTarget)
    var field = $el.attr("data-attributes")
    var newVal = $(e.currentTarget).val().trim();
    this.model.set(field, $el.val().trim());
    this.model.save();
  }

});

