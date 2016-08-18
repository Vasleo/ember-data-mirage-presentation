import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    Ember.Logger.log('store-', store);
    Ember.Logger.log('primaryModelClass-', primaryModelClass);
    Ember.Logger.log('payload-', payload);
    Ember.Logger.log('id-', id);
    Ember.Logger.log('requestType-', requestType);

    let artists = Ember.A([]);
    payload.response.results.forEach(function(detail) {
      let temp = {
        artistId: detail.artistId,
        artistName: detail.artistName,
        primaryGenreName: detail.primaryGenreName,
        artistLinkUrl: detail.artistLinkUrl
      };
      artists.pushObject(temp);
    });
    Ember.Logger.log('artists-', artists);
    let data = {
          "data": {
            "type": "artists",
            "id": payload.id,
            "attributes": {
              "artists": artists
            }
          }
        };

    return data;
  }

});
