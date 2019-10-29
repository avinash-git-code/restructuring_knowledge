// Set the date we're counting down to
var countDownDate = new Date("April 26, 2019 22:40:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
// Get todays date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Display the result in the element with id="demo"
document.getElementById("offer-timer").innerHTML = /*days + ":" +*/ hours + ":" + minutes + ":" + seconds + "" ;
// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("offer-timer").innerHTML = "";
}
}, 1000);




var spanfocus = document.getElementById('form-input-cont');
var focus = document.getElementById('email');
var oc = document.getElementById('oc');
var emailsave = document.getElementById('submit');

spanfocus.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById('offer-animation').style.display = 'none';
  focus.focus();
});

oc.addEventListener('click', function(){
  document.getElementById('offer-animation').style.display = 'block';
  focus.value = '';
});
emailsave.addEventListener('click', function(){
  event.stopPropagation();
});


function notifyMsg() {
  var x = document.getElementById("toastmsg-cont");
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    // alert('Please provide a valid email address');
    x.innerHTML = 'Please provide valid email';
    x.className = "error";
    email.value = "";
    email.focus;
    // return false;
    setTimeout(function(){ x.className = x.className.replace("error", ""); }, 3000);
  }else{
    x.innerHTML = 'Your email is submited';
    x.className = "success";
    submit_form();
    email.value = "";
    setTimeout(function(){ x.className = x.className.replace("success", ""); }, 3000);
  }
}

function submit_form() {
  // Check Fields
  var complete = true;
  var error_color = '#FFD9D9';
    var fields = ['email']; //['first_name','last_name','email'];
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var row = '';
    var i;
    for(i=0; i < fields.length; ++i) {
        var field = fields[i];
        $('#'+field).css('backgroundColor', 'inherit');
        var value = $('#'+field).val();
      // Validate Field
        if(!value) {
            if(field != 'message') {
                $('#'+field).css('backgroundColor', error_color);
                var complete = false;
            }
            } else {
      // Sheet Data
            row += '"'+value+'",';
        }
    }
    row += '"'+dateTime+'",'; 

    // Submission
    if(complete) {
    // Clean Row
    row = row.slice(0, -1);
        // Config
        var gs_sid = '19BJADNMloY-apQk3mUt1CWi8lqpnAaTkETYP2d9aHdw'; // Enter your Google Sheet ID here
        var gs_clid = '595795424821-cfai84qvsm18n6cjklsvhdura1prsqjo.apps.googleusercontent.com'; // Enter your API Client ID here
        var gs_clis = 'AtdUBlBUsK2k8ImMXZSmj2gn'; // Enter your API Client Secret here
        var gs_rtok = '1/_kbii6ZpM2apBpg3_SMX1EA42SXfkNIYz3wTRLj9vik'; // Enter your OAuth Refresh Token here
        var gs_atok = false;
        var gs_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+gs_sid+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
        var gs_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';
         // HTTP Request Token Refresh
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+gs_clid+'&client_secret='+gs_clis+'&refresh_token='+gs_rtok+'&grant_type=refresh_token');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            var response = JSON.parse(xhr.responseText);
            var gs_atok = response.access_token;
      // HTTP Request Append Data
            if(gs_atok) {
                var xxhr = new XMLHttpRequest();
                xxhr.open('POST', gs_url);
                xxhr.setRequestHeader('Content-length', gs_body.length);
                xxhr.setRequestHeader('Content-type', 'application/json');
                xxhr.setRequestHeader('Authorization', 'OAuth ' + gs_atok );
                xxhr.onload = function() {
          if(xxhr.status == 200) {
            // Success
            //$('#message').html('<p>Row Added to Sheet | <a href="http://snydergroupinc.com/tutorials/tutorial-google-sheets-api.php">Add Another &raquo;</a></p><p>Response:<br/>'+xxhr.responseText+'</p>');
            } else {
            // Fail
            //$('#message').html('<p>Row Not Added</p><p>Response:<br/>'+xxhr.responseText+'</p>');
          }
                };
                xxhr.send(gs_body);
            }
        };
        xhr.send();
    }
}
