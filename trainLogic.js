
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlebel_msJC7vEXyCHtbakAfcVNl10fzE",
  authDomain: "hw7-train-activity-basic.firebaseapp.com",
  databaseURL: "https://hw7-train-activity-basic.firebaseio.com",
  projectId: "hw7-train-activity-basic",
  storageBucket: "hw7-train-activity-basic.appspot.com",
  messagingSenderId: "1085300662209"
};
firebase.initializeApp(config);
var database = firebase.database();


// Button for adding trains
$("#submit-train-btn").on("click", function(event) {

  event.preventDefault();

  //Grab submitted info
  var trainName = $("#train-name-input").val();
  var trainDestination = $("#destination-input").val();
  // uses moment.js to convert hh:mm format to X format
  var trainFirst = moment($("#first-train").val(), "hh:mm").format("hh:mm");
  var trainFrequency = $("#frequency-input").val();

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTime: trainFirst,
    frequency: trainFrequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  };

  // console log all the data in the array
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);

  // Upload train data to the firebase database
  database.ref().push(newTrain);

  // alert("Train data added");

  // clear text boxes
   $("#train-name-input").val("");
   $("#destination-input").val("");
   $("#first-train").val("");
   $("#rate-input").val("");
});


// event for adding train data to Firebase database
// adds new row to HTML
database.ref().on("child_added", function(childSnapshot) {
  // storing everything into a variable
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirst = childSnapshot.val().firstTime;
  var trainFrequency = childSnapshot.val().frequency;

  /// convert submitted time
  var firstTimeConverted = moment(trainFirst, "HH:mm");
  // Current Time
  var currentTime = moment();
  
  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  // Time apart (remainder)
  var tRemainder = diffTime % trainFrequency;
  // Minute Until Train
  var tMinutesTillTrain = trainFrequency- tRemainder;
  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
  
  // Create the new row
  var newTrain = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(nextTrain),
    $("<td>").text(trainFrequency),
    $("<td>").text(tMinutesTillTrain)
  );
  
  // Append the new row to the table
  $("#schedule-table > tbody").append(newTrain);
});

