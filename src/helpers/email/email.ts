import { EMAIL_REGEX } from "../../lib/regex/lib.regex"
import dns from "node:dns/promises"

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
export const isValidEmail = (value: string): boolean => {
  if (typeof value !== "string") return false
  return EMAIL_REGEX.test(value)
}

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
export const emailExtIsMailReceivable = async (
  email: string,
): Promise<boolean> => {
  // check if the email is valid
  const isValid = isValidEmail(email)
  if (!isValid) return false
  // retrieve the domain ext.
  const domain = email.split("@", 2)?.[1]
  if (!domain) return false
  try {
    const mxRecords = await dns.resolveMx(domain)
    return mxRecords.length > 0
  } catch (error) {
    return false
  }
}
