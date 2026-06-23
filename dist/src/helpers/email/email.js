"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailExtIsMailReceivable = exports.isValidEmail = void 0;
const lib_regex_1 = require("../../lib/regex/lib.regex");
const promises_1 = __importDefault(require("node:dns/promises"));
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
/**
 * Verifies whether an email domain can receive emails.
 *
 * This does NOT guarantee the mailbox exists,
 * but confirms that the domain has valid MX records.
 *
 * @param email Email address to verify
 * @returns Promise<boolean>
 *
 * @example
 * ```ts
 * await emailExtIsMailReceivable("john@example.com")
 * // true
 * ```
 */
const emailExtIsMailReceivable = async (email) => {
    // check if the email is valid
    const isValid = (0, exports.isValidEmail)(email);
    if (!isValid)
        return false;
    // retrieve the domain ext.
    const domain = email.split("@", 2)?.[1];
    if (!domain)
        return false;
    try {
        const mxRecords = await promises_1.default.resolveMx(domain);
        return mxRecords.length > 0;
    }
    catch (error) {
        return false;
    }
};
exports.emailExtIsMailReceivable = emailExtIsMailReceivable;
//# sourceMappingURL=email.js.map