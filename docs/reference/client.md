---
title: Client
---

# Client

## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd><p>A client that can send HTTP requests to a Moodle site&#39;s Web Services API.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#handleResponse">handleResponse(response)</a></dt>
<dd><p>Attempts to handle a JSON body returned by a call to Moodle&#39;s Web Services API. If the body contains an <code>exception</code>
property, then the response is assumed to be erroneous, and a rejected Promise is returned.</p>
</dd>
</dl>

<a name="Client"></a>

## _Client_

A client that can send HTTP requests to a Moodle site's Web Services API.

**Kind**: global abstract class  
**Since**: 0.1.0

- _[Client](#Client)_
  - _[new Client([options], [httpOptions])](#new_Client_new)_
  - _[.invoke(wsfunction, [searchParams])](#Client+invoke)_

<a name="new_Client_new"></a>

### _new Client([options], [httpOptions])_

Initializes the client as well as the client's `got` instance so HTTP requests can be made.

| Param         | Type                       | Description                                        |
| ------------- | -------------------------- | -------------------------------------------------- |
| [options]     | <code>ClientOptions</code> | The client's configuration options.                |
| [httpOptions] | <code>HttpOptions</code>   | HTTP configuration options to pass along to `got`. |

<a name="Client+invoke"></a>

### _client.invoke(wsfunction, [searchParams])_

Invokes a Moodle Web Services API function.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Since**: 1.0.0

| Param          | Type                | Description                                                 |
| -------------- | ------------------- | ----------------------------------------------------------- |
| wsfunction     | <code>string</code> | The name of the Moodle Web Services API function to invoke. |
| [searchParams] | <code>any</code>    | Any additional GET parameters to include in the request.    |

<a name="handleResponse"></a>

## handleResponse(response)

Attempts to handle a JSON body returned by a call to Moodle's Web Services API. If the body contains an `exception`
property, then the response is assumed to be erroneous, and a rejected Promise is returned.

**Kind**: global function  
**Since**: 1.0.0

| Param    | Description                                 |
| -------- | ------------------------------------------- |
| response | The response returned by a Moodle API call. |
