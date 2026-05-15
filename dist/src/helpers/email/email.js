"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = void 0;
const lib_regex_1 = require("../../lib/regex/lib.regex");
/**
 * Checks whether a string is a valid email address.
 *
 * @param value Email string to validate
 * @returns true if valid, otherwise false
 *
 * @example
 * ```ts
 * isValidEmail("john@example.com")
 * // true
 * ```
 *
 * @example
 * ```ts
 * isValidEmail("invalid-email")
 * // false
 * ```
 */
const isValidEmail = (value) => {
    if (typeof value !== "string")
        return false;
    return lib_regex_1.EMAIL_REGEX.test(value);
};
exports.isValidEmail = isValidEmail;
//# sourceMappingURL=email.js.map