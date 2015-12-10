// Now we're ready to go... load up a list of projects
//
$(document).ready(function() {
  // Try to find projects already in the local storage
  var projectList = new app.collections.ProjectList();
  projectList.fetch();
  //  Find a user already in the DB

  // Fetching a dummy me
  // calling it adam rather than user to remind me when I use 
  // this var that it's entirely ad-hoc at the moment.
  var adam = new app.models.User({ id: 1 });
  adam.fetch();


  // Create a dummy project if there isn't one already
  if(projectList.length == 0) {
    var bucket_list = projectList.create({
      title: "Bucketlist",
      url: "https://github.com/dmgarland/BucketListApp",
      body: "<p>I worked on a Rails application that created a todo list of things I want to do before I die.</p> <ul> <li>I integrated Google maps and used Geocoding to determine where my activities would take place.</li> <li>I used AJAX to asynchronously update markers on the map when the center changed.</li> <li>I displayed crime statistics on a chart using an API call and Morris.js</li> </ul>"
    });
  }
  // Put in the me dummy
  
  var view = new app.views.UserView({ model: adam })
  // var $viewEl = $(view.render().el)
  $('#backbone__user').append(view.render().el)

  // Create a blank project for us to fill in.
  projectList.add({
    title: "New Project",
    url: "Click to edit",
    body: "Click to edit"
  });
});