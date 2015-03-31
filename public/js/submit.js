Parse.initialize("iCShsdpsBsxMjqzvCHqAGTfGSja1wgFzILjsNJuD", "Go6XAlP6OHDrGKjTjXL9mEJpCZaoj6qKMrm5ACSY");

var Participant = Parse.Object.extend("Participant");
var participant = new Participant();

document.getElementById("lth-reg-button").onclick = function() {
    var fName = document.getElementById("lth-reg-firstName").value;
    var lName = document.getElementById("lth-reg-lastName").value;
    var uniqName = document.getElementById("lth-reg-uniqname").value;
    var _class = document.getElementById("lth-reg-class").value;
    var experience = document.getElementById("lth-reg-experience").value;
    var major = document.getElementById("lth-reg-major").value;
    
    participant.set("FirstName", fName);
    participant.set("LastName", lName);
    participant.set("UniqueName", uniqName);
    participant.set("Class", _class);
    participant.set("Major", major);
    participant.set("Experience", experience);
    
    participant.save(null, {
  success: function(participant) {
    // Execute any logic that should take place after the object is saved.
    $('#lth-reg-form').hide();
    $('#lth-reg-end').show();
  },
  error: function(participant, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + participant.message);
  }
});
};