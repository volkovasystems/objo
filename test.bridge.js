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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("objo", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`objo( { 'hello': 'world' } )`", function () {
		it("should return Data instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof objo( { "hello": "world" } ); } ).value, "object" );
   			//: @end-ignore

			assert.equal(browser.url(bridgeURL).execute(function () {return objo({ "hello": "world" }).constructor.name;}).value, "Data");

			assert.equal(browser.url(bridgeURL).execute(function () {return objo({ "hello": "world" }).valueOf().hello;}).value, "world");

		});
	});

	describe("`objo( { 'hello': 'world' } ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( { "hello": "world" } ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( { "hello": "world" } ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( { "hello": "world" } ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "boolean");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toObject( )`", function () {
		it("should return object type", function () {
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

			assert.equal(result, true);

		});
	});

	describe("`objo( [ 'hello' ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ "hello" ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ 1 ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ 1 ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ Infinity ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ Infinity ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ NaN ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ NaN ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ true ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ true ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ { "hello": "world" } ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ null ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ null ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ Symbol.for( "hello" ) ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ undefined ] ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ undefined ] ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

		});
	});

	describe("`objo( [ 'hello' ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ "hello" ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ 1 ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ 1 ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ Infinity ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ Infinity ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ NaN ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ NaN ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ true ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ true ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ { "hello": "world" } ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ null ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ null ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ Symbol.for( "hello" ) ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ undefined ] ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof objo( [ undefined ] ).toNumber( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "number");

		});
	});

	describe("`objo( [ 'hello' ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo(["hello"]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ 1 ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([1]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ Infinity ] ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return objo( [ Infinity ] ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ NaN ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([NaN]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ true ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([true]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([{ "hello": "world" }]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ null ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([null]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return objo( [ Symbol.for( "hello" ) ] ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ undefined ] ).toBoolean( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return objo([undefined]).toBoolean();
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`objo( [ 'hello' ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ "hello" ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ 1 ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ 1 ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ Infinity ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ Infinity ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ NaN ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ NaN ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ true ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ true ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ { "hello": "world" } ] ).toObject( )[ 0 ].hello;
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ null ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ null ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ Symbol.for( "hello" ) ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`objo( [ undefined ] ).toObject( )`", function () {
		it("should contain object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = objo( [ undefined ] ).toObject( )[ 0 ];
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwib2JqbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlIiwidmFsdWVPZiIsImhlbGxvIiwicmVzdWx0IiwidG9Cb29sZWFuIiwiTmFOIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLEVBQUUsU0FBUyxPQUFYLEVBQU4sRUFBNkJDLFdBQTdCLENBQXlDQyxJQUFoRCxFQUFsQyxFQUF5RkMsS0FBdkcsRUFBOEcsTUFBOUc7O0FBRUFmLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTSxFQUFFLFNBQVMsT0FBWCxFQUFOLEVBQTZCSSxPQUE3QixHQUF3Q0MsS0FBL0MsRUFBbEMsRUFBeUZGLEtBQXZHLEVBQThHLE9BQTlHOztBQUVB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VSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xESSxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1UsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXZCRDtBQXdCQSxFQXpCRDs7QUEyQkFmLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUksS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNVLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0F2QkQ7QUF3QkEsRUF6QkQ7O0FBMkJBZixVQUFVLHFDQUFWLEVBQWlELFlBQU87QUFDdkRJLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjVSxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBdkJEO0FBd0JBLEVBekJEOztBQTJCQSxDQTV6QkQ7O0FBOHpCQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2Jqb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2Jqby90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb2Jqby5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwib2Jqb1wiOiBcIm9iam9cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJvYmpvXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gRGF0YSBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICk7IH0gKS52YWx1ZSwgXCJvYmplY3RcIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuY29uc3RydWN0b3IubmFtZSApLnZhbHVlLCBcIkRhdGFcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudmFsdWVPZiggKS5oZWxsbyApLnZhbHVlLCBcIndvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcInN0cmluZ1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9OdW1iZXIoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwibnVtYmVyXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJib29sZWFuXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b09iamVjdCggKS5oZWxsbztcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbICdoZWxsbycgXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgXCJoZWxsb1wiIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgMSBdICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyAxIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgSW5maW5pdHkgXSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcInN0cmluZ1wiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBOYU4gXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgTmFOIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdHJ1ZSBdICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyB0cnVlIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgbnVsbCBdICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyBudWxsIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgU3ltYm9sLmZvciggJ2hlbGxvJyApIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwic3RyaW5nXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbICdoZWxsbycgXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgXCJoZWxsb1wiIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgMSBdICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyAxIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgSW5maW5pdHkgXSApLnRvTnVtYmVyKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm51bWJlclwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBOYU4gXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgTmFOIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdHJ1ZSBdICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyB0cnVlIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIFsgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgbnVsbCBdICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqbyggWyBudWxsIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgU3ltYm9sLmZvciggJ2hlbGxvJyApIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0gKS50b051bWJlciggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9OdW1iZXIoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwibnVtYmVyXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbICdoZWxsbycgXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gb2JqbyggWyBcImhlbGxvXCIgXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgMSBdICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBvYmpvKCBbIDEgXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gb2JqbyggWyBJbmZpbml0eSBdICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBOYU4gXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gb2JqbyggWyBOYU4gXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdHJ1ZSBdICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBvYmpvKCBbIHRydWUgXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gb2JqbyggWyB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgbnVsbCBdICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBvYmpvKCBbIG51bGwgXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgU3ltYm9sLmZvciggJ2hlbGxvJyApIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIG9iam8oIFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbICdoZWxsbycgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIFwiaGVsbG9cIiBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIDEgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIDEgXSApLnRvT2JqZWN0KCApWyAwIF07XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBJbmZpbml0eSBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgSW5maW5pdHkgXSApLnRvT2JqZWN0KCApWyAwIF07XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBOYU4gXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIE5hTiBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIHRydWUgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIHRydWUgXSApLnRvT2JqZWN0KCApWyAwIF07XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKS50b09iamVjdCggKVsgMCBdLmhlbGxvO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgbnVsbCBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgbnVsbCBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIFN5bWJvbC5mb3IoICdoZWxsbycgKSBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXSApLnRvT2JqZWN0KCApWyAwIF07XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyB1bmRlZmluZWQgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
