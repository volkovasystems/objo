"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "objo",
			"path": "objo/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/objo.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"objo": "objo"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const objo = require( "./objo.js" );
//: @end-server

//: @client:
const objo = require( "./objo.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "objo", ( ) => {

	describe( "`objo( { 'hello': 'world' } )`", ( ) => {
		it( "should return Data instance", ( ) => {
			let data = objo( { "hello": "world" } );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Data" );

			assert.deepEqual( data.valueOf( ), { "hello": "world" } );

		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toString( ), "string" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toBoolean( ), "boolean" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = objo( { "hello": "world" } ).toObject( ).hello;

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`objo( [ 'hello' ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ "hello" ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ 1 ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ 1 ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ Infinity ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ Infinity ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ NaN ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ NaN ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ true ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ true ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ { 'hello': 'world' } ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ { "hello": "world" } ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ null ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ null ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ Symbol.for( 'hello' ) ] ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( [ Symbol.for( "hello" ) ] ).toString( ), "string" );
		} );
	} );

	describe( "`objo( [ 'hello' ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ "hello" ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ 1 ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ 1 ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ Infinity ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ Infinity ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ NaN ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ NaN ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ true ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ true ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ { 'hello': 'world' } ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ { "hello": "world" } ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ null ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ null ] ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( [ Symbol.for( 'hello' ) ] ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( [ Symbol.for( "hello" ) ] ).toNumber( ), "number" );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "objo", ( ) => {

	describe( "`objo( { 'hello': 'world' } )`", ( ) => {
		it( "should return Data instance", ( ) => {
			let data = objo( { "hello": "world" } );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Data" );

			assert.deepEqual( data.valueOf( ), { "hello": "world" } );

		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toString( ), "string" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toNumber( ), "number" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			assert.equal( typeof objo( { "hello": "world" } ).toBoolean( ), "boolean" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = objo( { "hello": "world" } ).toObject( ).hello;

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "objo", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`objo( { 'hello': 'world' } )`", ( ) => {
		it( "should return Data instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof objo( { "hello": "world" } ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => objo( { "hello": "world" } ).constructor.name ).value, "Data" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => objo( { "hello": "world" } ).valueOf( ).hello ).value, "world" );

		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof objo( { "hello": "world" } ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "string" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof objo( { "hello": "world" } ).toNumber( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "number" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof objo( { "hello": "world" } ).toBoolean( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "boolean" );
		} );
	} );

	describe( "`objo( { 'hello': 'world' } ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let descriptor = objo( { "hello": "world" } ).toObject( ).hello;

					let test = typeof descriptor == "object" &&
						"type" in descriptor == true &&
						"name" in descriptor == true &&
						"value" in descriptor == true &&
						"format" in descriptor == true;

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
