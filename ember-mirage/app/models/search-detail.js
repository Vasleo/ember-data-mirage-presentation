import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  ArtistId: attr(),

  ArtistName: attr(),

  CollectionId: attr(),

  CollectionName: attr(),

  Kind: attr(),

  Genra: attr(),

  TrackName: attr(),

  ReleaseDate: attr(),

  IsStreaming: attr(),

  Price: attr(),

  ViewUrl: attr()
});
