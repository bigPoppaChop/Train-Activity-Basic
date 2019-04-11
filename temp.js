// event for adding train data to Firebase database
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapShot.val());
  // storing everything into a variable
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirst = childSnapshot.val().firstTime;
  var trainFrequency = childSnapshot.val().frequency;

  // Console Log everything
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFirst);
  console.log(trainFrequency);

  /// convert submitted time
  var firstTimeConverted = moment(trainFirst, "HH:mm");
  console.log(firstTimeConverted);
  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);
  // Time apart (remainder)
  var tRemainder = diffTime % trainFrequency;
  console.log(tRemainder);
  // Minute Until Train
  var tMinutesTillTrain = trainFrequency- tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
  console.log("ARRIVAL TIME: " + nextTrain);

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