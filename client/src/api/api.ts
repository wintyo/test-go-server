/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Example Book API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ModelBook
 */
export interface ModelBook {
    /**
     * 
     * @type {string}
     * @memberof ModelBook
     */
    boughtAt: string;
    /**
     * 
     * @type {string}
     * @memberof ModelBook
     */
    content: string;
    /**
     * 
     * @type {number}
     * @memberof ModelBook
     */
    id?: number;
    /**
     * 0: 気になる 1: 購入済 2: 読了
     * @type {number}
     * @memberof ModelBook
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelBook
     */
    title: string;
}

/**
 * BookApi - axios parameter creator
 * @export
 */
export const BookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Bookの削除
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1BookIdDelete', 'id', id)
            const localVarPath = `/api/v1/book/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Bookを更新する
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookIdPut: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1BookIdPut', 'id', id)
            const localVarPath = `/api/v1/book/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Bookを追加する
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookPost: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/book`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary リストを返す
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BooksGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/books`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BookApi - functional programming interface
 * @export
 */
export const BookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BookApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Bookの削除
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BookIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BookIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Bookを更新する
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BookIdPut(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BookIdPut(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Bookを追加する
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BookPost(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BookPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary リストを返す
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BooksGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelBook>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BooksGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BookApi - factory interface
 * @export
 */
export const BookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BookApiFp(configuration)
    return {
        /**
         * 
         * @summary Bookの削除
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiV1BookIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Bookを更新する
         * @param {number} id Book Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookIdPut(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiV1BookIdPut(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Bookを追加する
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BookPost(options?: any): AxiosPromise<void> {
            return localVarFp.apiV1BookPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary リストを返す
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BooksGet(options?: any): AxiosPromise<Array<ModelBook>> {
            return localVarFp.apiV1BooksGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BookApi - object-oriented interface
 * @export
 * @class BookApi
 * @extends {BaseAPI}
 */
export class BookApi extends BaseAPI {
    /**
     * 
     * @summary Bookの削除
     * @param {number} id Book Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookApi
     */
    public apiV1BookIdDelete(id: number, options?: any) {
        return BookApiFp(this.configuration).apiV1BookIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Bookを更新する
     * @param {number} id Book Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookApi
     */
    public apiV1BookIdPut(id: number, options?: any) {
        return BookApiFp(this.configuration).apiV1BookIdPut(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Bookを追加する
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookApi
     */
    public apiV1BookPost(options?: any) {
        return BookApiFp(this.configuration).apiV1BookPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary リストを返す
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookApi
     */
    public apiV1BooksGet(options?: any) {
        return BookApiFp(this.configuration).apiV1BooksGet(options).then((request) => request(this.axios, this.basePath));
    }
}


