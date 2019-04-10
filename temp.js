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

  // I am very confused regarding moment.js and the "Minutes Away" will be non-functioning until i can get some extra help
  // 
  // var trainFirstClean = 

  // create new row in the table
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFirst),
    $("<td>").text(trainFrequency),
    $("<td>").text("¯\_(ツ)_/¯")

  );
  
  // Append the new row to the table
  $("#tester-tbody > tbody").append(newRow);
});