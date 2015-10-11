Meteor.publish('excuses', function() {
  return Excuses.find();
});