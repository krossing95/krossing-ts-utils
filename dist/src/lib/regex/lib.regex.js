"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_REGEX = void 0;
exports.EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// PASSWORD:
//     /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*['"{}|:;<>,?!@#$%^&*()\-__+.]){1,}).{8,}$/,
//   EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//   NUMERICAL: /^[0-9]+$/,
//   ALPHA: /^[ A-Za-z'-]*$/,
//   ALPHANUMERIC: /^([a-zA-Z0-9 _-]+)$/,
//   MONGOOBJECT: /^[0-9a-fA-F]{24}$/,
//   SPECIALCHARS: /\W|_/g,
//   CSVDOT_HYPHEN: /^[a-zA-Z0-9 .,-]{0,150}$/,
//   ISBASE64:
//     /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/,
//   ISACADEMICYEAR: /^\d{4}-\d{4}$/,
//   UNEXPECTED_ATTR: /[^\w\s]/gi,
//   WHITESPACES: /\s{2,}/g,
//   DECIMAL_NUM: /^\d+(\.\d{1,3})?$/,
//# sourceMappingURL=lib.regex.js.map