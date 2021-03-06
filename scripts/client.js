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
    },
    {
      "firstName": "Huck",
      "lastName": "Brock",
      "git_username": "huckbee",
      "shoutout": "Chipolte and Friendship for Eeeeeveryoooone!!!"
    },
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    }
  ];

  self.newPerson = {}; //hold new data bind from DOM

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson)); //pushes object copy from newPerson into people array
  };
});
