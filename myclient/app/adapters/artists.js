import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({

    host: 'http://localhost:3000',
    //namespace: '',

    findRecord: function(store, type, id) {
      let query = JSON.parse(id);
      Ember.Logger.log('STORE-', store);
      Ember.Logger.log('TYPE-', type);
      Ember.Logger.log('ID-', id);
      Ember.Logger.log('QUERY-', query);

      return this.queryRecord(store, type, query);
    },

    queryRecord: function(store, type, query) {
      Ember.Logger.log('STORE-', store);
      Ember.Logger.log('TYPE-', type);
      Ember.Logger.log('QUERY-', type);

      let searchString = query.searchString;
      Ember.Logger.log('QUERY_PARAM-', searchString);

      let url = `${this.host}/search-artists?term=${searchString}`;

      return Ember.$.ajax({
        method: 'get',
        url: url
      }).then(function(response) {
        Ember.Logger.log('..from Adapter RESPONSE-', response);
        let jsonResponse = {
          id: `/search-artists/${searchString}`,
          response: response
          //artists: response.results
        };
        return jsonResponse;
      });
    }

});
