import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    searchString: {
      refreshModel: true
    }
  },

  // model: function(params) {
  //   let searchString = params.searchString;
  //   let url = `http://localhost:3000/search-artists?term=${searchString}`;
  //   let _this = this;
  //
  //   Ember.$.ajax({
  //     method: 'get',
  //     url: url
  //   }).done( function(response) {
  //     Ember.Logger.log('->', response);
  //     _this.controller.set('model', response.results);
  //   });
  // }

  model: function(params) {
    let searchString = params.searchString;
    let _this = this;

    // this.store.queryRecord('artists', {searchString: searchString}).then( function(response) {
    //     Ember.Logger.log('RESPONSE: ', response);
    //     Ember.Logger.log('RESPONSE-DATA: ', response.get('data').artists);
    //     _this.controller.set('model', response.get('data').artists);
    // });

    let recordId = JSON.stringify({
      searchString: searchString
    });
    this.store.findRecord('artists', recordId).then( function(response) {
        Ember.Logger.log('RESPONSE: ', response);
        Ember.Logger.log('RESPONSE-DATA: ', response.get('data').artists);
        _this.controller.set('model', response.get('data').artists);
    });
  }

});
