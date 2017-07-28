"use strict";

/*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "objo",
              			"path": "objo/data.module.js",
              			"file": "data.module.js",
              			"module": "objo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/objo.git",
              			"test": "objo-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Data class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var DATA = Object;
var SERIALIZE_DATA_TAG = "[object Object:Object]";
var META_SERIALIZE_DATA_TAG = Meta.create(DATA).serialize();var

Data = function (_Meta) {(0, _inherits3.default)(Data, _Meta);(0, _createClass3.default)(Data, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === DATA ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, DATA);
		} }]);

	function Data() {(0, _classCallCheck3.default)(this, Data);return (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).call(this,
		DATA, "Data"));
	}(0, _createClass3.default)(Data, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_DATA_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_DATA_TAG ||
				tag === META_SERIALIZE_DATA_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Data;}(Meta);


module.exports = Data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwicmVxdWlyZSIsIkVNUFRZX1NUUklORyIsIkRBVEEiLCJPYmplY3QiLCJTRVJJQUxJWkVfREFUQV9UQUciLCJNRVRBX1NFUklBTElaRV9EQVRBX1RBRyIsImNyZWF0ZSIsInNlcmlhbGl6ZSIsIkRhdGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwidGFnIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLE9BQU9DLFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1DLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxPQUFPQyxNQUFiO0FBQ0EsSUFBTUMscUJBQXFCLHdCQUEzQjtBQUNBLElBQU1DLDBCQUEwQk4sS0FBS08sTUFBTCxDQUFhSixJQUFiLEVBQW9CSyxTQUFwQixFQUFoQyxDOztBQUVNQyxJO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQ0EsaUJBQWFQLElBQWI7QUFDQUgsU0FBS1csVUFBTCxDQUFpQkQsUUFBakIsRUFBMkIsSUFBM0IsQ0FGRDs7QUFJQSxHOztBQUVtQkUsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLFVBQU9kLEtBQUtPLE1BQUwsQ0FBYSxJQUFiLEVBQW1CSixJQUFuQixDQUFQO0FBQ0EsRzs7QUFFRCxpQkFBYztBQUNOQSxNQURNLEVBQ0EsTUFEQTtBQUViLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVVUsUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9SLGtCQUFQO0FBQ0EsRzs7QUFFYVUsSyxFQUFLO0FBQ2xCO0FBQ0NBLFlBQVFWLGtCQUFSO0FBQ0dVLFlBQVFULHVCQUZaOztBQUlBLEcsV0FqQ0tOLEtBQUtnQixNLHNCQUFXLENBQ3JCLE9BQU9kLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUtpQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS2pCLEtBQUtrQixNLHNCQUFXLENBQ3JCLE9BQU9oQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLbUIsTSxzQkFBVyxDQUNyQixPQUFPLENBQVAsQ0FDQSxDLG1CQXhDaUJuQixJOzs7QUE4RG5Cb0IsT0FBT0MsT0FBUCxHQUFpQlosSUFBakIiLCJmaWxlIjoiZGF0YS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvYmpvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJvYmpvL2RhdGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkYXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvYmpvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vYmpvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2Jqby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHREYXRhIGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5jb25zdCBEQVRBID0gT2JqZWN0O1xuY29uc3QgU0VSSUFMSVpFX0RBVEFfVEFHID0gXCJbb2JqZWN0IE9iamVjdDpPYmplY3RdXCI7XG5jb25zdCBNRVRBX1NFUklBTElaRV9EQVRBX1RBRyA9IE1ldGEuY3JlYXRlKCBEQVRBICkuc2VyaWFsaXplKCApO1xuXG5jbGFzcyBEYXRhIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiAoXG5cdFx0XHRpbnN0YW5jZSA9PT0gREFUQSB8fFxuXHRcdFx0TWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIERBVEEgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCApe1xuXHRcdHN1cGVyKCBEQVRBLCBcIkRhdGFcIiApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5PQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfREFUQV9UQUc7XG5cdH1cblxuXHRpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0YWcgPT09IFNFUklBTElaRV9EQVRBX1RBR1xuXHRcdFx0fHwgdGFnID09PSBNRVRBX1NFUklBTElaRV9EQVRBX1RBR1xuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhO1xuIl19
//# sourceMappingURL=data.support.js.map
