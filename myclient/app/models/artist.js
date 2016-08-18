import DS from 'ember-data';

export default DS.Model.extend({

    artistId: DS.attr(),
    artistName: DS.attr(),
    primaryGenreName: DS.attr(),
    artistLinkUrl: DS.attr()
    
});
