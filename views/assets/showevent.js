// $(document).ready(function() {
//     $('.findevents').submit( function(event){
//     event.preventDefault();
//     var event = $(this).find("input[name='event']").val();
//     var location = $(this).find("input[name='zip']").val();
//     showEvents(event,location);
//     console.log(location);
//     $("#ListItems").html('');
//     });
// });

showEvents('music','austin');

function showEvents (e,l) {

var oArgs = {
app_key: "rqJNStmNMPNtvngf",
q: e,
where: l,
page_size: 10,
sort_order: "popularity",
 date:"This week",
};
// var content = '';

var activityDiv = $('<div>');
var content = $('<div>');
var imageDiv = $('<div>');

EVDB.API.call("/events/search", oArgs, function(oData) {
            console.log(oData)
            //Get the title for each item

            var activityDiv = $('<div>');

            for (var i = 0; i < oData.events.event.length;i++) {
                // content += 
                //  '<div class="box"><a href=' +
                // oData.events.event[i].url + '>' +
                //  oData.events.event[i].title + '</a>' + 
                // " at the " + oData.events.event[i].venue_name +
                // " Start Date and Time: " + oData.events.event[i].start_time

                // + '</div>'; 

                var oneRow = $('<div>');
                oneRow.addClass('row').addClass('rowFormat');
                var rightDiv = $('<div>');
                rightDiv.addClass('col-md-1');
                var m_rightDiv = $('<div>');
                m_rightDiv.addClass('col-md-5');
                var liftDiv = $('<div>');
                liftDiv.addClass('col-md-2');
                var m_liftDiv = $('<div>');
                m_liftDiv.addClass('col-md-2');





                var contentInfo = $('<div>');
                var eventImage = $('<img>');
                var eventLink = $('<a>');
                

                var title = oData.events.event[i].title;
                var eventTime = oData.events.event[i].start_time;
                var venue_name = oData.events.event[i].venue_name;
                var venue_address = oData.events.event[i].venue_address;
                var event_url = oData.events.event[i].url;
                eventLink.attr('href', event_url)
                eventImage.attr('src', oData.events.event[i].image.medium.url);
                m_liftDiv.append(eventImage);
                contentInfo.addClass('contentInfo');
                eventLink.html("<h3>" + title + "</h3>")
                contentInfo.html("<p>" + eventTime + "</p>" + "<p>" + venue_name + "</p>" + "<p>" + venue_address + "</p>")
                m_rightDiv.append(eventLink).append(contentInfo);
                oneRow.append(liftDiv).append(m_liftDiv).append(m_rightDiv).append(rightDiv);
                activityDiv.append(oneRow);


            }
            // Show Data on page
         $("#ListEvents").append(activityDiv);
        });
    }
