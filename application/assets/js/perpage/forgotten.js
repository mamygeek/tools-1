/*
    Copyright 2014-2015 Cédric Levieux, Jérémy Collot, ArmagNet

    This file is part of OpenTweetBar.

    OpenTweetBar is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    OpenTweetBar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with OpenTweetBar.  If not, see <http://www.gnu.org/licenses/>.
*/

function forgottenResponseHandler(data) {
	$("#formPanel").hide();
	$("#successPanel").show();
}

$(function() {
	$('#forgottenButton').click(function (e) {
		e.preventDefault();

		var myform = 	{
							mail: $("#mailInput").val()
						};

		$.post("do_forgotten.php", myform, forgottenResponseHandler, "json");
	});
});
