import DS from 'ember-data';

export default DS.Model.extend({

    artists: DS.hasMany('artist')

});
