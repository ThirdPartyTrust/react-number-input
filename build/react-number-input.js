(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactNumberInput"] = factory(require("react"));
	else
		root["ReactNumberInput"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {//
	// NumberInput formats numbers to comma-separated values after
	// user loses focus of the input.
	//
	// Current dependencies are:
	//   React@0.14-beta3, numeral.js
	//
	// Requires ES5 shim/sham in older browsers.
	//
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.isNumber = isNumber;
	exports.toNumeral = toNumeral;
	exports.parseNumber = parseNumber;
	exports.formatNumber = formatNumber;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _objectAssign = __webpack_require__(1);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _numeral = __webpack_require__(2);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	var _react = __webpack_require__(3);
	
	var DEFAULT_NUMBER_FORMAT = '0,0[.][00]';
	
	/**
	 * Check if a given value is a valid number.
	 *
	 * @param   {any}
	 * @returns {bool} True if given value is a valid number.
	 */
	
	function isNumber(value) {
		return typeof value === 'number' && isFinite(value) && !isNaN(value);
	}
	
	/**
	 * Safe conversion to numeral object. Numeral crashes with the value is
	 * object or function.
	 *
	 * @param   {any}
	 * @returns {numeral}
	 */
	
	function toNumeral(value) {
		var type = typeof value;
	
		if (type === 'object' || type === 'function' || type === 'boolean') {
			return null;
		}
	
		var n = (0, _numeral2['default'])(value);
	
		// numeral.js converts empty strings into 0 for no reason, so if given
		// value was not '0' or 0, treat it as null.
		if (n.value() === 0 && value !== 0 && value !== '0') {
			return null;
		}
	
		// numeral.js can sometimes convert values (like '4.5.2') into NaN
		// and we would rather null than NaN.
		if (isNaN(n.value())) {
			return null;
		}
	
		return n;
	}
	
	/**
	 * Convert given value to a number type. If conversion fails, returns NaN.
	 *
	 * @param   {any}
	 * @returns {Number} NaN if conversion fails.
	 */
	
	function parseNumber(value) {
		var n = toNumeral(value);
		return n ? n.value() : NaN;
	}
	
	/**
	 * Apply number formatting to given number value. If given value cannot be
	 * converted to a number, returns null.
	 *
	 * @param   {any}
	 * @returns {string}
	 */
	
	function formatNumber(value) {
		var format = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_NUMBER_FORMAT : arguments[1];
	
		var n = toNumeral(value);
		return n ? n.format(format) : null;
	}
	
	/**
	 * <NumberInput /> component
	 *
	 * @param   {Number} value
	 * @returns {Component}
	 */
	
	var NumberInput = (function (_Component) {
		_inherits(NumberInput, _Component);
	
		function NumberInput(props) {
			_classCallCheck(this, NumberInput);
	
			_get(Object.getPrototypeOf(NumberInput.prototype), 'constructor', this).call(this, props);
	
			var value = parseNumber(this.props.value);
	
			// focused: keep track of the input's focus state
			// numeral: keep track of the input's current value (numeral object)
			this.state = {
				focused: false,
				value: isNumber(value) ? value : ''
			};
	
			this.onChange = this.onChange.bind(this);
			this.onFocus = this.onFocus.bind(this);
			this.onBlur = this.onBlur.bind(this);
		}
	
		_createClass(NumberInput, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(props) {
				// Prevent changing the value via external entry when editing.
				if (!this.state.focused && 'value' in props) {
					var value = parseNumber(props.value);
					this.setState({ value: isNumber(value) ? value : '' });
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				// focused: check if component is focused after mounting and set state
				this.setState({
					focused: global.document.activeElement === this.refs.input
				});
			}
		}, {
			key: 'onChange',
			value: function onChange(event) {
				var _this = this;
	
				event.persist();
				this.setState({ value: event.target.value }, function () {
					return _this.props.onChange(event);
				});
			}
		}, {
			key: 'onBlur',
			value: function onBlur(event) {
				var _this2 = this;
	
				event.persist();
				var n = toNumeral(event.target.value);
	
				// If given value is lower than minimum, set the value to minimum
				if (n && 'min' in this.props && n.value() < this.props.min) {
					n = toNumeral(this.props.min);
				}
	
				// If given value is greater than maximum, set the value to maximum
				if (n && 'max' in this.props && n.value() > this.props.max) {
					n = toNumeral(this.props.max);
				}
	
				// Set the event target value to corrected value
				event.target.value = n ? n.value() : '';
	
				this.setState({
					focused: false,
					value: n ? n.format(this.props.format) : ''
				}, function () {
					return _this2.props.onBlur(event);
				});
			}
		}, {
			key: 'onFocus',
			value: function onFocus(event) {
				var _this3 = this;
	
				event.persist();
				var n = toNumeral(event.target.value);
				this.setState({
					focused: true,
					value: n ? n.value() : ''
				}, function () {
					return _this3.props.onFocus(event);
				});
			}
		}, {
			key: 'valueAsFormatted',
			value: function valueAsFormatted() {
				var value = this.state.value;
				var n = toNumeral(value);
	
				return n ? n.format(this.props.format) : '';
			}
		}, {
			key: 'render',
			value: function render() {
				var value = this.state.focused ? this.state.value : this.valueAsFormatted();
				return (0, _react.createElement)('input', (0, _objectAssign2['default'])({}, this.props, {
					ref: 'input',
					onChange: this.onChange,
					onFocus: this.onFocus,
					onBlur: this.onBlur,
					value: value
				}));
			}
		}]);
	
		return NumberInput;
	})(_react.Component);
	
	exports['default'] = NumberInput;
	
	NumberInput.propTypes = {
		value: _react.PropTypes.number,
		type: _react.PropTypes.string,
		format: _react.PropTypes.string,
		min: _react.PropTypes.number,
		max: _react.PropTypes.number,
		onFocus: _react.PropTypes.func,
		onBlur: _react.PropTypes.func,
		onChange: _react.PropTypes.func
	};
	
	NumberInput.defaultProps = {
		value: null,
		type: 'tel',
		format: DEFAULT_NUMBER_FORMAT,
		onFocus: function onFocus() {},
		onBlur: function onBlur() {},
		onChange: function onChange() {}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
	 * numeral.js
	 * version : 2.0.1
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
	
	'use strict';
	
	(function () {
	    /************************************
	        Variables
	    ************************************/
	
	    var numeral,
	        _,
	        VERSION = '2.0.1',
	        formats = {},
	        locales = {},
	        defaults = {
	        currentLocale: 'en',
	        zeroFormat: null,
	        nullFormat: null,
	        defaultFormat: '0,0'
	    },
	        options = {
	        currentLocale: defaults.currentLocale,
	        zeroFormat: defaults.zeroFormat,
	        nullFormat: defaults.nullFormat,
	        defaultFormat: defaults.defaultFormat
	    };
	
	    /************************************
	        Constructors
	    ************************************/
	
	    // Numeral prototype object
	    function Numeral(input, number) {
	        this._input = input;
	
	        this._value = number;
	    }
	
	    numeral = function (input) {
	        var value, kind, unformatFunction, regexp;
	
	        if (numeral.isNumeral(input)) {
	            value = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            value = 0;
	        } else if (input === null || _.isNaN(input)) {
	            value = null;
	        } else if (typeof input === 'string') {
	            if (options.zeroFormat && input === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                for (kind in formats) {
	                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;
	
	                    if (regexp && input.match(regexp)) {
	                        unformatFunction = formats[kind].unformat;
	
	                        break;
	                    }
	                }
	
	                unformatFunction = unformatFunction || numeral._.stringToNumber;
	
	                value = unformatFunction(input);
	            }
	        } else {
	            value = Number(input) || null;
	        }
	
	        return new Numeral(input, value);
	    };
	
	    // version number
	    numeral.version = VERSION;
	
	    // compare numeral object
	    numeral.isNumeral = function (obj) {
	        return obj instanceof Numeral;
	    };
	
	    // helper functions
	    numeral._ = _ = {
	        // formats numbers separators, decimals places, signs, abbreviations
	        numberToFormat: function numberToFormat(value, format, roundingFunction) {
	            var locale = locales[numeral.options.currentLocale],
	                negP = false,
	                signed = false,
	                optDec = false,
	                abbr = '',
	                trillion = 1000000000000,
	                billion = 1000000000,
	                million = 1000000,
	                thousand = 1000,
	                abbrForce,
	                // force abbreviation
	            abs,
	                min,
	                max,
	                power,
	                int,
	                precision,
	                thousands,
	                decimal = '',
	                neg = false;
	
	            // make sure we never format a null value
	            value = value || 0;
	
	            abs = Math.abs(value);
	
	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (numeral._.includes(format, '(')) {
	                negP = true;
	                format = format.slice(1, -1);
	            } else if (numeral._.includes(format, '+')) {
	                signed = true;
	                format = format.replace(/\+/g, '');
	            }
	
	            // see if abbreviation is wanted
	            if (numeral._.includes(format, 'a')) {
	                abbrForce = format.match(/a(k|m|b|t)?/);
	
	                abbrForce = abbrForce ? abbrForce[1] : false;
	
	                // check for space before abbreviation
	                if (numeral._.includes(format, ' a')) {
	                    abbr = ' ';
	                }
	
	                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');
	
	                if (abs >= trillion && !abbrForce || abbrForce === 't') {
	                    // trillion
	                    abbr += locale.abbreviations.trillion;
	                    value = value / trillion;
	                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
	                    // billion
	                    abbr += locale.abbreviations.billion;
	                    value = value / billion;
	                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
	                    // million
	                    abbr += locale.abbreviations.million;
	                    value = value / million;
	                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
	                    // thousand
	                    abbr += locale.abbreviations.thousand;
	                    value = value / thousand;
	                }
	            }
	
	            if (numeral._.includes(format, '[.]')) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }
	
	            int = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');
	
	            if (precision) {
	                if (numeral._.includes(precision, '[')) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    decimal = numeral._.toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
	                } else {
	                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
	                }
	
	                int = decimal.split('.')[0];
	
	                if (numeral._.includes(decimal, '.')) {
	                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
	                } else {
	                    decimal = '';
	                }
	
	                if (optDec && Number(decimal.slice(1)) === 0) {
	                    decimal = '';
	                }
	            } else {
	                int = numeral._.toFixed(value, null, roundingFunction);
	            }
	
	            // format number
	            if (numeral._.includes(int, '-')) {
	                int = int.slice(1);
	                neg = true;
	            }
	
	            if (thousands > -1) {
	                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
	            }
	
	            if (format.indexOf('.') === 0) {
	                int = '';
	            }
	
	            return (negP && neg ? '(' : '') + (!negP && neg ? '-' : '') + (!neg && signed ? '+' : '') + int + decimal + (abbr ? abbr : '') + (negP && neg ? ')' : '');
	        },
	        // unformats numbers separators, decimals places, signs, abbreviations
	        stringToNumber: function stringToNumber(string) {
	            var locale = locales[options.currentLocale],
	                stringOriginal = string,
	                abbreviations = {
	                thousand: 3,
	                million: 6,
	                billion: 9,
	                trillion: 12
	            },
	                abbreviation,
	                value,
	                i,
	                regexp;
	
	            if (options.zeroFormat && string === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                value = 1;
	
	                if (locale.delimiters.decimal !== '.') {
	                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
	                }
	
	                for (abbreviation in abbreviations) {
	                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');
	
	                    if (stringOriginal.match(regexp)) {
	                        value *= Math.pow(10, abbreviations[abbreviation]);
	                        break;
	                    }
	                }
	
	                // check for negative number
	                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;
	
	                // remove non numbers
	                string = string.replace(/[^0-9\.]+/g, '');
	
	                value *= Number(string);
	            }
	
	            return value;
	        },
	        isNaN: (function (_isNaN) {
	            function isNaN(_x) {
	                return _isNaN.apply(this, arguments);
	            }
	
	            isNaN.toString = function () {
	                return _isNaN.toString();
	            };
	
	            return isNaN;
	        })(function (value) {
	            return typeof value === 'number' && isNaN(value);
	        }),
	        includes: function includes(string, search) {
	            return string.indexOf(search) !== -1;
	        },
	        reduce: function reduce(array, callback /*, initialValue*/) {
	            if (this === null) {
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }
	
	            if (typeof callback !== 'function') {
	                throw new TypeError(callback + ' is not a function');
	            }
	
	            var t = Object(array),
	                len = t.length >>> 0,
	                k = 0,
	                value;
	
	            if (arguments.length === 3) {
	                value = arguments[2];
	            } else {
	                while (k < len && !(k in t)) {
	                    k++;
	                }
	
	                if (k >= len) {
	                    throw new TypeError('Reduce of empty array with no initial value');
	                }
	
	                value = t[k++];
	            }
	            for (; k < len; k++) {
	                if (k in t) {
	                    value = callback(value, t[k], k, t);
	                }
	            }
	            return value;
	        },
	        /**
	         * Computes the multiplier necessary to make x >= 1,
	         * effectively eliminating miscalculations caused by
	         * finite precision.
	         */
	        multiplier: function multiplier(x) {
	            var parts = x.toString().split('.');
	
	            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
	        },
	        /**
	         * Given a variable number of arguments, returns the maximum
	         * multiplier that must be used to normalize an operation involving
	         * all of them.
	         */
	        correctionFactor: function correctionFactor() {
	            var args = Array.prototype.slice.call(arguments);
	
	            return args.reduce(function (accum, next) {
	                var mn = _.multiplier(next);
	                return accum > mn ? accum : mn;
	            }, 1);
	        },
	        /**
	         * Implementation of toFixed() that treats floats more like decimals
	         *
	         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	         * problems for accounting- and finance-related software.
	         */
	        toFixed: function toFixed(value, maxDecimals, roundingFunction, optionals) {
	            var splitValue = value.toString().split('.'),
	                minDecimals = maxDecimals - (optionals || 0),
	                boundedPrecision,
	                optionalsRegExp,
	                power,
	                output;
	
	            // Use the smallest precision value possible to avoid errors from floating point representation
	            if (splitValue.length === 2) {
	                boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
	            } else {
	                boundedPrecision = minDecimals;
	            }
	
	            power = Math.pow(10, boundedPrecision);
	
	            //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
	            // Multiply up by precision, round accurately, then divide and use native toFixed():
	            output = (roundingFunction(value * power) / power).toFixed(boundedPrecision);
	
	            if (optionals > maxDecimals - boundedPrecision) {
	                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
	                output = output.replace(optionalsRegExp, '');
	            }
	
	            return output;
	        }
	    };
	
	    // avaliable options
	    numeral.options = options;
	
	    // avaliable formats
	    numeral.formats = formats;
	
	    // avaliable formats
	    numeral.locales = locales;
	
	    // This function sets the current locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    numeral.locale = function (key) {
	        if (!key) {
	            return options.currentLocale;
	        }
	
	        options.currentLocale = key.toLowerCase();
	
	        return numeral;
	    };
	
	    // This function provides access to the loaded locale data.  If
	    // no arguments are passed in, it will simply return the current
	    // global locale object.
	    numeral.localeData = function (key) {
	        if (!key) {
	            return locales[options.currentLocale];
	        }
	
	        key = key.toLowerCase();
	
	        if (!locales[key]) {
	            throw new Error('Unknown locale : ' + key);
	        }
	
	        return locales[key];
	    };
	
	    numeral.reset = function () {
	        for (var property in defaults) {
	            options[property] = defaults[property];
	        }
	    };
	
	    numeral.zeroFormat = function (format) {
	        options.zeroFormat = typeof format === 'string' ? format : null;
	    };
	
	    numeral.nullFormat = function (format) {
	        options.nullFormat = typeof format === 'string' ? format : null;
	    };
	
	    numeral.defaultFormat = function (format) {
	        options.defaultFormat = typeof format === 'string' ? format : '0.0';
	    };
	
	    numeral.register = function (type, name, format) {
	        name = name.toLowerCase();
	
	        if (this[type + 's'][name]) {
	            throw new TypeError(name + ' ' + type + ' already registered.');
	        }
	
	        this[type + 's'][name] = format;
	    };
	
	    numeral.validate = function (val, culture) {
	        var _decimalSep, _thousandSep, _currSymbol, _valArray, _abbrObj, _thousandRegEx, localeData, temp;
	
	        //coerce val to string
	        if (typeof val !== 'string') {
	            val += '';
	
	            if (console.warn) {
	                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
	            }
	        }
	
	        //trim whitespaces from either sides
	        val = val.trim();
	
	        //if val is just digits return true
	        if (!!val.match(/^\d+$/)) {
	            return true;
	        }
	
	        //if val is empty return false
	        if (val === '') {
	            return false;
	        }
	
	        //get the decimal and thousands separator from numeral.localeData
	        try {
	            //check if the culture is understood by numeral. if not, default it to current locale
	            localeData = numeral.localeData(culture);
	        } catch (e) {
	            localeData = numeral.localeData(numeral.locale());
	        }
	
	        //setup the delimiters and currency symbol based on culture/locale
	        _currSymbol = localeData.currency.symbol;
	        _abbrObj = localeData.abbreviations;
	        _decimalSep = localeData.delimiters.decimal;
	        if (localeData.delimiters.thousands === '.') {
	            _thousandSep = '\\.';
	        } else {
	            _thousandSep = localeData.delimiters.thousands;
	        }
	
	        // validating currency symbol
	        temp = val.match(/^[^\d]+/);
	        if (temp !== null) {
	            val = val.substr(1);
	            if (temp[0] !== _currSymbol) {
	                return false;
	            }
	        }
	
	        //validating abbreviation symbol
	        temp = val.match(/[^\d]+$/);
	        if (temp !== null) {
	            val = val.slice(0, -1);
	            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
	                return false;
	            }
	        }
	
	        _thousandRegEx = new RegExp(_thousandSep + '{2}');
	
	        if (!val.match(/[^\d.,]/g)) {
	            _valArray = val.split(_decimalSep);
	            if (_valArray.length > 2) {
	                return false;
	            } else {
	                if (_valArray.length < 2) {
	                    return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx);
	                } else {
	                    if (_valArray[0].length === 1) {
	                        return !!_valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
	                    } else {
	                        return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
	                    }
	                }
	            }
	        }
	
	        return false;
	    };
	
	    /************************************
	        Numeral Prototype
	    ************************************/
	
	    numeral.fn = Numeral.prototype = {
	        clone: function clone() {
	            return numeral(this);
	        },
	        format: function format(inputString, roundingFunction) {
	            var value = this._value,
	                format = inputString || options.defaultFormat,
	                kind,
	                output,
	                formatFunction;
	
	            // make sure we have a roundingFunction
	            roundingFunction = roundingFunction || Math.round;
	
	            // format based on value
	            if (value === 0 && options.zeroFormat !== null) {
	                output = options.zeroFormat;
	            } else if (value === null && options.nullFormat !== null) {
	                output = options.nullFormat;
	            } else {
	                for (kind in formats) {
	                    if (format.match(formats[kind].regexps.format)) {
	                        formatFunction = formats[kind].format;
	
	                        break;
	                    }
	                }
	
	                formatFunction = formatFunction || numeral._.numberToFormat;
	
	                output = formatFunction(value, format, roundingFunction);
	            }
	
	            return output;
	        },
	        value: function value() {
	            return this._value;
	        },
	        input: function input() {
	            return this._input;
	        },
	        set: function set(value) {
	            this._value = Number(value);
	
	            return this;
	        },
	        add: function add(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum + Math.round(corrFactor * curr);
	            }
	
	            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
	
	            return this;
	        },
	        subtract: function subtract(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum - Math.round(corrFactor * curr);
	            }
	
	            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
	
	            return this;
	        },
	        multiply: function multiply(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
	            }
	
	            this._value = _.reduce([this._value, value], cback, 1);
	
	            return this;
	        },
	        divide: function divide(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
	            }
	
	            this._value = _.reduce([this._value, value], cback);
	
	            return this;
	        },
	        difference: function difference(value) {
	            return Math.abs(numeral(this._value).subtract(value).value());
	        }
	    };
	
	    /************************************
	        Default Locale && Format
	    ************************************/
	
	    numeral.register('locale', 'en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function ordinal(number) {
	            var b = number % 10;
	            return ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	
	    /************************************
	        Exposing Numeral
	    ************************************/
	
	    // CommonJS module is defined
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = numeral;
	    }
	
	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `numeral` as a global object via a string identifier,
	        // for Closure Compiler 'advanced' mode
	        this['numeral'] = numeral;
	    }
	
	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return numeral;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(undefined);
	
	/*
	 * numeral.js format configuration
	 * format : bytes
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2),
	        decimal = {
	        base: 1000,
	        suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	    },
	        binary = {
	        base: 1024,
	        suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
	    };
	
	    numeral.register('format', 'bytes', {
	        regexps: {
	            format: /([0\s]i?b)/,
	            unformat: new RegExp('(' + decimal.suffixes.concat(binary.suffixes).join('|') + ')')
	        },
	        format: function format(value, _format, roundingFunction) {
	            var output,
	                bytes = numeral._.includes(_format, 'ib') ? binary : decimal,
	                suffix = numeral._.includes(_format, ' b') || numeral._.includes(_format, ' ib') ? ' ' : '',
	                power,
	                min,
	                max;
	
	            // check for space before
	            _format = _format.replace(/\s?i?b/, '');
	
	            for (power = 0; power <= bytes.suffixes.length; power++) {
	                min = Math.pow(bytes.base, power);
	                max = Math.pow(bytes.base, power + 1);
	
	                if (value === null || value === 0 || value >= min && value < max) {
	                    suffix += bytes.suffixes[power];
	
	                    if (min > 0) {
	                        value = value / min;
	                    }
	
	                    break;
	                }
	            }
	
	            output = numeral._.numberToFormat(value, _format, roundingFunction);
	
	            return output + suffix;
	        },
	        unformat: function unformat(string) {
	            var value = numeral._.stringToNumber(string),
	                power,
	                bytesMultiplier;
	
	            if (value) {
	                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
	                    if (numeral._.includes(string, decimal.suffixes[power])) {
	                        bytesMultiplier = Math.pow(decimal.base, power);
	
	                        break;
	                    }
	
	                    if (numeral._.includes(string, binary.suffixes[power])) {
	                        bytesMultiplier = Math.pow(binary.base, power);
	
	                        break;
	                    }
	                }
	
	                value *= bytesMultiplier || 1;
	            }
	
	            return value;
	        }
	    });
	})();
	
	/*
	 * numeral.js format configuration
	 * format : currency
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2);
	
	    numeral.register('format', 'currency', {
	        regexps: {
	            format: /(\$)/
	        },
	        format: function format(value, _format2, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                symbolIndex = _format2.indexOf('$'),
	                openParenIndex = _format2.indexOf('('),
	                minusSignIndex = _format2.indexOf('-'),
	                space = numeral._.includes(_format2, ' $') || numeral._.includes(_format2, '$ ') ? ' ' : '',
	                spliceIndex,
	                output;
	
	            // strip format of spaces and $
	            _format2 = _format2.replace(/\s?\$\s?/, '');
	
	            // format the number
	            output = numeral._.numberToFormat(value, _format2, roundingFunction);
	
	            // position the symbol
	            if (symbolIndex <= 1) {
	                if (numeral._.includes(output, '(') || numeral._.includes(output, '-')) {
	                    output = output.split('');
	
	                    spliceIndex = symbolIndex < openParenIndex || symbolIndex < minusSignIndex ? 0 : 1;
	
	                    output.splice(spliceIndex, 0, locale.currency.symbol + space);
	
	                    output = output.join('');
	                } else {
	                    output = locale.currency.symbol + space + output;
	                }
	            } else {
	                if (numeral._.includes(output, ')')) {
	                    output = output.split('');
	
	                    output.splice(-1, 0, space + locale.currency.symbol);
	
	                    output = output.join('');
	                } else {
	                    output = output + space + locale.currency.symbol;
	                }
	            }
	
	            return output;
	        }
	    });
	})();
	
	/*
	 * numeral.js format configuration
	 * format : exponential
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2);
	
	    numeral.register('format', 'exponential', {
	        regexps: {
	            format: /(e\+|e-)/,
	            unformat: /(e\+|e-)/
	        },
	        format: function format(value, _format3, roundingFunction) {
	            var output,
	                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
	                parts = exponential.split('e');
	
	            _format3 = _format3.replace(/e[\+|\-]{1}0/, '');
	
	            output = numeral._.numberToFormat(Number(parts[0]), _format3, roundingFunction);
	
	            return output + 'e' + parts[1];
	        },
	        unformat: function unformat(string) {
	            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
	                value = Number(parts[0]),
	                power = Number(parts[1]);
	
	            power = numeral._.includes(string, 'e-') ? power *= -1 : power;
	
	            function cback(accum, curr, currI, O) {
	                var corrFactor = numeral._.correctionFactor(accum, curr),
	                    num = accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);
	                return num;
	            }
	
	            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
	        }
	    });
	})();
	
	/*
	 * numeral.js format configuration
	 * format : ordinal
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2);
	
	    // get numeral from environment
	    if (typeof window !== 'undefined' && this.numeral) {
	        // Browser
	        numeral = this.numeral;
	    } else if (typeof module !== 'undefined' && module.exports) {
	        // Node
	        numeral = __webpack_require__(2);
	    }
	
	    numeral.register('format', 'ordinal', {
	        regexps: {
	            format: /(o)/
	        },
	        format: function format(value, _format4, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                output,
	                ordinal = numeral._.includes(_format4, ' o') ? ' ' : '';
	
	            // check for space before
	            _format4 = _format4.replace(/\s?o/, '');
	
	            ordinal += locale.ordinal(value);
	
	            output = numeral._.numberToFormat(value, _format4, roundingFunction);
	
	            return output + ordinal;
	        }
	    });
	})();
	
	/*
	 * numeral.js format configuration
	 * format : percentage
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2);
	
	    numeral.register('format', 'percentage', {
	        regexps: {
	            format: /(%)/,
	            unformat: /(%)/
	        },
	        format: function format(value, _format5, roundingFunction) {
	            var space = numeral._.includes(_format5, ' %') ? ' ' : '',
	                output;
	
	            value = value * 100;
	
	            // check for space before %
	            _format5 = _format5.replace(/\s?\%/, '');
	
	            output = numeral._.numberToFormat(value, _format5, roundingFunction);
	
	            if (numeral._.includes(output, ')')) {
	                output = output.split('');
	
	                output.splice(-1, 0, space + '%');
	
	                output = output.join('');
	            } else {
	                output = output + space + '%';
	            }
	
	            return output;
	        },
	        unformat: function unformat(string) {
	            return numeral._.stringToNumber(string) * 0.01;
	        }
	    });
	})();
	
	/*
	 * numeral.js format configuration
	 * format : time
	 * author : Adam Draper : https://github.com/adamwdraper
	 */
	(function () {
	    var numeral = typeof window !== 'undefined' && window.numeral ? window.numeral : __webpack_require__(2);
	
	    numeral.register('format', 'time', {
	        regexps: {
	            format: /(:)/,
	            unformat: /(:)/
	        },
	        format: function format(value, _format6, roundingFunction) {
	            var hours = Math.floor(value / 60 / 60),
	                minutes = Math.floor((value - hours * 60 * 60) / 60),
	                seconds = Math.round(value - hours * 60 * 60 - minutes * 60);
	
	            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	        },
	        unformat: function unformat(string) {
	            var timeArray = string.split(':'),
	                seconds = 0;
	
	            // turn hours and minutes into seconds and add them all up
	            if (timeArray.length === 3) {
	                // hours
	                seconds = seconds + Number(timeArray[0]) * 60 * 60;
	                // minutes
	                seconds = seconds + Number(timeArray[1]) * 60;
	                // seconds
	                seconds = seconds + Number(timeArray[2]);
	            } else if (timeArray.length === 2) {
	                // minutes
	                seconds = seconds + Number(timeArray[0]) * 60;
	                // seconds
	                seconds = seconds + Number(timeArray[1]);
	            }
	            return Number(seconds);
	        }
	    });
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-number-input.map