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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwib2JqbyIsImRlc2NyaWJlIiwiaXQiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkZWVwRXF1YWwiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImRlc2NyaXB0b3IiLCJ0b09iamVjdCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxtQkFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekMsT0FBSUMsT0FBT0gsS0FBTSxFQUFFLFNBQVMsT0FBWCxFQUFOLENBQVg7O0FBRUFGLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsV0FBTCxDQUFpQkMsSUFBL0IsRUFBcUMsTUFBckM7O0FBRUFSLFVBQU9TLFNBQVAsQ0FBa0JKLEtBQUtLLE9BQUwsRUFBbEIsRUFBbUMsRUFBRSxTQUFTLE9BQVgsRUFBbkM7O0FBRUEsR0FURDtBQVVBLEVBWEQ7O0FBYUFQLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPTSxLQUFQLHVCQUFxQkosS0FBTSxFQUFFLFNBQVMsT0FBWCxFQUFOLEVBQTZCUyxRQUE3QixFQUFyQixHQUErRCxRQUEvRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BUixVQUFVLDRDQUFWLEVBQXdELFlBQU87QUFDOURDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT00sS0FBUCx1QkFBcUJKLEtBQU0sRUFBRSxTQUFTLE9BQVgsRUFBTixFQUE2QlUsUUFBN0IsRUFBckIsR0FBK0QsUUFBL0Q7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVQsVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeENKLFVBQU9NLEtBQVAsdUJBQXFCSixLQUFNLEVBQUUsU0FBUyxPQUFYLEVBQU4sRUFBNkJXLFNBQTdCLEVBQXJCLEdBQWdFLFNBQWhFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFWLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlVLGFBQWFaLEtBQU0sRUFBRSxTQUFTLE9BQVgsRUFBTixFQUE2QmEsUUFBN0IsR0FBeUNDLEtBQTFEOztBQUVBaEIsVUFBT00sS0FBUCxRQUFxQlEsVUFBckIsdURBQXFCQSxVQUFyQixHQUFpQyxRQUFqQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFVBQVVRLFVBQXhCLEVBQW9DLElBQXBDOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsVUFBVVEsVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFkLFVBQU9NLEtBQVAsQ0FBYyxXQUFXUSxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFlBQVlRLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQSxDQWxERDs7QUFvREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvYmpvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJvYmpvL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vYmpvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJvYmpvXCI6IFwib2Jqb1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgb2JqbyA9IHJlcXVpcmUoIFwiLi9vYmpvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJvYmpvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBEYXRhIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IG9iam8oIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIkRhdGFcIiApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkYXRhLnZhbHVlT2YoICksIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9iam8oIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb2JqbyggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBvYmpvKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSwgXCJudW1iZXJcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2Ygb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9Cb29sZWFuKCApLCBcImJvb2xlYW5cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvYmpvKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gb2JqbyggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9PYmplY3QoICkuaGVsbG87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
