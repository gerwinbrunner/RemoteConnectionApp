
Tasks = new Mongo.Collection("tasks");
if (Meteor.isServer) {
  Tasks.remove({});
  Tasks.insert({name: 'T1'});
  Tasks.insert({name: 'T2'});
  Tasks.insert({name: 'T3'});
}

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function () {
      return Tasks.find();
    }
  });
}