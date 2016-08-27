var start = function() {
	animate4();
}

var animate4 = function() {
	//set this on a loop when timings known
	
	// var blank = document.getElementById("four_line0");
	var line0 = document.getElementById("four_line0");
	var line1 = document.getElementById("four_line1");
	var line2 = document.getElementById("four_line2");

	line0.innerHTML = "Ticker Ticker Ticker Ticker Ticker Ticker &#8226; "; //TASK: change to a form
	line1.innerHTML = "Tick Ticker Ticker Ticker Ticker &#8226; ";
	line2.innerHTML = "Ticker Ticker &#8226; ";

	// line0.innerHTML = "Ticker Ticker&#8226"; //TASK: change to a form
	// line1.innerHTML = "Ticker Ticker&#8226;";
	// line2.innerHTML = "Ticker Ticker&#8226;"

		 //get all style values of element
	var line0style = window.getComputedStyle(line0);
	var line1style = window.getComputedStyle(line1);
	var line2style = window.getComputedStyle(line2);

	 // get width value of computed style (see above)
    var line0width = line0style.getPropertyValue('width');
    var line1width = line1style.getPropertyValue('width');
    var line2width = line2style.getPropertyValue('width');

	// var line0width = line0.style.width;
 //    var line1width = line1.style.width;
 //    var line2width = line2.style.width;

    var line0left = line0style.getPropertyValue('left');
    var line1left = line1style.getPropertyValue('left');
    var line2left = line2style.getPropertyValue('left');

	// var line0width_sl = line2width.slice(0, - 1);
	// console.log(line0width_sl);
	var line1shift_sl = line0width.slice(0, - 2);
	console.log(line1shift_sl);
	var line2shift_sl = line1shift_sl + line1width.slice(0, - 2); 
	console.log(line2shift_sl);

	line0.style.left = "0px";
	line1.style.left = line1shift_sl + "px"; //pushes second line past first
	console.log(line1.style.left);
	line2.style.left = line2shift_sl + "px"; //pushes third line past second
	// console.log(line2.style.left);


	var pushAlong = setInterval(function(){	
		console.log("width = " + parseInt(line0width) + " , " + parseInt(line1width) + " , " + parseInt(line2width));
		console.log("left = " + line0left + " , " + line1left + " , " + line2left);

		// line0.style.left += 1 + "px";
		// line1.style.left += 1 + "px";
		// line2.style.left += 1 + "px";

		// console.log("___loop___");
	}, 1000)

    // if (line2.)

}

