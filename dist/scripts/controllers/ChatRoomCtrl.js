(function() {
  function ChatRoomCtrl(Firebase) {
    this.rooms = Firebase.getRooms();
  }

  angular
  .module('blocChat')
  .controller('ChatRoomCtrl', ['Firebase', ChatRoomCtrl]);
})();
