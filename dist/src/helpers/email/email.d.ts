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
export declare const isValidEmail: (value: string) => boolean;
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
export declare const emailExtIsMailReceivable: (email: string) => Promise<boolean>;
//# sourceMappingURL=email.d.ts.map