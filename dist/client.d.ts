import { Got } from "got";
import CacheableRequest from "cacheable-request";
import { FunctionResponse } from "./functions";
export interface ClientOptions {
    /**
     * The base URL of the Moodle site to send API requests to. If this value is not provided, then the client falls back
     * to the `JOODLE_BASE_URL` environment variable.
     */
    baseURL?: string;
    /**
     * The token used to authenticate with the Moodle site's Web Services API. If this value is not provided, then the
     * client falls back to the `JOODLE_TOKEN` environment variable.
     */
    token?: string;
}
export interface HttpOptions {
    /**
     * The duration in milliseconds that the client should wait for a response before aborting the request.
     *
     * By default, there is no response timeout duration.
     */
    timeout?: number;
    /**
     * How many retries should the client attempt to make on failure.
     *
     * By default, the client will attempt 2 retries if the first request fails.
     */
    retries?: number;
    /**
     * Whether the client should reject invalid SSL certificates (true) or not (false).
     *
     * By default, the client will reject invalid SSL certificates. This option has security implications if set to true,
     * and we only recommend you do so when connecting to a local Moodle instance.
     */
    rejectInvalidSSL?: boolean;
    /**
     * An object that implements the Map API (such as a `new Map()` or a Keyv instance) can be supplied here to cache
     * requests. This caching behavior is compliant with RFC 7234, and uses the `If-None-Match`/`If-Modified-Since`
     * HTTP headers to revalidate stale cache entries.
     */
    cache?: string | false | CacheableRequest.StorageAdapter;
    /**
     * If set to true, Joodle will additionally accept HTTP/2 requests. HTTP/1.1 or HTTP/2 will be used depending on the
     * ALPN protocol.
     */
    http2?: boolean;
}
/**
 * A client that can send HTTP requests to a Moodle site's Web Services API.
 *
 * @since 0.1.0
 * @abstract
 */
export declare abstract class Client {
    /**
     * The base URL of the Moodle site to send requests to.
     *
     * @since 0.1.0
     */
    private readonly baseURL?;
    /**
     * The token used to authenticate with Moodle's Web Services API.
     *
     * @since 0.1.0
     */
    private readonly token?;
    /**
     * The underlying got instance used for HTTP requests.
     *
     * @since 0.1.0
     */
    got: Got;
    /**
     * Initializes the client as well as the client's `got` instance so HTTP requests can be made.
     *
     * @param {ClientOptions} [options]     The client's configuration options.
     * @param {HttpOptions}   [httpOptions] HTTP configuration options to pass along to `got`.
     * @since 0.1.0
     */
    protected constructor(options?: ClientOptions, httpOptions?: HttpOptions);
    /**
     * Invokes a Moodle Web Services API function.
     *
     * @param {string} wsfunction  The name of the Moodle Web Services API function to invoke.
     * @param {any} [searchParams] Any additional GET parameters to include in the request.
     *
     * @since 1.0.0
     */
    invoke(wsfunction: string, searchParams?: {
        [key: string]: any;
    }): Promise<FunctionResponse>;
}
