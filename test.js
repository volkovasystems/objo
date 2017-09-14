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

} );

//: @end-server






