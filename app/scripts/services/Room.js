(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-bb782.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };

  }

  angular
  .module('blocChat')
  .factory('Room', ['$firebaseArray', Room]);
})();
