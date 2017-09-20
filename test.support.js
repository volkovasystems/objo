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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var objo = require("./objo.support.js");
//: @end-client







//: @client:

describe("objo", function () {

	describe("`objo( { 'hello': 'world' } )`", function () {
		it("should return Data instance", function () {
			var data = objo({ "hello": "world" });

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Data");

			assert.deepEqual(data.valueOf(), { "hello": "world" });

		});
	});

	describe("`objo( { 'hello': 'world' } ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo({ "hello": "world" }).toString()), "string");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo({ "hello": "world" }).toNumber()), "number");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			assert.equal((0, _typeof3.default)(objo({ "hello": "world" }).toBoolean()), "boolean");
		});
	});

	describe("`objo( { 'hello': 'world' } ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = objo({ "hello": "world" }).toObject().hello;

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ 'hello' ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo(["hello"]).toString()), "string");
		});
	});

	describe("`objo( [ 1 ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([1]).toString()), "string");
		});
	});

	describe("`objo( [ Infinity ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([Infinity]).toString()), "string");
		});
	});

	describe("`objo( [ NaN ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([NaN]).toString()), "string");
		});
	});

	describe("`objo( [ true ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([true]).toString()), "string");
		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([{ "hello": "world" }]).toString()), "string");
		});
	});

	describe("`objo( [ null ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([null]).toString()), "string");
		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([(0, _for2.default)("hello")]).toString()), "string");
		});
	});

	describe("`objo( [ undefined ] ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(objo([undefined]).toString()), "string");
		});
	});

	describe("`objo( [ 'hello' ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo(["hello"]).toNumber()), "number");
		});
	});

	describe("`objo( [ 1 ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([1]).toNumber()), "number");
		});
	});

	describe("`objo( [ Infinity ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([Infinity]).toNumber()), "number");
		});
	});

	describe("`objo( [ NaN ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([NaN]).toNumber()), "number");
		});
	});

	describe("`objo( [ true ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([true]).toNumber()), "number");
		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([{ "hello": "world" }]).toNumber()), "number");
		});
	});

	describe("`objo( [ null ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([null]).toNumber()), "number");
		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([(0, _for2.default)("hello")]).toNumber()), "number");
		});
	});

	describe("`objo( [ undefined ] ).toNumber( )`", function () {
		it("should return number type", function () {
			assert.equal((0, _typeof3.default)(objo([undefined]).toNumber()), "number");
		});
	});

	describe("`objo( [ 'hello' ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo(["hello"]).toBoolean(), true);
		});
	});

	describe("`objo( [ 1 ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([1]).toBoolean(), true);
		});
	});

	describe("`objo( [ Infinity ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([Infinity]).toBoolean(), true);
		});
	});

	describe("`objo( [ NaN ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([NaN]).toBoolean(), true);
		});
	});

	describe("`objo( [ true ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([true]).toBoolean(), true);
		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([{ "hello": "world" }]).toBoolean(), true);
		});
	});

	describe("`objo( [ null ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([null]).toBoolean(), true);
		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([(0, _for2.default)("hello")]).toBoolean(), true);
		});
	});

	describe("`objo( [ undefined ] ).toBoolean( )`", function () {
		it("should return true", function () {
			assert.equal(objo([undefined]).toBoolean(), true);
		});
	});

	describe("`objo( [ 'hello' ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo(["hello"]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ 1 ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([1]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ Infinity ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([Infinity]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ NaN ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([NaN]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ true ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([true]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ { 'hello': 'world' } ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([{ "hello": "world" }]).toObject()[0].hello;

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ null ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([null]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ Symbol.for( 'hello' ) ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([(0, _for2.default)("hello")]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`objo( [ undefined ] ).toObject( )`", function () {
		it("should contain object type", function () {
			var descriptor = objo([undefined]).toObject()[0];

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwib2JqbyIsImRlc2NyaWJlIiwiaXQiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkZWVwRXF1YWwiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImRlc2NyaXB0b3IiLCJ0b09iamVjdCIsImhlbGxvIiwiSW5maW5pdHkiLCJOYU4iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxPQUFPSCxLQUFNLEVBQUUsU0FBUyxPQUFYLEVBQU4sQ0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixRQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxXQUFMLENBQWlCQyxJQUEvQixFQUFxQyxNQUFyQzs7QUFFQVIsVUFBT1MsU0FBUCxDQUFrQkosS0FBS0ssT0FBTCxFQUFsQixFQUFtQyxFQUFFLFNBQVMsT0FBWCxFQUFuQzs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQVAsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9NLEtBQVAsdUJBQXFCSixLQUFNLEVBQUUsU0FBUyxPQUFYLEVBQU4sRUFBNkJTLFFBQTdCLEVBQXJCLEdBQStELFFBQS9EO0FBQ0Es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VUFBT00sS0FBUCxDQUFjLFlBQVlRLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQVgsVUFBVSxxQ0FBVixFQUFpRCxZQUFPO0FBQ3ZEQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeEMsT0FBSVUsYUFBYVosS0FBTSxDQUFFaUIsU0FBRixDQUFOLEVBQXNCSixRQUF0QixHQUFtQyxDQUFuQyxDQUFqQjs7QUFFQWYsVUFBT00sS0FBUCxRQUFxQlEsVUFBckIsdURBQXFCQSxVQUFyQixHQUFpQyxRQUFqQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFVBQVVRLFVBQXhCLEVBQW9DLElBQXBDOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsVUFBVVEsVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFkLFVBQU9NLEtBQVAsQ0FBYyxXQUFXUSxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFlBQVlRLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQSxDQTdXRDs7QUErV0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvYmpvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJvYmpvL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vYmpvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJvYmpvXCI6IFwib2Jqb1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgb2JqbyA9IHJlcXVpcmUoIFwiLi9vYmpvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJvYmpvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBEYXRhIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIkRhdGFcIiApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkYXRhLnZhbHVlT2YoICksIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSwgXCJudW1iZXJcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9Cb29sZWFuKCApLCBcImJvb2xlYW5cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9PYmplY3QoICkuaGVsbG87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAnaGVsbG8nIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIFwiaGVsbG9cIiBdICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAxIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIDEgXSApLnRvU3RyaW5nKCApLCBcInN0cmluZ1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgSW5maW5pdHkgXSApLnRvU3RyaW5nKCApLCBcInN0cmluZ1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgTmFOIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIE5hTiBdICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyB0cnVlIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIHRydWUgXSApLnRvU3RyaW5nKCApLCBcInN0cmluZ1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIG51bGwgXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgbnVsbCBdICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXSApLnRvU3RyaW5nKCApLCBcInN0cmluZ1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAnaGVsbG8nIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIFwiaGVsbG9cIiBdICkudG9OdW1iZXIoICksIFwibnVtYmVyXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAxIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIDEgXSApLnRvTnVtYmVyKCApLCBcIm51bWJlclwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgSW5maW5pdHkgXSApLnRvTnVtYmVyKCApLCBcIm51bWJlclwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgTmFOIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIE5hTiBdICkudG9OdW1iZXIoICksIFwibnVtYmVyXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyB0cnVlIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIHRydWUgXSApLnRvTnVtYmVyKCApLCBcIm51bWJlclwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKS50b051bWJlciggKSwgXCJudW1iZXJcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIG51bGwgXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgbnVsbCBdICkudG9OdW1iZXIoICksIFwibnVtYmVyXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIG9iam8oIFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXSApLnRvTnVtYmVyKCApLCBcIm51bWJlclwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9OdW1iZXIoICksIFwibnVtYmVyXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAnaGVsbG8nIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9iam8oIFsgXCJoZWxsb1wiIF0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAxIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9iam8oIFsgMSBdICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgSW5maW5pdHkgXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb2JqbyggWyBJbmZpbml0eSBdICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgTmFOIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9iam8oIFsgTmFOIF0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyB0cnVlIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9iam8oIFsgdHJ1ZSBdICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb2JqbyggWyB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gXSApLnRvQm9vbGVhbiggKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIG51bGwgXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb2JqbyggWyBudWxsIF0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb2JqbyggWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9iam8oIFsgdW5kZWZpbmVkIF0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggWyAnaGVsbG8nIF0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIFwiaGVsbG9cIiBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIDEgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgMSBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIEluZmluaXR5IF0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIEluZmluaXR5IF0gKS50b09iamVjdCggKVsgMCBdO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkZXNjcmlwdG9yLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ0eXBlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwibmFtZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInZhbHVlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIFsgTmFOIF0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIE5hTiBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIHRydWUgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgdHJ1ZSBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IF0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBvYmpvKCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdICkudG9PYmplY3QoIClbIDAgXS5oZWxsbztcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIG51bGwgXSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IG9iam8oIFsgbnVsbCBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIFN5bWJvbC5mb3IoICdoZWxsbycgKSBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gb2JqbyggWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICkudG9PYmplY3QoIClbIDAgXTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCBbIHVuZGVmaW5lZCBdICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gb2JqbyggWyB1bmRlZmluZWQgXSApLnRvT2JqZWN0KCApWyAwIF07XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
