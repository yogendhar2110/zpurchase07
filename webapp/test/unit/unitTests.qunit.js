/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comibmzpurchase07/zpurchase07/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
