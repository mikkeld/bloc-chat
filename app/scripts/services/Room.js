(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-bb782.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    window.foo = rooms;

    /*var addRoom = function(name) {
      rooms.$add({name: name }).then(function(ref) {
        var id = ref.key();
        console.log("added room with id" + id);
        list.$indexFor(id);
      });
    };*/

    return {
      all: rooms
    };

  }

  angular
  .module('blocChat')
  .factory('Room', ['$firebaseArray', Room]);
})();
