if (Meteor.isClient) {

  RemoteConnection = DDP.connect('http://localhost:3002');
  RemoteTasks = new Mongo.Collection("tasks", {connection: RemoteConnection});


  Template.remoteTasks.helpers({
    tasks: function () {
      return RemoteTasks.find();
    }
  });
}
