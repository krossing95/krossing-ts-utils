export declare const HttpStatus: {
    readonly INFORMATIONAL: {
        readonly CONTINUE: 100;
        readonly SWITCHING_PROTOCOLS: 101;
        readonly PROCESSING: 102;
        readonly EARLYHINTS: 103;
    };
    readonly SUCCESS: {
        readonly OK: 200;
        readonly CREATED: 201;
        readonly ACCEPTED: 202;
        readonly NON_AUTHORITATIVE_INFORMATION: 203;
        readonly NO_CONTENT: 204;
        readonly RESET_CONTENT: 205;
        readonly PARTIAL_CONTENT: 206;
    };
    readonly CLIENT_300_ERRORS: {
        readonly AMBIGUOUS: 300;
        readonly MULTIPLE_CHOICES: 300;
        readonly MOVED_PERMANENTLY: 301;
        readonly FOUND: 302;
        readonly SEE_OTHER: 303;
        readonly NOT_MODIFIED: 304;
        readonly TEMPORARY_REDIRECT: 307;
        readonly PERMANENT_REDIRECT: 308;
    };
    readonly CLIENT_400_ERRORS: {
        readonly BAD_REQUEST: 400;
        readonly UNAUTHORIZED: 401;
        readonly PAYMENT_REQUIRED: 402;
        readonly FORBIDDEN: 403;
        readonly NOT_FOUND: 404;
        readonly METHOD_NOT_ALLOWED: 405;
        readonly NOT_ACCEPTABLE: 406;
        readonly PROXY_AUTHENTICATION_REQUIRED: 407;
        readonly REQUEST_TIMEOUT: 408;
        readonly CONFLICT: 409;
        readonly GONE: 410;
        readonly LENGTH_REQUIRED: 411;
        readonly PRECONDITION_FAILED: 412;
        readonly PAYLOAD_TOO_LARGE: 413;
        readonly URI_TOO_LONG: 414;
        readonly UNSUPPORTED_MEDIA_TYPE: 415;
        readonly REQUESTED_RANGE_NOT_SATISFIABLE: 416;
        readonly EXPECTATION_FAILED: 417;
        readonly I_AM_A_TEAPOT: 418;
        readonly MISDIRECTED: 421;
        readonly UNPROCESSABLE_ENTITY: 422;
        readonly FAILED_DEPENDENCY: 424;
        readonly PRECONDITION_REQUIRED: 428;
        readonly TOO_MANY_REQUESTS: 429;
    };
    readonly SERVER_ERRORS: {
        readonly INTERNAL_SERVER_ERROR: 500;
        readonly NOT_IMPLEMENTED: 501;
        readonly BAD_GATEWAY: 502;
        readonly SERVICE_UNAVAILABLE: 503;
        readonly GATEWAY_TIMEOUT: 504;
        readonly HTTP_VERSION_NOT_SUPPORTED: 505;
        readonly VARIANT_ALSO_NEGOTIATES: 506;
        readonly INSUFFICIENT_STORAGE: 507;
        readonly LOOP_DETECTED: 508;
        readonly NOT_EXTENDED: 510;
        readonly NETWORK_AUTHENTICATION_REQUIRED: 511;
    };
};
