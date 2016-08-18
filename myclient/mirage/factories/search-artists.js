import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  artistName() {
    return faker.name.firstName()+' '+faker.name.lastName();
  },
  artistId(i) {
    return (i+1)*243;
  },
  artistLinkUrl() {
    return faker.internet.url();
  },
  primaryGenreName() {
    return faker.random.word();
  }
});
