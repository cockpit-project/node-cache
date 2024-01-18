'use strict';

const dns = require('dns');
const util = require('util');

const REQUEST_TIMEOUT = 10000;

// callback(err, data)
async function externalRequest(transport, options, callback) {
    // perform the DNS lookup manually so that the HTTP host header generated by
    // http.get will contain the IP address, this is needed because since Chrome
    // 66 the host header cannot contain an host name different than localhost
    // (see https://github.com/cyrus-and/chrome-remote-interface/issues/340)
    if (!options.useHostName) {
        try {
            const {address} = await util.promisify(dns.lookup)(options.host);
            options.host = address;
        } catch (err) {
            callback(err);
            return;
        }
    }
    // perform the actual request
    const request = transport.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            if (response.statusCode === 200) {
                callback(null, data);
            } else {
                callback(new Error(data));
            }
        });
    });
    request.setTimeout(REQUEST_TIMEOUT, () => {
        request.abort();
    });
    request.on('error', callback);
    request.end();
}

module.exports = externalRequest;
