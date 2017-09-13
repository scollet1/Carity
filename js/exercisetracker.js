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

document.addEventListener("deviceready", function(){

  if(navigator.network.connection.type == Connection.NONE){
    $("#home_network_button").text('No Internet Access')
                 .attr("data-icon", "delete")
                 .button('refresh');
  }

});
