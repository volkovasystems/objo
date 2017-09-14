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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwib2JqbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlIiwidmFsdWVPZiIsImhlbGxvIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLEVBQUUsU0FBUyxPQUFYLEVBQU4sRUFBNkJDLFdBQTdCLENBQXlDQyxJQUFoRCxFQUFsQyxFQUF5RkMsS0FBdkcsRUFBOEcsTUFBOUc7O0FBRUFmLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTSxFQUFFLFNBQVMsT0FBWCxFQUFOLEVBQTZCSSxPQUE3QixHQUF3Q0MsS0FBL0MsRUFBbEMsRUFBeUZGLEtBQXZHLEVBQThHLE9BQTlHOztBQUVBLEdBWEQ7QUFZQSxFQWJEOztBQWVBWixVQUFVLDRDQUFWLEVBQXdELFlBQU87QUFDOURJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjVSxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FkRDtBQWVBLEVBaEJEOztBQWtCQWYsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1UsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFmLFVBQVUsNkNBQVYsRUFBeUQsWUFBTztBQUMvREksS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDO0FBQ0g7Ozs7Ozs7OztBQVNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNVLE1BQWQsRUFBc0IsU0FBdEI7QUFDQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBZixVQUFVLDRDQUFWLEVBQXdELFlBQU87QUFDOURJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjVSxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBdkJEO0FBd0JBLEVBekJEOztBQTJCQSxDQXBHRDs7QUFzR0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9iam9cIixcblx0XHRcdFwicGF0aFwiOiBcIm9iam8vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29iam8uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcIm9iam9cIjogXCJvYmpvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwib2Jqb1wiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIERhdGEgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoIGZ1bmN0aW9uKCApeyByZXR1cm4gdHlwZW9mIG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApOyB9ICkudmFsdWUsIFwib2JqZWN0XCIgKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLmNvbnN0cnVjdG9yLm5hbWUgKS52YWx1ZSwgXCJEYXRhXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnZhbHVlT2YoICkuaGVsbG8gKS52YWx1ZSwgXCJ3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvTnVtYmVyKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm51bWJlclwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBvYmpvKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiYm9vbGVhblwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9PYmplY3QoICkuaGVsbG87XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
