/**
 * Format for error responses
 * @param {number} code - status code
 * @param {* | undefined} error - error detail message
 * @param {* | undefined} message simple message
 * @return {typeof {code: number, error: any, message: any}
 */
const errorHandler = (code, error, message) => {
  return { code, error: error??{}, message: message??'' };
};

module.exports = errorHandler;
