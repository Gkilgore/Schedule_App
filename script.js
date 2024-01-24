// Wait for the document to be ready before making call
$(document).ready(function () {
    // Make a GET request to the JSON API using jQuery's .getJSON method
    $.getJSON("schedule.json", function (data) {
        // Store the schedule data in a global variable
        let scheduleData = data.schedule;

        // Populate the table with all the schedule data
        populateTable(scheduleData);

//Listen for changes to the dropDown Menu




    });
    // Function to populate the table with schedule data
    function populateTable(scheduleData) {
        $('#schedule-table-body').empty();
        // Iterate over each object in the scheduleData array
        $.each(scheduleData, function (i, schedule) {
            let row = "<tr>";
            // Add the class name, teacher name, room number, and days to the row
            row += '<td>' + schedule.class_name + '</td>'
            row += '<td>' + schedule.teacher_name + '</td>'
            row += '<td>' + schedule.room_number + '</td>'
            row += '<td>' + schedule.days.join(', ') + '</td>'
            row += '</tr>'
            // Append the new row to the table body
            $('#schedule-table-body').append(row)
        })


    }

})