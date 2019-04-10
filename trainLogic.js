
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
  var trainFirst = moment($("#first-train").val(), "hh:mm").format("X");
  var trainFrequency = $("#frequency-input").val();

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTime: trainFirst,
    frequency: trainFrequency
  };

  // console log all the data in the array
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);

  // Upload train data to the firebase database
  database.red().push(newEMP);

  alert("Train data added");

  // clear text boxes
   $("#train-name-input").val("");
   $("#destination-input").val("");
   $("#first-train").val("");
   $("#rate-input").val("");
});

// event for adding train data to Firebase database
database.ref().on("child_added", )