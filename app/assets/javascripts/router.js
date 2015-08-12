
Todo.Router.map( function () {
  this.resource('items', { path: '/' });
});

Todo.ItemsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('item');
  }
});