// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   exercisetracker.js                                 :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: scollet <marvin@42.fr>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/09/13 12:46:04 by scollet           #+#    #+#             //
//   Updated: 2017/09/13 12:46:07 by scollet          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

global var start
global var money_goal

navigator.geolocation.getCurrentPosition(function(start) {
});

function trackDistance(start) {
  navigator.geolocation.watchPosition(function(position) {
    //document.getElementById('currentLat').innerHTML = position.coords.latitude;
    //document.getElementById('currentLon').innerHTML = position.coords.longitude;
    if (start != position) {
      money_goal += 1;
    }
  }
}

/*
$("#startTracking_start").live('click', function(){

    // Start tracking the User
    watch_id = navigator.geolocation.watchPosition(

        // Success
        function(position){
            tracking_data.push(position);
        },

        // Error
        function(error){
            console.log(error);
        },

        // Settings
        { frequency: 3000, enableHighAccuracy: true });

    // Tidy up the UI
    track_id = $("#track_id").val();

    $("#track_id").hide();

    $("#startTracking_status").html("Tracking workout: <strong>" + track_id + "</strong>");
});

document.addEventListener("deviceready", function(){

  if(navigator.network.connection.type == Connection.NONE){
    $("#home_network_button").text('No Internet Access')
                 .attr("data-icon", "delete")
                 .button('refresh');
  }

});
*/
