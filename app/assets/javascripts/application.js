// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require bootstrap-datepicker
//= require_tree .

$(document).ready( function () {
    $('#user_payment_table').DataTable({
      	"columnDefs": [
      		{ "width": "9%", "targets": 0 },
      		{ "width": "7%", "targets": 2 },
      		{ "width": "7%", "targets": 3 },
      		{ "width": "7%", "targets": 4 },
      		{ "width": "12%", "targets": 5 },
      	],
      	"order": [[ 0, "desc" ]]
    });
} );

$(document).ready(function(){
    $('.datepicker').datepicker({
      format: "yyyy-mm-dd",
      todayHighlight: true
    });
});
