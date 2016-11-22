var sigmanautApp = angular.module('SigmanautApp', []); //set up angular module

sigmanautApp.controller('SigmanautController', function(){ //name Ctrl, give it functionality.
  console.log('Sigmanaut controller loaded');

  var self = this; // holds the value of this

  self.people = [ //array of objects to hold the people
    {
      "firstName": "Chris",
      "lastName": "Mattox",
      "git_username": "ChrisMattox",
      "shoutout": "Keep it real, Wu-Tang."
    }
  ];

  self.newPerson = {}; //hold new data bind from DOM

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson)); //pushes object copy from newPerson into people array
  };

});
