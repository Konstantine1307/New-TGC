// $evjq SPECIALISED jQuery code to avoid conflicts
var $evjq = jQuery.noConflict();

$evjq(function () {
	// The next few lines set up different date formats.
	// 22 Apr 2022
	var dateFormatUser_EU = "dd M yy";
	// 12/22/2022
	var dateFormatUser_US_ex1 = "M dd yy";
	// 12/Apr/2022
	var dateFormatUser_US_ex2 = "mm-dd-yy";
	// Replace "EU" in the expresssion "dateformatUser_EU" below, by one of the above "US_ex1",  or "US_ex2" to switch to a US date format.
	var userDateFormat = dateFormatUser_EU; // Choose option from above

	// DO NOT MODIFY without professional advice
	var urlQueryParameterDateFormat = "yy-mm-dd";

	// TRANSLATE CALENDAR AND CALENDAR COMMANDS BELOW
	$evjq.defaultsLocalization = {
		closeText: "Done",
		prevText: "Prev",
		nextText: "Next",
		currentText: "Today",
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		dayNames: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
		weekHeader: "Wk",
		firstDay: 1, // 1 - Monday, 0 Sunday
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ""
	};

	$evjq.datepicker.setDefaults($evjq.defaultsLocalization);

	$evjq("#startdate").datepicker({
		// DO NOT MODIFY without professional advice
		dateFormat: userDateFormat,
		onSelect: showDays,
		onClose: function (selectedDate) {
			var dParts = selectedDate.split("-");
			var in1Days = new Date(dParts[2] + "/" + dParts[1] + "/" + (+dParts[0] + 1));
			$evjq("#enddate").datepicker("option", "minDate", in1Days);
			$evjq("#enddate").datepicker("show");
		},
		minDate: 0,
		// DO NOT MODIFY without professional advice
		altFormat: urlQueryParameterDateFormat,
		altField: "#startdate1"
	});
	$evjq("#enddate").datepicker({
		// DO NOT MODIFY without professional advice
		dateFormat: userDateFormat,
		onSelect: showDays,
		minDate: 0,
		// DO NOT MODIFY without professional advice
		altFormat: urlQueryParameterDateFormat,
		altField: "#enddate1"
	});

	function showDays() {
		var start = $evjq("#startdate").datepicker("getDate");
		var end = $evjq("#enddate").datepicker("getDate");
		if (!start || !end) return;
		var days = (end - start) / 1000 / 60 / 60 / 24;

		$evjq(".s-ev-num-nights")
			// Change or Translate the text "Number of Nights" by another expression to suit you needs, for example:  "Length of stay".  The number of nights message appears after a guest has selected their stay dates to confirm the length of stay in number of nights.
			.text("Number of nights " + days)
			.show();
	}
	// DO NOT MODIFY without professional advice
	var date = new Date(),
		dateString =
			date.getMonth() +
			1 +
			"/" +
			date.getDate() +
			"/" +
			date.getFullYear().toString().substr(2, 2);
	$evjq("#startdate").datepicker("setDate", date);
	$evjq("#startdate,#enddate").blur(function () {
		$evjq("#startdate,#enddate").removeClass("ev-invalid");
	});
	// DO NOT MODIFY without professional advice
	$evjq("#availabilitySearchResults").submit(function () {
		if ($evjq.trim($evjq("#startdate").val()) === "") {
			$evjq("#startdate").addClass("ev-invalid");
			return false;
		}
		if ($evjq.trim($evjq("#enddate").val()) === "") {
			$evjq("#enddate").addClass("ev-invalid");
			return false;
		} else {
			$evjq("#startdate,#enddate").removeClass("ev-invalid");
			$evjq("#startdate,#enddate", this).attr("name", "");
			$evjq("#startdate,#enddate", this).attr("value", "");
			return true;
		}
	});
});

