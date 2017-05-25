"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pad = function pad(value, length) {
  while (value.length < length) {
    value = "0" + value;
  }return value;
};

var clone = function clone(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

var toString = function toString(date) {
  return date.getFullYear() + "-" + pad((date.getMonth() + 1).toString(), 2) + "-" + pad(date.getDate().toString(), 2);
};

var toDayOfMonthString = function toDayOfMonthString(date) {
  return pad(date.getDate().toString());
};

var toMonthAndYearString = function toMonthAndYearString(date) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()] + " " + date.getFullYear();
};

var moveToDayOfWeek = function moveToDayOfWeek(date, dayOfWeek) {
  while (date.getDay() !== dayOfWeek) {
    date.setDate(date.getDate() - 1);
  }return date;
};

var isSameDay = function isSameDay(first, second) {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
};

var isBefore = function isBefore(first, second) {
  return first.getTime() < second.getTime();
};

var isAfter = function isAfter(first, second) {
  return first.getTime() > second.getTime();
};

exports.pad = pad;
exports.clone = clone;
exports.toString = toString;
exports.toDayOfMonthString = toDayOfMonthString;
exports.toMonthAndYearString = toMonthAndYearString;
exports.moveToDayOfWeek = moveToDayOfWeek;
exports.isSameDay = isSameDay;
exports.isBefore = isBefore;
exports.isAfter = isAfter;