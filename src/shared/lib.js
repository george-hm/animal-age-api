/**
 * Returns an AWS-lambda proxy response
 * Use this for returning and ending a lambda function
 *
 * @static
 * @param {number} status     The status code to return
 * @param {any}    [body]     A body to return
 * @param {string} [location] A URL to redirect to - if correct status code
 * @returns
 */
export function createResponse(status, body, location) {
    const response = {
        statusCode: status,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(body) || '{}',
    };

    if (location) {
        response.headers.Location = location;
    }

    return response;
}
