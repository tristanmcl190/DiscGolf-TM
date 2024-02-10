// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculate-btn').click(function () {
        var hours = parseFloat($('#hours').val());
        if (isNaN(hours) || hours <= 0) {
            $('#output-box').text('Please enter a valid number of hours.'); // Output to output box
            return;
        }
        var hourlyRate = 8.50; // Example hourly rate
        var total = hours * hourlyRate;
        $('#output-box').text('Total: $' + total.toFixed(2)); // Output to output box
    });
});
