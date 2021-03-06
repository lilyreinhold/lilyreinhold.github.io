// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {

	var total = 0

	$('#entry').submit(function (event) {

		event.preventDefault()

		var newEntry = $('#newEntry').val()

		newEntry = parseFloat(newEntry)

		total += newEntry

		newEntry = "$" + newEntry.toFixed(2)

		$('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>')

		totalStr = "$" + total.toFixed(2)

		$('#total').text(totalStr)

		$('#newEntry').val('')

document.getElementById("reset").onclick = function() {
  document.getElementById("number").value = "";
};
	})
})
