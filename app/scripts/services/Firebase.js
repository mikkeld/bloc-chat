(function() {
  function Firebase() {
    var Firebase = {};

    var rooms = [
      {
        name: 'Room1',
        occupancy: 100
      },
      {
        name: 'Room2',
        occupancy: 25
      }
    ];

    Firebase.getRooms = function() {
      return rooms;
    };

    return Firebase;
  }

  angular
  .module('blocChat')
  .factory('Firebase', Firebase);
})();
