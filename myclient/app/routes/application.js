import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    searchString: function() {
      let searchString = this.controller.get('enteredSearchString');
      this.transitionTo('artists', { queryParams: {searchString: searchString}});
    }
  }

});
