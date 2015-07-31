/**
 * Author  : Ramesh R
 * Created : 7/31/2015 11:09 PM
 * ----------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * ----------------------------------------------------------------------
 */

'use strict';

var cache = {};

module.exports = {

    /// logging

    log: function (msg) {
        console.log(msg);
    },

    logError: function (err) {
        console.log(err);
    },

    /// general

    escapeRegExp: function (string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },

    replaceAll: function (string, find, replace) {
        return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },

    generateRandomString: function (options) {
        return Math.floor(Math.random() * 0x100000000);
    },

    /// json related

    formatJson: function (jsonData) {
        if (jsonData && typeof jsonData != "object") {
            try {
                return JSON.parse(jsonData);
            } catch (err) {
                this.logError(err);
                return {};
            }
        }

        return jsonData;
    },

    /// Date related

    getDateString: function () {
        var d = new Date();
        var junkDate = d.toLocaleString('en-GB');

        var trimmed = this.replaceAll(junkDate, '/', '');
        trimmed = this.replaceAll(trimmed, ' ', '');
        trimmed = this.replaceAll(trimmed, ':', '');
        trimmed = this.replaceAll(trimmed, ',', '');

        return trimmed;
    },

    getUid: function (options) {
        var processTime = process ? process.hrtime() : [1, 2];

        var uid = this.getDateString();
        uid += '.' + processTime[0];
        uid += '.' + processTime[1];

        uid += '.' + this.generateRandomString();

        return uid;
    }
};