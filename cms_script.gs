function sortRoster() {
 var caddieRoster = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Caddie Roster");
 caddieRoster.sort(2);

}

function protect() {
  var caddieRoster = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Caddie Roster");
 var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  for(var i = 2; i <= caddieRoster.getLastRow(); i++) {
    var range = availability.getRange(i, 1, 1, availability.getMaxColumns())
    var protection = range.protect();
    var caddie = caddieRoster.getRange(i, 4).getValue();
    protection.addEditor(caddie);
    protection.addEditor(emailAddress)
  }
}

function protectNormal() {
  var caddieInstructions = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Caddie Instructions");
  var caddieRoster = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Caddie Roster");
  var timeMaker = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Time Maker");
  var mondayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Monday Assignments");
  var tuesdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tuesday Assignments");
  var wednesdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Wednesday Assignments");
  var thursdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Thursday Assignments");
  var fridayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Friday Assignments");
  var saturdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Saturday Assignments");
  var sundayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sunday Assignments");

  var caddieMaster = "timorbon@gmail.com";

  var protectedCaddieInstructions = caddieInstructions.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedCaddieInstructions.addEditor(caddieMaster)

  var protectedCaddieRoster = caddieRoster.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedCaddieRoster.addEditor(caddieMaster)

  var protectedTimeMaker = timeMaker.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedTimeMaker.addEditor(caddieMaster)

  var protectedMondayAssignments = mondayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedMondayAssignments.addEditor(caddieMaster)

  var protectedTuesdayAssignments = tuesdayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedTuesdayAssignments.addEditor(caddieMaster)

  var protectedWednesdayAssignments = wednesdayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedWednesdayAssignments.addEditor(caddieMaster)

  var protectedThursdayAssignments = thursdayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedThursdayAssignments.addEditor(caddieMaster)

  var protectedFridayAssignments = fridayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedFridayAssignments.addEditor(caddieMaster)

  var protectedSaturdayAssignments = saturdayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedSaturdayAssignments.addEditor(caddieMaster)

  var protectedSundayAssignments = sundayAssignments.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
  protectedSundayAssignments.addEditor(caddieMaster)

}

function unprotectAvailability() {
  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var protections = availability.getProtections(SpreadsheetApp.ProtectionType.RANGE);

  for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    protection.remove();
  }

}



function dropdowns(){
  var thursdayList = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Thursday hideSheet2");
  var thursdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Thursday Assignments");
  var fridayList = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Friday hideSheet2");
  var fridayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Friday Assignments");
  var saturdayList = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Saturday hideSheet2");
  var saturdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Saturday Assignments");
  var sundayList = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sunday hideSheet2");
  var sundayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sunday Assignments");


  for(var i = 2; i < 171; i++) {
    var activeCellThursday = thursdayAssignments.getRange(i,2);
    var activeCellFriday = fridayAssignments.getRange(i,2);
    var activeCellSaturday = saturdayAssignments.getRange(i,2);
    var activeCellSunday = sundayAssignments.getRange(i,2);

    var index = activeCellThursday.getRow() -1;

    var thursdayValidationRange = thursdayList.getRange(2, index, 299,1);
    var thursdayValidationRule = SpreadsheetApp.newDataValidation().requireValueInRange(thursdayValidationRange).build();
    var fridayValidationRange = fridayList.getRange(2, index, 299,1);
    var fridayValidationRule = SpreadsheetApp.newDataValidation().requireValueInRange(fridayValidationRange).build();
    var saturdayValidationRange = saturdayList.getRange(2, index, 299,1);
    var saturdayValidationRule = SpreadsheetApp.newDataValidation().requireValueInRange(saturdayValidationRange).build();
    var sundayValidationRange = sundayList.getRange(2, index, 299,1);
    var sundayValidationRule = SpreadsheetApp.newDataValidation().requireValueInRange(sundayValidationRange).build();

    activeCellThursday.setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0, 2).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0, 4).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,6).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0, 8).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0, 10).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,12).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,14).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,16).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,18).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,20).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,22).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,24).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,26).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,28).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,30).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,32).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,34).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,36).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,38).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,40).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,42).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,44).setDataValidation(thursdayValidationRule);
    activeCellThursday.offset(0,46).setDataValidation(thursdayValidationRule);

    activeCellFriday.setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0, 2).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0, 4).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,6).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0, 8).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0, 10).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,12).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,14).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,16).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,18).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,20).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,22).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,24).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,26).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,28).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,30).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,32).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,34).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,36).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,38).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,40).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,42).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,44).setDataValidation(fridayValidationRule);
    activeCellFriday.offset(0,46).setDataValidation(fridayValidationRule);

    activeCellSaturday.setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0, 2).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0, 4).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,6).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0, 8).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0, 10).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,12).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,14).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,16).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,18).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,20).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,22).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,24).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,26).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,28).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,30).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,32).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,34).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,36).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,38).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,40).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,42).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,44).setDataValidation(saturdayValidationRule);
    activeCellSaturday.offset(0,46).setDataValidation(saturdayValidationRule);

    activeCellSunday.setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0, 2).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0, 4).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,6).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0, 8).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0, 10).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,12).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,14).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,16).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,18).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,20).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,22).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,24).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,26).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,28).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,30).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,32).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,34).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,36).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,38).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,40).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,42).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,44).setDataValidation(sundayValidationRule);
    activeCellSunday.offset(0,46).setDataValidation(sundayValidationRule);




  }
}

function clearMonday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var mondayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Monday Assignments");

  availability.getRange('B3:C').clearContent();
  mondayAssignments.getRange('B2:BE').clearContent();
}

function clearTuesday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var tuesdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tuesday Assignments");

  availability.getRange('D3:E').clearContent();
  tuesdayAssignments.getRange('B2:BE').clearContent();
}

function clearWednesday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var wednesdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Wednesday Assignments");

  availability.getRange('F3:G').clearContent();
  wednesdayAssignments.getRange('B2:BE').clearContent();
}

function clearThursday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var thursdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Thursday Assignments");

  availability.getRange('H3:I').clearContent();
  thursdayAssignments.getRange('B2:BE').clearContent();
}

function clearFriday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var fridayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Friday Assignments");

  availability.getRange('J3:K').clearContent();
  fridayAssignments.getRange('B2:BE').clearContent();
}

function clearSaturday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var saturdayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Saturday Assignments");

  availability.getRange('L3:M').clearContent();
  saturdayAssignments.getRange('B2:BE').clearContent();
}

function clearSunday() {

  var availability = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Availability");
  var sundayAssignments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sunday Assignments");

  availability.getRange('N3:O').clearContent();
  sundayAssignments.getRange('B2:BE').clearContent();
}

function updateLoops() {
 var loopCounter = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Loop Counter");

  for(var i = 2; i <= caddieRoster.getLastRow(); i++) {

 }
}
