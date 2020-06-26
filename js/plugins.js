// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {};
	var methods = [
		"assert",
		"clear",
		"count",
		"debug",
		"dir",
		"dirxml",
		"error",
		"exception",
		"group",
		"groupCollapsed",
		"groupEnd",
		"info",
		"log",
		"markTimeline",
		"profile",
		"profileEnd",
		"table",
		"time",
		"timeEnd",
		"timeline",
		"timelineEnd",
		"timeStamp",
		"trace",
		"warn",
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
})();

// // Place any jQuery/helper plugins in here.

// {
// 	var random = document.getElementById("random");

// 	var phrase = ["creative-type person", "caffeine addict", "crazy cat lady", "esoteric ice cream hunter", "floof admirer", "sunset spotter", "Animal Crossing fixer", "birb spotter"];

// 	var randomPhrase = phrase[Math.floor(Math.random() * phrase.length)];

// 	random.innerHTML = randomPhrase;
// }

// Can also be included with a regular script tag

var Typed = new Typed(".typed", {
	strings: [
		"designer. developer. creative-type person.",
		"designer. developer. caffeine addict.",
		"designer. developer. crazy cat lady.",
		"designer. developer. esoteric ice cream hunter.",
		"designer. developer. sunset spotter.",
		"designer. developer. floof admirer.",
		"designer. developer. Animal Crossing fixer.",
		"designer. developer. fat birb lover.",
		"designer. developer. creative-type person.",
	],
	typeSpeed: 40,
	backSpeed: 40,
	smartBackspace: true,
	backDelay: 200,
	showCursor: false,
});
