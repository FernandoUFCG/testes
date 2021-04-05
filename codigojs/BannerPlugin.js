/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */

"use strict";
 
const { BannerPlugin } = require("./BannerPlugin.1");

const wrapComment = str => {
	if (!str.includes("\n")) {
		return Template.toComment(str);
	}
	return `/*!\n * ${str
		.replace(/\*\//g, "* /")
		.split("\n")
		.join("\n * ")}\n */`;
};
exports.wrapComment = wrapComment;

module.exports = BannerPlugin;
