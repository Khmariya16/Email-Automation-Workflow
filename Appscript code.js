// CHANGE THIS LINE WITH YOUR TUNNEL URL:
var POST_URL = "ADD YOUR URL FROM N8N ";

function onSubmit(e) {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
    var latestResponse = allResponses[allResponses.length - 1];
    var response = latestResponse.getItemResponses();
    var payload = {};
    for (var i = 0; i < response.length; i++) {
        var question = response[i].getItem().getTitle();
        var answer = response[i].getResponse();
        payload[question] = answer;
    }
  
    var options = {
        "method": "post",
        "contentType": "application/json",
        "payload": JSON.stringify(payload)
    };
    UrlFetchApp.fetch(POST_URL, options);
}
