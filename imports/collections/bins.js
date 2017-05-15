import { Mongo } from "meteor/mongo";

Meteor.methods({
  "bins.insert": function() {
    return Bins.insert({
      createAt: new Date(),
      content: " ",
      sharedWith: [],
      ownerId: this.userId
    });
  },
  //Does not delete, just removes it from collection
  "bins.remove": function(bin) {
    return Bins.remove(bin);
  },

  "bins.update": function(bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  }

});

export const Bins = new Mongo.Collection("bins");






