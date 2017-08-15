(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-deltas"] = factory();
	else
		root["mojs-util-deltas"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(6), __webpack_require__(9), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'), require('mojs-timeline'), require('mojs-util-class-proto'), require('mojs-util-tweenable'), require('mojs-util-motion-path'), require('mojs-util-delta'), require('mojs-util-separate-tween-options'), require('mojs-util-parse-static-property'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween, global.mojsTimeline, global.mojsUtilClassProto, global.mojsUtilTweenable, global.mojsUtilMotionPath, global.mojsUtilDelta, global.mojsUtilSeparateTweenOptions, global.mojsUtilParseStaticProperty);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(6), __webpack_require__(9), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween, global.mojsTimeline, global.mojsUtilClassProto, global.mojsUtilTweenable, global.mojsUtilMotionPath, global.mojsUtilDelta, global.mojsUtilSeparateTweenOptions, global.mojsUtilParseStaticProperty);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween, _mojsTimeline, _mojsUtilClassProto, _mojsUtilTweenable, _mojsUtilMotionPath, _mojsUtilDelta, _mojsUtilSeparateTweenOptions, _mojsUtilParseStaticProperty) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Deltas = undefined;

    var _mojsTween2 = _interopRequireDefault(_mojsTween);

    var _mojsTimeline2 = _interopRequireDefault(_mojsTimeline);

    var _mojsUtilTweenable2 = _interopRequireDefault(_mojsUtilTweenable);

    var _mojsUtilMotionPath2 = _interopRequireDefault(_mojsUtilMotionPath);

    var _mojsUtilDelta2 = _interopRequireDefault(_mojsUtilDelta);

    var _mojsUtilSeparateTweenOptions2 = _interopRequireDefault(_mojsUtilSeparateTweenOptions);

    var _mojsUtilParseStaticProperty2 = _interopRequireDefault(_mojsUtilParseStaticProperty);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------- */
    /* The `Deltas` class  */
    /* ------------------- */

    var DeltasClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilTweenable2.default);
    var Super = _mojsUtilTweenable2.default.__mojsClass;

    /**
     * `init` - function init the class.
     *
     * @extends @Tweenable
     * @public
     */
    DeltasClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // super call
      Super.init.call(this, o);
      // clone the options
      var options = Object.assign({}, o);
      // get `timeline` options and remove them immediately
      var timelineOptions = options.timeline;
      delete options.timeline;

      // get `customProperties` options and remove them immediately
      this._customProperties = options.customProperties || {};
      this._pipe = this._customProperties.pipe || function () {};
      this._render = this._customProperties.render || function () {};
      this._pipeObj = this._customProperties.pipeObj || {};
      delete options.customProperties;

      // save the el object and remove it immediately
      this._el = options.el || {};
      delete options.el;
      delete options.parent; // TODO: cover!
      // create support object for complex properties
      this._supportProps = {};
      // set up the main `tween`
      this._setupTween(options);
      // set up the `timeline`
      this._setupTimeline(timelineOptions);
      // parse deltas from options that left so far
      this._parseProperties(options);
    };

    /**
     * `_setupTween` - function to set up main tween.
     *
     * @param {Object} Options.
     */
    DeltasClass._setupTween = function () {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var support = {
        props: this._supportProps,
        pipeObj: this._pipeObj
      };
      // separate main tween options
      var tweenOptions = (0, _mojsUtilSeparateTweenOptions2.default)(options) || {};
      // create tween
      this.tween = new _mojsTween2.default(Object.assign({}, tweenOptions, {
        index: this.index,
        // update plain deltas on update
        // and call the previous `onUpdate` if present
        onUpdate: function (ep, p, isForward) {
          // update plain deltas
          _this._upd_deltas(ep, p, isForward);
          // pipe
          _this._pipe(_this._el, support, ep, p, isForward);
          // render
          _this._render(_this._el, support, ep, p, isForward);
          // envoke onUpdate if present
          if (tweenOptions.onUpdate !== undefined) {
            tweenOptions.onUpdate(ep, p, isForward);
          }
        }
      }));
    };

    /**
     * `_setupTimeline` - function to set up main timeline.
     *
     * @param {Object} Timeline options.
     */
    DeltasClass._setupTimeline = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.timeline = new _mojsTimeline2.default(Object.assign({}, { index: this.index }, options, {
        onUpdate: function (ep, p, isForward) {
          // envoke onUpdate if present
          if (options.onUpdate !== undefined) {
            options.onUpdate(ep, p, isForward);
          }
        }
      }));
      this.timeline.add(this.tween);
    };

    /**
     * `_parseProperties` - function to parse deltas and static properties.
     *
     * @param {Object} Options.
     */
    DeltasClass._parseProperties = function (options) {
      // deltas that have tween
      this._tweenDeltas = [];
      // deltas that don't have tween
      this._plainDeltas = [];
      // static properties
      this._staticProps = {};
      var optionsKeys = Object.keys(options);
      // loop thru options and create deltas with objects
      for (var i = 0; i < optionsKeys.length; i++) {
        var key = optionsKeys[i];
        var value = options[key];
        // if value is tatic save it to static props
        if (typeof value !== 'object') {
          // find out property `el`, it can be `supportProps` if the `isSkipRender`
          // is set for the property in the `customProperties`
          var custom = this._customProperties[key];
          var target = custom && custom.isSkipRender ? this._supportProps : this._el;

          var property = (0, _mojsUtilParseStaticProperty2.default)(key, value, this._customProperties, this.index, this._totalItemsInStagger);
          this._staticProps[key] = property;
          target[key] = property;
          continue;
        }

        // check the delta type
        var delta = void 0;
        if (value.path !== undefined) {
          delta = new _mojsUtilMotionPath2.default(Object.assign({}, { el: this._el }, value, {
            supportProps: this._supportProps,
            customProperties: this._customProperties,
            unit: value.unit,
            property: key,
            index: this.index
          }));
        } else {
          // if value is not motion path, create delta object
          delta = new _mojsUtilDelta2.default({
            key: key,
            target: this._el,
            supportProps: this._supportProps,
            object: value,
            customProperties: this._customProperties,
            index: this.index
          });
        }

        // check if delta has own tween and add to `_tweenDeltas`
        if (delta.tween) {
          this._tweenDeltas.push(delta);
          // else add to plain deltas
        } else {
          this._plainDeltas.push(delta);
        }
      }
      // add tween deltas to the timeline
      this.timeline.add(this._tweenDeltas);
    };

    /**
     * `_upd_deltas` - function to update the plain deltas.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltasClass._upd_deltas = function (ep, p, isForward) {
      // update plain deltas
      for (var i = 0; i < this._plainDeltas.length; i++) {
        this._plainDeltas[i].update(ep, p, isForward);
      }
    };

    var Deltas = exports.Deltas = (0, _mojsUtilClassProto.createClass)(DeltasClass);

    exports.default = Deltas;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-separate-tween-options"] = factory();
	else
		root["mojs-util-separate-tween-options"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateTweenOptions = undefined;


    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var separateTweenOptions = exports.separateTweenOptions = function (object) {
      var tweenOptions = void 0;
      var defaultKeys = Object.keys(_mojsTween.tweenDefaults);
      for (var i = 0; i < defaultKeys.length; i++) {
        var option = defaultKeys[i];

        if (object[option] !== undefined) {
          tweenOptions = tweenOptions || {};
          tweenOptions[option] = object[option];
          delete object[option];
        }
      }

      return tweenOptions;
    };

    exports.default = separateTweenOptions;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-delta"] = factory();
	else
		root["mojs-util-delta"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-color-to-rgba"] = factory();
	else
		root["mojs-util-parse-color-to-rgba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    /**
     * DOMDiv - and element that is added to DOM for enviroment test purposes.
     */
    var DOMDiv = document.createElement('div');
    document.body.append(DOMDiv);

    /**
     * `normalizeHex` - Function to normalize part of a HEX color to FF format,
     *                  if one character passed, return doubled version of it.
     *
     * @param {Steing} Color part to normalize.
     * @param {Steing} Normalized part of a color.
     */
    var normalizeHex = function (string) {
      // eslint-disable-line arrow-body-style
      return string.length === 2 ? string : string + string;
    };

    /**
     * `parseHEXColor` - function to parse #HEX colors.
     */
    var parseHEXColor = function (color) {
      var result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
      if (result) {
        return {
          r: parseInt(normalizeHex(result[1]), 16),
          g: parseInt(normalizeHex(result[2]), 16),
          b: parseInt(normalizeHex(result[3]), 16),
          a: 1
        };
      }
    };

    /**
     * Function to parse a color string to color object.
     *
     * @param {String} String to parse.
     * @returns {Object} Color object.
     */
    var parseColorToRgba = exports.parseColorToRgba = function (color) {
      var originColor = color;
      // #HEX
      if (color[0] === '#') {
        return parseHEXColor(color);
      }

      var isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
      // if color is not `rgb`, it is a shortcut (`cyan`, `hotpink` etc)
      // so we need to set the color on DOM element and get the calculated color
      if (!isRgb) {
        DOMDiv.style.color = 'black';
        DOMDiv.style.color = color;
        color = window.getComputedStyle(DOMDiv).color;
      }

      // parse `rgb` color
      var regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
      var regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
      var result = new RegExp(regexString1 + regexString2, 'gi').exec(color);
      var a = parseFloat(result[4] || 1);

      if (result) {
        var r = parseInt(result[1], 10);
        var g = parseInt(result[2], 10);
        var b = parseInt(result[3], 10);
        // if origin color was not black but black
        // returned from the DOM - that's an error
        return originColor !== 'black' && r === 0 && g === 0 && b === 0 && a === 1 ? { isError: true } : { r: r, g: g, b: b, a: a };
      }

      return {
        isError: true
      };
    };

    exports.default = parseColorToRgba;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-units-regexp"] = factory();
	else
		root["mojs-util-units-regexp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * The regexp intended to parse all supported `units`.
     */
    var unitsRegexp = exports.unitsRegexp = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg|fr/gim;

    exports.default = unitsRegexp;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-parse-color-to-rgba'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilParseColorToRgba);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilParseColorToRgba);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilParseColorToRgba) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseColor = undefined;

    var _mojsUtilParseColorToRgba2 = _interopRequireDefault(_mojsUtilParseColorToRgba);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /**
     * Function parse color delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseColor = exports.parseColor = function (name, object) {
      var start = (0, _mojsUtilParseColorToRgba2.default)(object.start);
      var end = (0, _mojsUtilParseColorToRgba2.default)(object.end);

      var delta = {
        r: end.r - start.r,
        g: end.g - start.g,
        b: end.b - start.b,
        a: end.a - start.a
      };

      return Object.assign({}, object, {
        type: 'color',
        name: name,
        start: start,
        end: end,
        delta: delta
      });
    };

    exports.default = parseColor;
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-units-regexp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilUnitsRegexp);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilUnitsRegexp);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilUnitsRegexp) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseUnit = undefined;

    var _mojsUtilUnitsRegexp2 = _interopRequireDefault(_mojsUtilUnitsRegexp);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var getRegexpUnit = function (value) {
      if (typeof value !== 'string') {
        return undefined;
      }
      var valueMatch = value.match(_mojsUtilUnitsRegexp2.default);

      return valueMatch !== null ? valueMatch[0] : undefined;
    };

    /**
     * Function parse number delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseUnit = function (name, object) {
      var result = Object.assign({}, object, { type: 'unit', name: name });
      // get start and end units
      var startUnit = getRegexpUnit(result.start);
      var endUnit = getRegexpUnit(result.end);
      // get the unit for both with priority to startUnit
      result.unit = endUnit || startUnit || 'px';
      // parse the values in case we have strings there
      result.start = parseFloat(result.start);
      result.end = parseFloat(result.end);
      // calculate delta
      result.delta = result.end - result.start;

      return result;
    };

    exports.parseUnit = parseUnit;
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function parse number delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseNumber = function (name, object) {
      var result = Object.assign({ type: 'number', name: name }, object);
      // parse the values in case we have strings there
      result.start = parseFloat(result.start);
      result.end = parseFloat(result.end);
      // calculate delta
      result.delta = result.end - result.start;

      return result;
    };

    exports.parseNumber = parseNumber;
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-easing'), require('mojs-util-separate-tween-options'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsEasing, global.mojsUtilSeparateTweenOptions);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsEasing, global.mojsUtilSeparateTweenOptions);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsEasing, _mojsUtilSeparateTweenOptions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.splitDelta = undefined;

    var _mojsUtilSeparateTweenOptions2 = _interopRequireDefault(_mojsUtilSeparateTweenOptions);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var splitDelta = exports.splitDelta = function (object) {
      var obj = Object.assign({}, object);
      // save curve because we need it directly on the
      // parsed `delta` object vs `tween`
      var curve = obj.curve !== undefined ? (0, _mojsEasing.parseEasing)(obj.curve) : undefined;
      delete obj.curve;
      // extract tween options
      var tweenOptions = (0, _mojsUtilSeparateTweenOptions2.default)(obj);

      var start = void 0;
      var end = void 0;
      // if `{ from: x, to: x }` syntax used
      if (obj.from != undefined && obj.to != undefined) {
        // eslint-disable-line eqeqeq
        start = obj.from;
        end = obj.to;
        // else `{ from: to }` syntax used
      } else {
        // at this point only the `start` -> `end` should left get the values
        start = Object.keys(obj)[0];
        end = obj[start];
      }

      return { start: start, end: end, curve: curve, tweenOptions: tweenOptions };
    };

    exports.default = splitDelta;
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-separate-tween-options"] = factory();
	else
		root["mojs-util-separate-tween-options"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateTweenOptions = undefined;


    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var separateTweenOptions = exports.separateTweenOptions = function (object) {
      var tweenOptions = void 0;
      var defaultKeys = Object.keys(_mojsTween.tweenDefaults);
      for (var i = 0; i < defaultKeys.length; i++) {
        var option = defaultKeys[i];

        if (object[option] !== undefined) {
          tweenOptions = tweenOptions || {};
          tweenOptions[option] = object[option];
          delete object[option];
        }
      }

      return tweenOptions;
    };

    exports.default = separateTweenOptions;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(1), __webpack_require__(0), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-tween'), require('mojs-util-parse-stagger-property'), require('mojs-util-units-regexp'), require('mojs-util-parse-color-to-rgba'), require('./split-delta.babel.js'), require('./parse-number.babel.js'), require('./parse-unit.babel.js'), require('./parse-color.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsTween, global.mojsUtilParseStaggerProperty, global.mojsUtilUnitsRegexp, global.mojsUtilParseColorToRgba, global.splitDeltaBabel, global.parseNumberBabel, global.parseUnitBabel, global.parseColorBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(1), __webpack_require__(0), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsTween, global.mojsUtilParseStaggerProperty, global.mojsUtilUnitsRegexp, global.mojsUtilParseColorToRgba, global.splitDeltaBabel, global.parseNumberBabel, global.parseUnitBabel, global.parseColorBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsTween, _mojsUtilParseStaggerProperty, _mojsUtilUnitsRegexp, _mojsUtilParseColorToRgba, _splitDeltaBabel, _parseNumberBabel, _parseUnitBabel, _parseColorBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Delta = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsTween2 = _interopRequireDefault(_mojsTween);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsUtilUnitsRegexp2 = _interopRequireDefault(_mojsUtilUnitsRegexp);

    var _mojsUtilParseColorToRgba2 = _interopRequireDefault(_mojsUtilParseColorToRgba);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /*
      TODO:
        - rename `target` to `el`
    */

    // map that holds all available parsers
    var parsersMap = {
      number: _parseNumberBabel.parseNumber,
      unit: _parseUnitBabel.parseUnit,
      color: _parseColorBabel.parseColor
    };

    /* ------------------ */
    /* The `Delta` class  */
    /* ------------------ */

    var DeltaClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);
    var Super = _mojsUtilClassProto2.default.__mojsClass;

    /**
     * `init` - function init the class.
     *
     * @extends @ClassProto
     * @public
     */
    DeltaClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // super call
      Super.init.call(this, o);
      // save target
      var _props = this._props,
          target = _props.target,
          supportProps = _props.supportProps,
          _props$customProperti = _props.customProperties,
          customProperties = _props$customProperti === undefined ? {} : _props$customProperti,
          key = _props.key;

      // if the `isSkipRender` property is set, set the property on
      // `supportProps` otherwise set is as ususal on the `target` object
      this._target = customProperties[key] && customProperties[key].isSkipRender ? supportProps : target;
      // parse delta
      this._parseDelta();
      // set up the update function acording to the delta type
      this.update = this['_upd_' + this._delta.type];
      // set up the tween
      this._setupTween();
    };

    /**
     * `_upd_number` - function to update `number` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_number = function (ep, p) {
      var _delta = this._delta,
          curve = _delta.curve,
          delta = _delta.delta,
          start = _delta.start;
      var key = this._props.key;


      this._target[key] = curve === undefined ? start + ep * delta : curve(p) * start + p * delta;

      return this;
    };

    /**
     * `_upd_unit` - function to update `unit` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_unit = function (ep, p) {
      var _delta2 = this._delta,
          curve = _delta2.curve,
          delta = _delta2.delta,
          start = _delta2.start,
          unit = _delta2.unit;
      var key = this._props.key;


      var value = curve === undefined ? start + ep * delta : curve(p) * start + p * delta;

      this._target[key] = '' + value + unit;

      return this;
    };

    /**
     * `_upd_color` - function to update `color` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_color = function (ep, p) {
      var _delta3 = this._delta,
          curve = _delta3.curve,
          delta = _delta3.delta,
          start = _delta3.start;
      var key = this._props.key;


      if (curve === undefined) {
        var r = start.r + ep * delta.r;
        var g = start.g + ep * delta.g;
        var b = start.b + ep * delta.b;
        var a = start.a + ep * delta.a;
        this._target[key] = 'rgba(' + (r | 0) + ', ' + (g | 0) + ', ' + (b | 0) + ', ' + a + ')';
      } else {
        var curveP = curve(p);
        var _r = curveP * start.r + p * delta.r;
        var _g = curveP * start.g + p * delta.g;
        var _b = curveP * start.b + p * delta.b;
        var _a = curveP * start.a + p * delta.a;
        this._target[key] = 'rgba(' + (_r | 0) + ', ' + (_g | 0) + ', ' + (_b | 0) + ', ' + _a + ')';
      }

      return this;
    };

    /**
     * `_setupTween` - function to set up tween if needed.
     */
    DeltaClass._setupTween = function () {
      var _this = this;

      var tweenOptions = this._delta.tweenOptions;

      // set up tween if `tweenOptions` is set
      if (tweenOptions === undefined) {
        return;
      }

      // create tween with tween options
      this.tween = new _mojsTween2.default(Object.assign({}, tweenOptions, {
        index: this.index,
        // send `onUpdate` function to call the `this.update` function
        // and envoke previous `onUpdate`
        onUpdate: function (ep, p, isForward) {
          _this.update(ep, p, isForward);
          // envoke old `onUpdate` if is present
          if (tweenOptions.onUpdate !== undefined) {
            tweenOptions.onUpdate(ep, p, isForward);
          }
        }
      }));
    };

    /**
     * `_declareDefaults` - function to declare defaults.
     *
     * @extends @ClassProto
     * @private
     */
    DeltaClass._declareDefaults = function () {
      this._defaults = {
        key: null,
        object: null,
        customProperties: {},
        target: null,
        supportProps: null
      };
    };

    /**
     * `_parseDelta` - function to parse delta.
     *
     * @private
     */
    DeltaClass._parseDelta = function () {
      var _props2 = this._props,
          key = _props2.key,
          customProperties = _props2.customProperties;

      var record = customProperties[key];

      return record != null && record.type != null ? this._parseByCustom() : this._parseByGuess();
    };

    /**
     * `_parseByGuess` - function to parse delta by guess.
     *
     * @private
     */
    DeltaClass._parseByGuess = function () {
      var _props3 = this._props,
          key = _props3.key,
          object = _props3.object;

      var split = this._getSplit(object);
      // try to parse `start`/`end` as colors first, if ok - this is a color delta
      var startColor = (0, _mojsUtilParseColorToRgba2.default)(split.start);
      var endColor = (0, _mojsUtilParseColorToRgba2.default)(split.end);
      if (!startColor.isError && !endColor.isError) {
        this._delta = (0, _parseColorBabel.parseColor)(key, split);
        return;
      }
      // convert the delta properties to string and check if unit is present
      var isUnit = ('' + split.start).match(_mojsUtilUnitsRegexp2.default) || ('' + split.end).toString().match(_mojsUtilUnitsRegexp2.default);

      // parse regarding unit presence
      var parseType = isUnit ? 'unit' : 'number';
      this._delta = parsersMap[parseType](key, split);
    };

    /**
     * `_parseByCustom` - function to parse delta with help of customProperties.
     *
     * @private
     */
    DeltaClass._parseByCustom = function () {
      var _props4 = this._props,
          key = _props4.key,
          object = _props4.object,
          customProperties = _props4.customProperties;


      var customProperty = customProperties[key];
      var type = customProperty.type;


      this._delta = parsersMap[type](key, this._getSplit(object));
    };

    /**
     * `_getSplit` - function to get options split
     *               and parse `stagger` in `start`/`end` properties.
     *
     * @param {Object} Object to split.
     * @return {Object} Split.
     */
    DeltaClass._getSplit = function (object) {
      var split = (0, _splitDeltaBabel.splitDelta)(object);
      // parse the `stagger` in `start`/`end` delta properties
      split.start = (0, _mojsUtilParseStaggerProperty2.default)(split.start, this.index, this._totalItemsInStagger);
      split.end = (0, _mojsUtilParseStaggerProperty2.default)(split.end, this.index, this._totalItemsInStagger);

      return split;
    };

    var Delta = exports.Delta = (0, _mojsUtilClassProto.createClass)(DeltaClass);

    exports.default = Delta;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-motion-path"] = factory();
	else
		root["mojs-util-motion-path"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var cache = new Map();

    var createId = function () {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var n = arguments[1];

      return n + '___' + path.trim();
    };

    var save = function (path, n, obj) {
      cache.set(createId(path, n), obj);
    };

    var get = function (path, n) {
      return cache.get(createId(path, n));
    };

    var motionPathCache = exports.motionPathCache = {
      createId: createId,
      save: save,
      get: get
    };

    exports.default = motionPathCache;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-separate-tween-options"] = factory();
	else
		root["mojs-util-separate-tween-options"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateTweenOptions = undefined;


    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var separateTweenOptions = exports.separateTweenOptions = function (object) {
      var tweenOptions = void 0;
      var defaultKeys = Object.keys(_mojsTween.tweenDefaults);
      for (var i = 0; i < defaultKeys.length; i++) {
        var option = defaultKeys[i];

        if (object[option] !== undefined) {
          tweenOptions = tweenOptions || {};
          tweenOptions[option] = object[option];
          delete object[option];
        }
      }

      return tweenOptions;
    };

    exports.default = separateTweenOptions;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'), require('mojs-util-class-proto'), require('mojs-util-separate-tween-options'), require('mojs-util-parse-stagger-property'), require('./motion-path-cache.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween, global.mojsUtilClassProto, global.mojsUtilSeparateTweenOptions, global.mojsUtilParseStaggerProperty, global.motionPathCacheBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween, global.mojsUtilClassProto, global.mojsUtilSeparateTweenOptions, global.mojsUtilParseStaggerProperty, global.motionPathCacheBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween, _mojsUtilClassProto, _mojsUtilSeparateTweenOptions, _mojsUtilParseStaggerProperty, _motionPathCacheBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MotionPath = undefined;

    var _mojsTween2 = _interopRequireDefault(_mojsTween);

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilSeparateTweenOptions2 = _interopRequireDefault(_mojsUtilSeparateTweenOptions);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ----------------------- */
    /* The `MotionPath` class  */
    /* ----------------------- */

    // TODO:
    //  - add bounds?
    //  - add clone
    //  - add global cache

    var MotionPathClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);
    var Super = _mojsUtilClassProto2.default.__mojsClass;

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * `update` - function to update the MotionPath.
     *
     * @public
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If is forward direction.
     * @param {Object} This motion path.
     */
    MotionPathClass.update = function (ep) {
      var _props = this._props,
          coordinate = _props.coordinate,
          property = _props.property;
      var step = this._samples.step;


      var index = ep / step | 0; // convert to integer
      var key = index * step; // get the key
      var nextKey = (index + 1) * step; // get the next key

      var diff = ep - key; // get error for the eased progress
      var value = this._samples.get(key)[coordinate]; // get the value

      var norm = value;
      // if next key is present, calculate the normalized value
      // regarding the eased progress error
      if (nextKey <= 1) {
        var nextItem = this._samples.get(nextKey);
        var nextValue = nextItem[coordinate];
        // for `angle` property need to add `a` property to mitigate
        // the case when two sibling items are close to each other,
        // but since angle has `360deg` period their delta could be large
        // e.g. (355deg vs 5deg) or (5deg vs -355deg)
        if (property === 'angle') {
          nextValue += nextItem.a;
        }

        norm = value + (nextValue - value) * (diff / step);
      }

      if (this._unit === undefined) {
        this._target[property] = norm;
      } else {
        this._target[property] = '' + norm + this._unit;
      }

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * `_samplePath` - function to sample path coordinates.
     *
     * @private
     * @param {Number} Number of floating point digits.
     */
    MotionPathClass._samplePath = function () {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._props.precision;
      var _props2 = this._props,
          path = _props2.path,
          precision = _props2.precision;

      var cachedPath = _motionPathCacheBabel.motionPathCache.get(path, precision);
      // if we have the `path` with the `precision` cached - use it
      if (cachedPath) {
        this._samples = cachedPath;
        // if no cache - start over
      } else {
        this._samples = new Map();
        var totalLength = this._path.getTotalLength();
        var step = 1 / n;
        this._samples.step = step;
        this._samples.totalLength = totalLength;
        // samples the path, `key` is in range of [0..1]
        for (var i = 0; i < n; i++) {
          var key = i * step;
          this._setForKey(key);
          // for the first step only
          if (i === 1) {
            // the first step item
            var current = this._samples.get(key);
            // the zero (initial) item
            var zero = this._samples.get(0);
            // copy the angle of the first step to the zero item to prevent animation jumps
            this._samples.set(0, Object.assign({}, zero, { angle: current.angle }));
          }
          // since we copy of the `1st` record to the `0s`, we can start from `2` here and look back
          if (i >= 2) {
            var currentRecord = this._samples.get(i * step);
            var currentAngle = currentRecord.angle;
            var prevAngle = this._samples.get((i - 1) * step).angle;
            // if values are on edge of `360degree` period, e.g. 355deg vs 5deg
            // add or substract `360` from the current item
            var isClose = (currentAngle - 180) * (prevAngle - 180) < 0;
            if (isClose && Math.abs(currentAngle - prevAngle) > 180) {
              if (currentAngle < prevAngle) {
                // add angle on the current record
                this._samples.set(i * step, Object.assign({}, currentRecord, { a: 360 }));
              } else {
                // remove angle on the current record
                this._samples.set(i * step, Object.assign({}, currentRecord, { a: -360 }));
              }
            }
          }
        }
        // the last sample is for `1`
        // the angle should be the same as for the `n-1` item
        this._setForKey(1);
        var nMinusOneRecord = this._samples.get((n - 1) * step);
        var lastRecord = this._samples.get(1);
        this._samples.set(1, Object.assign({}, lastRecord, { angle: nMinusOneRecord.angle }));
        // add generated hash map to the cache in case if the same path will be used again
        _motionPathCacheBabel.motionPathCache.save(path, precision, this._samples);
      }
    };

    /**
     * `_setForKey` - helper function for `_samplePath`,
     *                sets a key/value regarding `totalLength` on the map.
     *
     * @param  {Number} key Map key [0...1].
     */
    MotionPathClass._setForKey = function (key) {
      var totalLength = this._samples.totalLength;

      // x/y computation
      var length = key * totalLength;
      var point = this._path.getPointAtLength(length);
      var prevPoint = this._path.getPointAtLength(length - 1);
      // cangle computation
      var dX = point.x - prevPoint.x || 1;
      var dY = point.y - prevPoint.y || 1;
      var angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;

      if (dX < 0) {
        angle = 180 + angle;
      }

      // set the point to the map
      this._samples.set(key, { x: point.x, y: point.y, angle: angle, a: 0 });
    };

    /**
     * `init` - function init the class.
     *
     * @extends @ClassProto
     * @public
     */
    MotionPathClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // super call
      Super.init.call(this, o);
      // get target, if the `isSkipRender` is set on `property`
      // in `customProperties`, use `supportProps` otherwise use `el`
      var _props3 = this._props,
          el = _props3.el,
          supportProps = _props3.supportProps,
          property = _props3.property,
          customProperties = _props3.customProperties;

      var custom = customProperties[property];
      this._target = custom && custom.isSkipRender ? supportProps : el;
      // if `unit` is defined or `type` is set on `customProperties`,
      // set the render `_unit` that will be added on render
      if (o.unit !== undefined || custom && custom.type === 'unit') {
        this._unit = o.unit || 'px';
      }
      // parse path
      this._parsePath();
      // precompute path
      this._samplePath();
      // set up tween
      this._setupTween();
    };

    /**
     * `_setupTween` - function set up tween if needed.
     *
     * @extends @ClassProto
     * @public
     */
    MotionPathClass._setupTween = function () {
      var _this = this;

      // options
      var options = Object.assign({}, this._o);
      // separate tween  options
      var tweenOptions = (0, _mojsUtilSeparateTweenOptions2.default)(options);
      if (tweenOptions !== undefined) {
        var tweenProperties = Object.assign({}, tweenOptions, {
          // send `onUpdate` function to call the `this.update` function
          // and envoke previous `onUpdate`
          onUpdate: function (ep, p, isForward) {
            _this.update(ep, p, isForward);
            // envoke old `onUpdate` if is present
            if (tweenOptions.onUpdate !== undefined) {
              tweenOptions.onUpdate(ep, p, isForward);
            }
          }
        });

        this.tween = new _mojsTween2.default(tweenProperties);
      }
    };

    /**
     * `_decalreDefaults` - function to declare defaults.
     *
     * @extends @ClassProto
     * @private
     */
    MotionPathClass._declareDefaults = function () {
      this._defaults = {
        el: null,
        supportProps: null,
        customProperties: {},
        path: 'M0,0 L100,100',
        precision: 140,
        coordinate: 'x',
        property: 'x'
      };
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    MotionPathClass._extendDefaults = function () {
      // super call
      Super._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        var prop = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index, this._totalItemsInStagger);
        // check if path generator was passed to `path` property
        var isPathGenerator = prop && typeof prop === 'object' && prop.path;
        this._props[key] = isPathGenerator ? prop.path : prop;
      }

      var property = this._props.property;

      if (property === 'y' || property === 'angle') {
        this.setIfNotSet('coordinate', property);
      }
    };

    /**
     * `_parsePath` - function to parse SVG motion path.
     */
    MotionPathClass._parsePath = function () {
      var path = this._props.path;

      this._path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      this._path.setAttributeNS(null, 'd', path);
    };

    var MotionPath = exports.MotionPath = (0, _mojsUtilClassProto.createClass)(MotionPathClass);

    exports.default = MotionPath;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-tweenable"] = factory();
	else
		root["mojs-util-tweenable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tweenable = undefined;


    /* --------------------- */
    /* The `Tweenable` class */
    /* --------------------- */

    var TweenableClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto.ClassProto);
    var Super = _mojsUtilClassProto.ClassProto.__mojsClass;

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     * @extends @ ClassProto
     */
    TweenableClass.init = function (o) {
      var _this = this;

      Super.init.call(this, o);
      // proxy all tween public methods to `timeline` with fallback to `tween`
      var methods = ['play', 'pause', 'stop', 'replay', 'setSpeed', 'reverse', 'setProgress', 'reset', 'setStartTime'];

      var _loop = function (i) {
        var method = methods[i];
        _this[method] = function () {
          var _ref;

          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          // eslint-disable-next-line no-unused-expressions
          rest; // otherwise rest arguments got lost
          (_ref = _this.timeline || _this.tween)[method].apply(_ref, rest);
          // return `this` for chaining
          return _this;
        };
      };

      for (var i = 0; i < methods.length; i++) {
        _loop(i);
      }
    };

    var Tweenable = exports.Tweenable = (0, _mojsUtilClassProto.createClass)(TweenableClass);
    exports.default = Tweenable;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-timeline"] = factory();
	else
		root["mojs-timeline"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(2), __webpack_require__(3), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(2), __webpack_require__(3), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-tween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsTween);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsTween);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsTween) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Timeline = undefined;


    // TODO:
    //  - add `onRefresh` that will call all the child items.

    /* --------------------- */
    /* The `Timeline` class  */
    /* --------------------- */

    var TimelineClass = (0, _mojsUtilClassProto.extendClass)(_mojsTween.Tween);
    var Super = _mojsTween.Tween.__mojsClass;

    /**
     * _declareDefaults - function do override some defaults.
     *
     * @overrides @ Tween
     * @private
     */
    TimelineClass._declareDefaults = function () {
      // super call
      Super._declareDefaults.call(this);
      // reset `duration` to `0` because user cannot set duration of a Timeline -
      // it is calculated automatically regarding child timelines durations
      // this._defaults.duration = 0;
      // reset the `easing` since timeline should not have easing by default
      this._defaults.easing = 'linear.none';
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * add - function to add `Tween` to the timeline.
     *
     * @public
     * @param   {Object, Array} A tween or array of tweens to add.
     * @param   {Number} Time shift >= 0.
     * @returns {Object} Self.
     */
    TimelineClass.add = function (tween) {
      var _this = this;

      var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // make sure the shift is positive
      shift = Math.abs(shift);
      // if tween is really an array of tweens,
      // loop thru them and add one by one
      if (tween instanceof Array) {
        tween.forEach(function (tw) {
          _this.add(tw, shift);
        });
        // if a single tween, add it to `_items`
      } else {
        // if it has child `timeline` or `tween` property - add it instead
        var runner = tween.timeline || tween.tween;
        if (runner) {
          tween = runner;
        }
        // set the `shiftTime` on tween
        tween.set('shiftTime', shift);
        // add to child timelines
        this._items.push(tween);
        // check if we need to increase timeline's bound
        var _tween$_props = tween._props,
            delay = _tween$_props.delay,
            duration = _tween$_props.duration,
            shiftTime = _tween$_props.shiftTime;

        var time = delay + duration + shiftTime;
        this._props.duration = Math.max(this._props.duration, time);
      }

      return this;
    };

    /**
     * append - function to append `Tween` to the timeline.
     *
     * @public
     * @param   {Object, Array} A tween or array of tweens to append.
     * @param   {Number} Time shift >= 0.
     * @returns {Object} Self.
     */
    TimelineClass.append = function (tween) {
      var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // add the tweens shifting them to the current `duration`
      this.add(tween, this._props.duration + Math.abs(shift));

      return this;
    };

    /**
     * stop - function to stop the Timeline.
     *
     * @public
     * @param   {Number} Progress [0..1] to set when stopped.
     * @returns {Object} Self.
     */
    TimelineClass.stop = function (progress) {
      Super.stop.call(this, progress);

      for (var i = this._items.length - 1; i >= 0; i--) {
        this._items[i].stop(progress);
      }

      return this;
    };

    /**
     * reset - function to reset tween's state and properties.
     *
     * @public
     * @overrides @ Tween
     * @returns this.
     */
    TimelineClass.reset = function () {
      Super.reset.call(this);
      this._callOnItems('reset');

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * setStartTime - function to set the start tme for the the Timeline.
     *
     * @extends @ Tween
     * @public
     *
     * @param  {Number} Start time.
     */
    TimelineClass.setStartTime = function (time) {
      Super.setStartTime.call(this, time);
      this._callOnItems('setStartTime', this._start);

      return this;
    };

    /**
     * Timeline - function to call a function on all child items.
     *
     * @param  {String} `name` Function name.
     * @param  {Arrag} args All other arguments.
     */
    TimelineClass._callOnItems = function (name) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < this._items.length; i++) {
        var _items$i;

        (_items$i = this._items[i])[name].apply(_items$i, args);
      }
    };

    /**
     * _createUpdate - function constructor to update the Timeline and child items.
     *
     * @private
     * @param {Function} `onUpdate` callback from passed options.
     * @param {Object} Instance.
     */
    TimelineClass._createUpdate = function (onUpdate, context) {
      /**
       * _createUpdate - function constructor to update the Timeline and child items.
       *
       * @private
       * @param {Number} Eased progress [0...1].
       * @param {Number} Progress [0...1].
       * @param {Boolean} If forward or backward direction.
       * @param {Number} Update time.
       */
      return function (ep, p, isForward, time) {
        // 1. the order is important
        for (var i = 0; i < context._items.length; i++) {
          context._items[i].update(time);
        }
        // 2. the order is important
        onUpdate(ep, p, isForward, time);
      };
    };

    /**
     * _vars - declare vars.
     *
     * @extends @ Tween
     * @private
     */
    TimelineClass._vars = function () {
      Super._vars.call(this);
      // child `timelines`
      this._items = [];
      // reset the duraton because timeline cannot have it
      this._props.duration = 0;
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @overrides @ Tween
     * @private
     */
    TimelineClass._extendDefaults = function () {
      // super call
      Super._extendDefaults.call(this);
      // save the `onUpdate` callback
      this._onUpdate = this._props.onUpdate;
      // redefine the `onUpdate` callback to `_createUpdate` function
      this._props.onUpdate = this._createUpdate(this._onUpdate, this);
    };

    var Timeline = exports.Timeline = (0, _mojsUtilClassProto.createClass)(TimelineClass);
    exports.default = Timeline;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-static-property"] = factory();
	else
		root["mojs-util-parse-static-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-delta'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilDelta);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilDelta);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilDelta) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseStaticProperty = undefined;

    var _mojsUtilDelta2 = _interopRequireDefault(_mojsUtilDelta);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    // TODO: cover by unit tests

    /**
     * `parseStaticProperty` - function to parse static property
     *                         regarding types in `customProperties`.
     *
     * @param {String} key Property name.
     * @param {String} property Property value.
     * @param {Object} customProperties Custom properties object.
     * @param {Number} index Index.
     */
    var parseStaticProperty = exports.parseStaticProperty = function (key, property, customProperties) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var total = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      // if property is not defined, just return it
      if (property == null) {
        return property;
      }

      var target = {};
      var object = {
        from: property,
        to: property
      };
      // greate a delta with `{ from: property, to: property }` transition
      var delta = new _mojsUtilDelta2.default({
        key: key,
        target: target,
        customProperties: customProperties,
        index: index,
        totalItemsInStagger: total,
        object: object,
        supportProps: target
      });
      // update the delta with `0` progress
      delta.update(0, 0);

      // get the result on target
      var result = target[key];
      // check if `result` is `NaN` return original propert
      return isNaN(result) && !result ? property : result;
    };

    exports.default = parseStaticProperty;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-delta"] = factory();
	else
		root["mojs-util-delta"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-color-to-rgba"] = factory();
	else
		root["mojs-util-parse-color-to-rgba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    /**
     * DOMDiv - and element that is added to DOM for enviroment test purposes.
     */
    var DOMDiv = document.createElement('div');
    document.body.append(DOMDiv);

    /**
     * `normalizeHex` - Function to normalize part of a HEX color to FF format,
     *                  if one character passed, return doubled version of it.
     *
     * @param {Steing} Color part to normalize.
     * @param {Steing} Normalized part of a color.
     */
    var normalizeHex = function (string) {
      // eslint-disable-line arrow-body-style
      return string.length === 2 ? string : string + string;
    };

    /**
     * `parseHEXColor` - function to parse #HEX colors.
     */
    var parseHEXColor = function (color) {
      var result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
      if (result) {
        return {
          r: parseInt(normalizeHex(result[1]), 16),
          g: parseInt(normalizeHex(result[2]), 16),
          b: parseInt(normalizeHex(result[3]), 16),
          a: 1
        };
      }
    };

    /**
     * Function to parse a color string to color object.
     *
     * @param {String} String to parse.
     * @returns {Object} Color object.
     */
    var parseColorToRgba = exports.parseColorToRgba = function (color) {
      var originColor = color;
      // #HEX
      if (color[0] === '#') {
        return parseHEXColor(color);
      }

      var isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
      // if color is not `rgb`, it is a shortcut (`cyan`, `hotpink` etc)
      // so we need to set the color on DOM element and get the calculated color
      if (!isRgb) {
        DOMDiv.style.color = 'black';
        DOMDiv.style.color = color;
        color = window.getComputedStyle(DOMDiv).color;
      }

      // parse `rgb` color
      var regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
      var regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
      var result = new RegExp(regexString1 + regexString2, 'gi').exec(color);
      var a = parseFloat(result[4] || 1);

      if (result) {
        var r = parseInt(result[1], 10);
        var g = parseInt(result[2], 10);
        var b = parseInt(result[3], 10);
        // if origin color was not black but black
        // returned from the DOM - that's an error
        return originColor !== 'black' && r === 0 && g === 0 && b === 0 && a === 1 ? { isError: true } : { r: r, g: g, b: b, a: a };
      }

      return {
        isError: true
      };
    };

    exports.default = parseColorToRgba;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-units-regexp"] = factory();
	else
		root["mojs-util-units-regexp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * The regexp intended to parse all supported `units`.
     */
    var unitsRegexp = exports.unitsRegexp = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg|fr/gim;

    exports.default = unitsRegexp;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-parse-color-to-rgba'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilParseColorToRgba);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilParseColorToRgba);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilParseColorToRgba) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseColor = undefined;

    var _mojsUtilParseColorToRgba2 = _interopRequireDefault(_mojsUtilParseColorToRgba);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /**
     * Function parse color delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseColor = exports.parseColor = function (name, object) {
      var start = (0, _mojsUtilParseColorToRgba2.default)(object.start);
      var end = (0, _mojsUtilParseColorToRgba2.default)(object.end);

      var delta = {
        r: end.r - start.r,
        g: end.g - start.g,
        b: end.b - start.b,
        a: end.a - start.a
      };

      return Object.assign({}, object, {
        type: 'color',
        name: name,
        start: start,
        end: end,
        delta: delta
      });
    };

    exports.default = parseColor;
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-units-regexp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilUnitsRegexp);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilUnitsRegexp);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilUnitsRegexp) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseUnit = undefined;

    var _mojsUtilUnitsRegexp2 = _interopRequireDefault(_mojsUtilUnitsRegexp);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var getRegexpUnit = function (value) {
      if (typeof value !== 'string') {
        return undefined;
      }
      var valueMatch = value.match(_mojsUtilUnitsRegexp2.default);

      return valueMatch !== null ? valueMatch[0] : undefined;
    };

    /**
     * Function parse number delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseUnit = function (name, object) {
      var result = Object.assign({}, object, { type: 'unit', name: name });
      // get start and end units
      var startUnit = getRegexpUnit(result.start);
      var endUnit = getRegexpUnit(result.end);
      // get the unit for both with priority to startUnit
      result.unit = endUnit || startUnit || 'px';
      // parse the values in case we have strings there
      result.start = parseFloat(result.start);
      result.end = parseFloat(result.end);
      // calculate delta
      result.delta = result.end - result.start;

      return result;
    };

    exports.parseUnit = parseUnit;
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function parse number delta.
     *
     * @param {String} Name of the property.
     * @param {Object} Object to parse.
     * @returns {Object} Parsed `delta`.
     */
    var parseNumber = function (name, object) {
      var result = Object.assign({ type: 'number', name: name }, object);
      // parse the values in case we have strings there
      result.start = parseFloat(result.start);
      result.end = parseFloat(result.end);
      // calculate delta
      result.delta = result.end - result.start;

      return result;
    };

    exports.parseNumber = parseNumber;
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-easing'), require('mojs-util-separate-tween-options'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsEasing, global.mojsUtilSeparateTweenOptions);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsEasing, global.mojsUtilSeparateTweenOptions);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsEasing, _mojsUtilSeparateTweenOptions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.splitDelta = undefined;

    var _mojsUtilSeparateTweenOptions2 = _interopRequireDefault(_mojsUtilSeparateTweenOptions);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var splitDelta = exports.splitDelta = function (object) {
      var obj = Object.assign({}, object);
      // save curve because we need it directly on the
      // parsed `delta` object vs `tween`
      var curve = obj.curve !== undefined ? (0, _mojsEasing.parseEasing)(obj.curve) : undefined;
      delete obj.curve;
      // extract tween options
      var tweenOptions = (0, _mojsUtilSeparateTweenOptions2.default)(obj);

      var start = void 0;
      var end = void 0;
      // if `{ from: x, to: x }` syntax used
      if (obj.from != undefined && obj.to != undefined) {
        // eslint-disable-line eqeqeq
        start = obj.from;
        end = obj.to;
        // else `{ from: to }` syntax used
      } else {
        // at this point only the `start` -> `end` should left get the values
        start = Object.keys(obj)[0];
        end = obj[start];
      }

      return { start: start, end: end, curve: curve, tweenOptions: tweenOptions };
    };

    exports.default = splitDelta;
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-separate-tween-options"] = factory();
	else
		root["mojs-util-separate-tween-options"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-tween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsTween);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsTween);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsTween) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateTweenOptions = undefined;


    /**
     * Function to split the delta object to `tween` options and actual `delta`.
     *
     * @param {Object} Object to split.
     * @returns {Object} Split `delta`.
     */
    var separateTweenOptions = exports.separateTweenOptions = function (object) {
      var tweenOptions = void 0;
      var defaultKeys = Object.keys(_mojsTween.tweenDefaults);
      for (var i = 0; i < defaultKeys.length; i++) {
        var option = defaultKeys[i];

        if (object[option] !== undefined) {
          tweenOptions = tweenOptions || {};
          tweenOptions[option] = object[option];
          delete object[option];
        }
      }

      return tweenOptions;
    };

    exports.default = separateTweenOptions;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-tween"] = factory();
	else
		root["mojs-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Tweener - singleton object that is responsible of:
     *  - starting `requestAnimationFrame` loop
     *  - stopping `requestAnimationFrame` loop
     *  - holding `tween`/`timeline` objects and passing current time to them.
     */

    var tweens = [];
    var savedTweens = [];
    var isRunning = false;

    /**
     * `savePlayingTweens` - function to store all playing tweenes
     *                       when user leaves a page.
     */
    var savePlayingTweens = function () {
      savedTweens = tweens.slice(0);
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].pause();
      }
    };

    /**
     * `restorePlayingTweens` - function to restore all playing tweens.
     */
    var restorePlayingTweens = function () {
      for (var i = 0; i < savedTweens.length; i++) {
        savedTweens[i].play();
      }
    };

    /**
     * `onVisibilityChange` - visibilityChange handler.
     */
    var onVisibilityChange = function () {
      if (document.hidden) {
        savePlayingTweens();
      } else {
        restorePlayingTweens();
      }
    };

    /**
     * `stop` - function to stop the animation loop.
     */
    var stop = function () {
      tweens.length = 0;
      isRunning = false;
    };

    // needed?
    // /**
    //  * `removeAll` - function stop updating all the child tweens/timelines.
    //  *
    //  * @return {type}  description
    //  */
    // const removeAll = function () { tweens.length = 0; };

    /**
     * `remove` - function to remove specific tween/timeline form updating.
     */
    var remove = function (tween) {
      var index = typeof tween === 'number' ? tween : tweens.indexOf(tween);

      if (index !== -1) {
        tweens.splice(index, 1);
      }
    };

    /**
     *  `update` - fucntion  to update every tween/timeline on animation frame.
     */
    var update = function (time) {
      var i = tweens.length;
      while (i--) {
        var tween = tweens[i];
        if (tween.update(time) === true) {
          remove(tween);
          tween.onTweenerFinish();
        }
      }
    };

    /*
     Main animation loop. Should have only one concurrent loop.
     @private
     @returns this
    */
    var loop = function () {
      if (tweens.length === 0) {
        return stop();
      }
      update(performance.now());
      requestAnimationFrame(loop);
    };

    /**
     * `start` - function to start the animation loop.
     */
    var start = function () {
      if (isRunning) {
        return;
      }
      isRunning = true;
      requestAnimationFrame(loop);
    };

    /**
     * `add` - function to add a Tween/Timeline to loop pool.
     */
    var add = function (tween) {
      tweens.push(tween);
      start();
    };

    /**
     * `caffeinate` - function to keep tweener awake on page blur.
     */
    var caffeinate = function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };

    // listen to visibility change
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    var tweener = { add: add, remove: remove, caffeinate: caffeinate };

    exports.tweener = tweener;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tweenDefaults = {
      // delay of the tween [-∞..∞]
      delay: 0,
      // duration of the tween [0..∞]
      duration: 350,
      // speed of playback [0..∞], speed that is less then 1
      // will slowdown playback, for instance .5 will make tween
      // run 2x slower. Speed of 2 will speedup the tween to 2x.
      speed: 1,
      // easing for the tween, could be any easing type
      easing: 'Sin.Out',
      // Easing for backward direction of the tweenthe tween,
      // if `null` - fallbacks to `easing` property.
      // forward direction in `yoyo` period is treated as backward for the easing.
      backwardEasing: null,
      // if should reverse the tween
      isReverse: false,
      // how many times repeat the tween (excluding the first run)
      repeat: 0,
      // if should `reverse` before repeating
      isReverseOnRepeat: false,
      onUpdate: function (ep, p, isForward) {},
      onStart: function () {},
      onComplete: function () {},
      onChimeIn: function () {},
      onChimeOut: function () {},
      onRefresh: function () {},
      onPlaybackStart: function () {},
      onPlaybackPause: function () {},
      onPlaybackStop: function () {},
      onPlaybackComplete: function () {},

      // tween index
      index: 0,
      // shift time - mostly needed for timeline
      shiftTime: 0
    };

    exports.tweenDefaults = tweenDefaults;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-easing"] = factory();
	else
		root["mojs-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var parsePath = function (path) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    };

    var sample = function (path, n) {
      var step = 1 / n;
      var totalLength = path.getTotalLength();
      // create the samples map and save main properties
      var samples = [];
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var point = path.getPointAtLength(i * step * totalLength);
        samples[i] = {
          x: point.x / 100,
          y: point.y / 100
        };
      }

      return samples;
    };

    var findY = function (key, samples, n) {
      var start = 0;
      var end = samples.length - 1;
      var step = 1 / n;
      // find `start`/`end` bounds with binary search
      while (Math.abs(end - start) > 1) {
        var delta = end - start;
        var middle = start + Math.floor(delta / 2);
        var _value = samples[middle];

        if (key === _value.x) {
          return _value.y;
        }
        // shift a bound regarding the `value.x` value
        if (key < _value.x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      // when the loop stops - we've found `start` and `end` bounds
      var value = samples[start];
      // if key is greate than `start` - normalize it
      if (key > value.x) {
        var nextValue = samples[start + 1];
        if (nextValue !== undefined) {
          var diff = value.x - key;
          return value.y - (nextValue.y - value.y) * (diff / step);
        }
      }

      return value.y;
    };

    var translateSamples = function (samples, n) {
      var map = new Map();
      var step = 1 / n;
      // samples the path, `key` is in range of [0..1]
      for (var i = 0; i < n + 1; i++) {
        var key = i * step;
        map.set(key, 1 - findY(key, samples, n));
      }

      return map;
    };

    var path = function (pathCoordinates) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var preSamples = sample(parsePath(pathCoordinates), n);
      var samples = translateSamples(preSamples, n);
      var step = 1 / n;

      return function (p) {
        var index = p / step | 0; // convert to integer
        var key = index * step; // get the key
        var nextKey = (index + 1) * step; // get the next key
        var y = samples.get(key); // get the y
        // if next key is present, calculate the normalized y
        // regarding the progress error
        if (nextKey <= 1) {
          var nextY = samples.get(nextKey);
          y += (nextY - y) * ((p - key) / step);
        }

        return y;
      };
    };

    exports.path = path;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-pow-easing"] = factory();
	else
		root["mojs-pow-easing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Generate power easing.
     *
     * @param {Number} p Easing power.
     * @returns {Function} Easing function with the defined power.
     */
    var pow = function () {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var easeIn = function (k) {
        return function (t) {
          return Math.pow(t, k);
        };
      }(p);
      var easeOut = function (k) {
        return function (t) {
          return 1 - Math.abs(Math.pow(t - 1, k));
        };
      }(p);

      return {
        in: easeIn,
        out: easeOut,
        inout: function (t) {
          return t < .5 ? easeIn(t * 2) / 2 : easeOut(t * 2 - 1) / 2 + .5;
        }
      };
    };

    exports.default = pow;
    module.exports = exports["default"];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('mojs-pow-easing'), require('./path.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
    global.mojs = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.mojsPowEasing, global.pathBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (module, exports, _mojsPowEasing, _pathBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _mojsPowEasing2 = _interopRequireDefault(_mojsPowEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var CONSOLE_NAME = ':mojs :';
    var DEFAULT_EASING = ['sin', 'out'];
    var DEFAULT_EASING_STRING = DEFAULT_EASING.join('.');

    /**
     * `easing` - object that holds all easing avaliable in `mojs`.
     */
    var easing = {
      /**
       * `Linear` easing, also `null` or `id` easing - simply returns whatever
       * passed to the function.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      linear: { none: function (k) {
          return k;
        } },

      /**
       * `Sin` easing. Has `in`/`out`/`inout` options.
       * @param {Number} Progress in range of `[0...1]`
       * @returns {Number} Eased progress in range of `[0...1]`
       */
      sin: {
        in: function (k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        out: function (k) {
          return Math.sin(k * Math.PI / 2);
        },
        inout: function (k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },

      pow: _mojsPowEasing2.default,
      path: _pathBabel.path,

      parseEasing: function () {
        var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EASING_STRING;

        var type = typeof ease;

        switch (type) {
          case 'function':
            {
              return ease;
            }
          case 'string':
            {
              // path easing
              if (ease[0].toLowerCase() === 'm') {
                return (0, _pathBabel.path)(ease);
              }

              ease = ease.toLowerCase().split('.');
              var easeParent = easing[ease[0]];

              if (!easeParent) {
                console.error(CONSOLE_NAME + ' Easing with name "' + ease[0] + '" wasn\'t found, fallback to "' + DEFAULT_EASING_STRING + '" instead.', easing); // eslint-disable-line no-console

                return easing[DEFAULT_EASING[0]][DEFAULT_EASING[1]];
              }
              return easeParent[ease[1]];
            }
          default:
            console.error(CONSOLE_NAME + ' Only strings and function supported atm.', ease); // eslint-disable-line no-console
        }
      }
    };

    exports.default = easing;
    module.exports = exports['default'];
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-stagger-property"] = factory();
	else
		root["mojs-util-parse-stagger-property"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Function to check whether a property is a stagger `map`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger map.
     */
    var isStaggerMap = exports.isStaggerMap = function (prop) {
      return prop instanceof Array && prop.__mojs__isStaggerMap;
    };

    /**
     * Function to check whether a property is a stagger `function`.
     * @param {*} prop Property to check.
     * @returns {Boolean} If property is stagger function.
     */
    var isStaggerFunction = exports.isStaggerFunction = function (prop) {
      return typeof prop === 'function' && prop.__mojs__isStaggerFunction;
    };

    /**
     * Function to parse stagger utility function to a value.
     * @param {*} prop Property to check.
     * @param {Number} index Index of the current item.
     * @param {Number} totalItems Total items in stagger.
     * @returns {*} Parsed property or property itself(if not stagger prop).
     */
    var parseStaggerProperty = exports.parseStaggerProperty = function (prop, index, totalItems) {
      // if property is an array map the index to some array item
      if (isStaggerMap(prop)) {
        prop = prop[index % prop.length];
      }
      // if prop is a function, call the it with index and return the result
      if (isStaggerFunction(prop)) {
        prop = prop(index, totalItems);
      }
      // if nested, parse it
      return isStaggerMap(prop) || isStaggerFunction(prop) ? parseStaggerProperty(prop, index, totalItems) : prop;
    };

    exports.default = parseStaggerProperty;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-util-parse-stagger-property'), require('mojs-easing'), require('./tween-defaults.babel.js'), require('./tweener.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(2), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsUtilParseStaggerProperty, global.mojsEasing, global.tweenDefaultsBabel, global.tweenerBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsUtilParseStaggerProperty, _mojsEasing, _tweenDefaultsBabel, _tweenerBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tweenDefaults = exports.Tween = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsEasing2 = _interopRequireDefault(_mojsEasing);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /* ------------------ */
    /* The `Tween` class  */
    /* ------------------ */

    var TweenClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     * @override ClassProto
     */
    TweenClass._declareDefaults = function () {
      // object spread does not work with Karma
      this._defaults = Object.assign({}, _tweenDefaultsBabel.tweenDefaults);
    };

    /* ---------------------- */
    /* The `Public` functions */
    /* ---------------------- */

    /**
     * play - function to `play` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.play = function () {
      if (this._state === 'play') {
        return this;
      }

      this._setState('play');
      this._setupPlay();

      this._playTime = performance.now();
      this._speed = this._props.speed;

      return this;
    };

    /**
     * pause - function to `pause` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.pause = function () {
      if (this._state === 'pause' || this._state === 'stop') {
        return this;
      }

      _tweenerBabel.tweener.remove(this);
      this._setState('pause');
      // reset speed variable to `1` because speed should not be applied
      // when setProgress is used
      this._speed = 1;

      return this;
    };

    /*
     * stop - function to stop the tween.
     *
     * @public
     * @param {Number} Progress to stop with in [0...1]
     * @returns {Object} This tween.
     */
    TweenClass.stop = function (progress) {
      if (this._state === 'stop') {
        return this;
      }
      var newProgress = this._props.isReverse === true ? 1 : 0;

      var stopProc = progress !== undefined ? progress
      /* if no progress passed - set 1 if tween
         is playingBackward, otherwise set to 0 */
      : newProgress;

      this.setProgress(stopProc);
      this.reset();

      return this;
    };

    /**
     * play - function to `replay`(`retart`) the tween.
     *
     * @public
     * @param {Number} Repeat count.
     * @returns {Object} This tween.
     */
    TweenClass.replay = function (repeat) {
      this.reset();
      this.play(repeat);

      return this;
    };

    /**
     * setSpeed - function to set speed.
     *
     * @public
     * @param {Number} Speed in [0..∞]
     * @return {Object} This tween.
     */
    TweenClass.setSpeed = function (speed) {
      this._props.speed = speed;

      if (this._state === 'play') {
        this.setStartTime();
        this._speed = speed;
        this._playTime = performance.now();
      }

      return this;
    };

    /**
     * reverse - function to `reverse` the tween.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass.reverse = function () {
      this._props.isReverse = !this._props.isReverse;
      // reverse callbacks in the `_cbs`
      this._reverseCallbacks();

      if (this._elapsed > 0) {
        var delay = this._props.delay;

        this._elapsed = this._end - this._spot - (this._elapsed - delay);
      }

      this.setStartTime();

      return this;
    };

    /**
     * setProgress - function to set tween progress.
     *
     * @public
     * @param {Number} Progress to set.
     * @return {Object} This tween.
     */
    TweenClass.setProgress = function () {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._start === undefined) {
        this.setStartTime();
      }

      var time = progress === 1 ? this._end : this._spot + progress * (this._end - this._spot);

      // set initial time
      if (this._prevTime === undefined) {
        this._prevTime = this._start;
      }
      // save speed before updating form `setProgress`
      var speed = this._speed;
      this._speed = 1;
      // update with current time
      this.update(time);
      // restore speed after updating form `setProgress`
      this._speed = speed;

      return this;
    };

    /**
     * reset - function to reset the `Tween`.
     */
    TweenClass.reset = function () {
      _tweenerBabel.tweener.remove(this);
      this._isActive = false;
      this._elapsed = 0;
      this._repeatCount = 0;
      this._setState('stop');
      delete this._prevTime;

      return this;
    };

    /* ----------------------- */
    /* The `Private` functions */
    /* ----------------------- */

    /**
     * _setupPlay - function to setup before `play`.
     *
     * @public
     * @returns {Object} This tween.
     */
    TweenClass._setupPlay = function () {
      this.setStartTime();
      _tweenerBabel.tweener.add(this);
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @return {type}  description
     */
    TweenClass._vars = function () {
      var _props = this._props,
          isReverse = _props.isReverse,
          onStart = _props.onStart,
          onComplete = _props.onComplete,
          onChimeIn = _props.onChimeIn,
          onChimeOut = _props.onChimeOut,
          delay = _props.delay,
          duration = _props.duration;

      // if tween is in active period
      this._isActive = false;
      // time progress
      this._elapsed = 0;
      // initial state
      this._state = 'stop';
      // set "id" speed
      this._speed = 1;
      this._time = delay + duration;
      // how many times we have been repeating
      this._repeatCount = 0;
      // callbacks array - used to flip the callbacks order on `isReverse`
      this._cbs = [onStart, onComplete, 0, 1];
      // chime callbacks
      this._chCbs = [onChimeIn, onChimeOut];
      // if `isReverse` - flip the callbacks
      if (isReverse === true) {
        this._reverseCallbacks();
      }
    };

    /**
     * setStartTime - function to set `startTime`
     *
     * @param {Number, Undefined} Start time to set.
     */
    TweenClass.setStartTime = function () {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
      var _props2 = this._props,
          delay = _props2.delay,
          duration = _props2.duration,
          shiftTime = _props2.shiftTime;


      // if `elapsed` is greated that end bound -> reset it to `0`
      if (this._elapsed >= this._end - this._spot) {
        this._elapsed = 0;
      }
      // `_spot` - is the animation initialization spot
      // `_elapsed` is how much time elapsed in the `active` period,
      // needed for `play`/`pause` functionality
      this._spot = startTime - this._elapsed + shiftTime;
      // play time is needed to recalculate time regarding `speed`
      this._playTime = this._spot;
      // `_start` - is the active animation start time bound
      this._start = this._spot + delay;
      // `_end` - is the active animation end time bound
      this._end = this._start + duration;
    };

    /**
     * update - function to update `Tween` with current time.
     *
     * @param {Number} The current update time.
     */
    TweenClass.update = function (time) {
      var _props3 = this._props,
          onUpdate = _props3.onUpdate,
          isReverse = _props3.isReverse,
          easing = _props3.easing,
          backwardEasing = _props3.backwardEasing;


      // `t` - `time` regarding `speed`
      var t = this._playTime + this._speed * (time - this._playTime);
      // save elapsed time
      this._elapsed = t - this._spot;
      // if pregress is not right - call the `onRefresh` function #before
      if (t < this._start && this._progress !== this._cbs[2]) {
        this._props.onRefresh(false, this.index, t);
        this._progress = this._cbs[2];
      }
      // if pregress is not right - call the `onRefresh` function #after
      if (t > this._end && this._progress !== this._cbs[3]) {
        this._props.onRefresh(true, this.index, t);
        this._progress = this._cbs[3];
      }

      // if forward progress
      var isForward = t > this._prevTime;
      var ease = isForward !== isReverse ? easing : backwardEasing;

      if (t >= this._start && t <= this._end && this._prevTime !== undefined) {
        var isActive = void 0;
        var p = (t - this._start) / this._props.duration;
        this._progress = isReverse === false ? p : 1 - p;
        onUpdate(ease(this._progress), this._progress, isForward, t);

        if (t > this._start && this._isActive === false && isForward === true) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
        }

        if (t === this._start) {
          // `onStart`
          this._cbs[0](isForward, isReverse, this.index);
          // `onChimeIn`
          this._chCbs[0](isForward, isReverse, this.index, t);
          // set `isActive` to `true` for forward direction
          // but set it to `false` for backward
          isActive = isForward;
        }

        if (t < this._end && this._isActive === false && isForward === false) {
          // `onComplete`
          this._cbs[1](false, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
        }

        if (t === this._end) {
          // `onComplete`
          this._cbs[1](isForward, isReverse, this.index);
          // `onChimeOut`
          this._chCbs[1](isForward, isReverse, this.index, t);
          // set `isActive` to `false` for forward direction
          // but set it to `true` for backward
          isActive = !isForward;
        }

        this._isActive = isActive === undefined ? true : isActive;

        this._prevTime = t;

        return !this._isActive;
      }

      if (t > this._end && this._isActive === true) {
        this._progress = this._cbs[3];
        // one
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onComplete`
        this._cbs[1](isForward, isReverse, this.index);
        // `onChimeOut`
        this._chCbs[1](isForward, isReverse, this.index, t);
        this._isActive = false;
        this._prevTime = t;
        return true;
      }

      if (t < this._start && this._isActive === true) {
        this._progress = this._cbs[2];
        // zero
        onUpdate(ease(this._progress), this._progress, isForward, t);
        // `onStart`
        this._cbs[0](isForward, isReverse, this.index);
        // `onChimeIn`
        this._chCbs[0](isForward, isReverse, this.index, t);

        this._isActive = false;
        this._prevTime = t;

        return true;
      }

      this._prevTime = t;
    };

    /**
     * Function to reverse callbacks.
     */
    TweenClass._reverseCallbacks = function () {
      this._cbs = [this._cbs[1], this._cbs[0], this._cbs[3], this._cbs[2]];
    };

    /*
     * Method set playback `_state` string and call appropriate callbacks.
     *
     * @private
     * @param {String} State name [play, pause, 'stop', 'reverse']
     */
    TweenClass._setState = function (state) {
      // save previous state
      this._prevState = this._state;
      this._state = state;
      // callbacks
      var wasPause = this._prevState === 'pause';
      var wasStop = this._prevState === 'stop';
      var wasPlay = this._prevState === 'play';
      var wasReverse = this._prevState === 'reverse';
      var wasPlaying = wasPlay || wasReverse;
      var wasStill = wasStop || wasPause;

      if ((state === 'play' || state === 'reverse') && wasStill) {
        this._props.onPlaybackStart(state, this._prevState);
      }
      if (state === 'pause' && wasPlaying) {
        this._props.onPlaybackPause();
      }
      if (state === 'stop' && (wasPlaying || wasPause)) {
        this._props.onPlaybackStop();
      }
    };

    /**
     * onTweenerFinish - function that is called when the tweeener finished
     *                   playback for this tween and removemd it from the queue
     *
     */
    TweenClass.onTweenerFinish = function () {
      var _props4 = this._props,
          isReverse = _props4.isReverse,
          repeat = _props4.repeat,
          isReverseOnRepeat = _props4.isReverseOnRepeat,
          onPlaybackComplete = _props4.onPlaybackComplete;

      var count = this._repeatCount;

      onPlaybackComplete(!isReverse, count, repeat - count);

      this.reset();

      if (repeat - count > 0) {
        var value = isReverseOnRepeat;
        // if `value` is `array`, parse it
        value = isReverseOnRepeat instanceof Array ? value[count % value.length] : value;
        // if `value` is `function`, parse it
        if (typeof value === 'function') {
          value = value(count);
        }
        if (value) {
          this.reverse();
        }

        this._repeatCount = count + 1;
        this.play();
      }
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     * @overrides @ ClassProto
     */
    TweenClass._extendDefaults = function () {
      // super call
      _mojsUtilClassProto2.default.__mojsClass._extendDefaults.call(this);
      // parse stagger
      var propsKeys = Object.keys(this._props);
      for (var i = 0; i < propsKeys.length; i++) {
        var key = propsKeys[i];
        this._props[key] = (0, _mojsUtilParseStaggerProperty2.default)(this._props[key], this.index);
      }

      // parse `easing`
      this._props.easing = _mojsEasing2.default.parseEasing(this._props.easing);
      // parse `backwardEasing`, fallback to `easing` if
      // `backwardEasing` is `null`/`undefined`
      var _props5 = this._props,
          easing = _props5.easing,
          backwardEasing = _props5.backwardEasing;

      this._props.backwardEasing = backwardEasing != null ? _mojsEasing2.default.parseEasing(backwardEasing) : easing;
    };

    /**
     * Imitate `class` with wrapper
     */
    var Tween = exports.Tween = (0, _mojsUtilClassProto.createClass)(TweenClass);

    exports.default = Tween;
    exports.tweenDefaults = _tweenDefaultsBabel.tweenDefaults;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(1), __webpack_require__(0), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mojs-util-class-proto'), require('mojs-tween'), require('mojs-util-parse-stagger-property'), require('mojs-util-units-regexp'), require('mojs-util-parse-color-to-rgba'), require('./split-delta.babel.js'), require('./parse-number.babel.js'), require('./parse-unit.babel.js'), require('./parse-color.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mojsUtilClassProto, global.mojsTween, global.mojsUtilParseStaggerProperty, global.mojsUtilUnitsRegexp, global.mojsUtilParseColorToRgba, global.splitDeltaBabel, global.parseNumberBabel, global.parseUnitBabel, global.parseColorBabel);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(1), __webpack_require__(0), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.mojsUtilClassProto, global.mojsTween, global.mojsUtilParseStaggerProperty, global.mojsUtilUnitsRegexp, global.mojsUtilParseColorToRgba, global.splitDeltaBabel, global.parseNumberBabel, global.parseUnitBabel, global.parseColorBabel);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports, _mojsUtilClassProto, _mojsTween, _mojsUtilParseStaggerProperty, _mojsUtilUnitsRegexp, _mojsUtilParseColorToRgba, _splitDeltaBabel, _parseNumberBabel, _parseUnitBabel, _parseColorBabel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Delta = undefined;

    var _mojsUtilClassProto2 = _interopRequireDefault(_mojsUtilClassProto);

    var _mojsTween2 = _interopRequireDefault(_mojsTween);

    var _mojsUtilParseStaggerProperty2 = _interopRequireDefault(_mojsUtilParseStaggerProperty);

    var _mojsUtilUnitsRegexp2 = _interopRequireDefault(_mojsUtilUnitsRegexp);

    var _mojsUtilParseColorToRgba2 = _interopRequireDefault(_mojsUtilParseColorToRgba);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    /*
      TODO:
        - rename `target` to `el`
    */

    // map that holds all available parsers
    var parsersMap = {
      number: _parseNumberBabel.parseNumber,
      unit: _parseUnitBabel.parseUnit,
      color: _parseColorBabel.parseColor
    };

    /* ------------------ */
    /* The `Delta` class  */
    /* ------------------ */

    var DeltaClass = (0, _mojsUtilClassProto.extendClass)(_mojsUtilClassProto2.default);
    var Super = _mojsUtilClassProto2.default.__mojsClass;

    /**
     * `init` - function init the class.
     *
     * @extends @ClassProto
     * @public
     */
    DeltaClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // super call
      Super.init.call(this, o);
      // save target
      var _props = this._props,
          target = _props.target,
          supportProps = _props.supportProps,
          _props$customProperti = _props.customProperties,
          customProperties = _props$customProperti === undefined ? {} : _props$customProperti,
          key = _props.key;

      // if the `isSkipRender` property is set, set the property on
      // `supportProps` otherwise set is as ususal on the `target` object
      this._target = customProperties[key] && customProperties[key].isSkipRender ? supportProps : target;
      // parse delta
      this._parseDelta();
      // set up the update function acording to the delta type
      this.update = this['_upd_' + this._delta.type];
      // set up the tween
      this._setupTween();
    };

    /**
     * `_upd_number` - function to update `number` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_number = function (ep, p) {
      var _delta = this._delta,
          curve = _delta.curve,
          delta = _delta.delta,
          start = _delta.start;
      var key = this._props.key;


      this._target[key] = curve === undefined ? start + ep * delta : curve(p) * start + p * delta;

      return this;
    };

    /**
     * `_upd_unit` - function to update `unit` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_unit = function (ep, p) {
      var _delta2 = this._delta,
          curve = _delta2.curve,
          delta = _delta2.delta,
          start = _delta2.start,
          unit = _delta2.unit;
      var key = this._props.key;


      var value = curve === undefined ? start + ep * delta : curve(p) * start + p * delta;

      this._target[key] = '' + value + unit;

      return this;
    };

    /**
     * `_upd_color` - function to update `color` delta.
     *
     * @private
     * @param {Number} Eased progress.
     * @param {Number} Progress.
     * @param {Boolean} If forward update direction.
     * @returns {Object} This delta.
     */
    DeltaClass._upd_color = function (ep, p) {
      var _delta3 = this._delta,
          curve = _delta3.curve,
          delta = _delta3.delta,
          start = _delta3.start;
      var key = this._props.key;


      if (curve === undefined) {
        var r = start.r + ep * delta.r;
        var g = start.g + ep * delta.g;
        var b = start.b + ep * delta.b;
        var a = start.a + ep * delta.a;
        this._target[key] = 'rgba(' + (r | 0) + ', ' + (g | 0) + ', ' + (b | 0) + ', ' + a + ')';
      } else {
        var curveP = curve(p);
        var _r = curveP * start.r + p * delta.r;
        var _g = curveP * start.g + p * delta.g;
        var _b = curveP * start.b + p * delta.b;
        var _a = curveP * start.a + p * delta.a;
        this._target[key] = 'rgba(' + (_r | 0) + ', ' + (_g | 0) + ', ' + (_b | 0) + ', ' + _a + ')';
      }

      return this;
    };

    /**
     * `_setupTween` - function to set up tween if needed.
     */
    DeltaClass._setupTween = function () {
      var _this = this;

      var tweenOptions = this._delta.tweenOptions;

      // set up tween if `tweenOptions` is set
      if (tweenOptions === undefined) {
        return;
      }

      // create tween with tween options
      this.tween = new _mojsTween2.default(Object.assign({}, tweenOptions, {
        index: this.index,
        // send `onUpdate` function to call the `this.update` function
        // and envoke previous `onUpdate`
        onUpdate: function (ep, p, isForward) {
          _this.update(ep, p, isForward);
          // envoke old `onUpdate` if is present
          if (tweenOptions.onUpdate !== undefined) {
            tweenOptions.onUpdate(ep, p, isForward);
          }
        }
      }));
    };

    /**
     * `_declareDefaults` - function to declare defaults.
     *
     * @extends @ClassProto
     * @private
     */
    DeltaClass._declareDefaults = function () {
      this._defaults = {
        key: null,
        object: null,
        customProperties: {},
        target: null,
        supportProps: null
      };
    };

    /**
     * `_parseDelta` - function to parse delta.
     *
     * @private
     */
    DeltaClass._parseDelta = function () {
      var _props2 = this._props,
          key = _props2.key,
          customProperties = _props2.customProperties;

      var record = customProperties[key];

      return record != null && record.type != null ? this._parseByCustom() : this._parseByGuess();
    };

    /**
     * `_parseByGuess` - function to parse delta by guess.
     *
     * @private
     */
    DeltaClass._parseByGuess = function () {
      var _props3 = this._props,
          key = _props3.key,
          object = _props3.object;

      var split = this._getSplit(object);
      // try to parse `start`/`end` as colors first, if ok - this is a color delta
      var startColor = (0, _mojsUtilParseColorToRgba2.default)(split.start);
      var endColor = (0, _mojsUtilParseColorToRgba2.default)(split.end);
      if (!startColor.isError && !endColor.isError) {
        this._delta = (0, _parseColorBabel.parseColor)(key, split);
        return;
      }
      // convert the delta properties to string and check if unit is present
      var isUnit = ('' + split.start).match(_mojsUtilUnitsRegexp2.default) || ('' + split.end).toString().match(_mojsUtilUnitsRegexp2.default);

      // parse regarding unit presence
      var parseType = isUnit ? 'unit' : 'number';
      this._delta = parsersMap[parseType](key, split);
    };

    /**
     * `_parseByCustom` - function to parse delta with help of customProperties.
     *
     * @private
     */
    DeltaClass._parseByCustom = function () {
      var _props4 = this._props,
          key = _props4.key,
          object = _props4.object,
          customProperties = _props4.customProperties;


      var customProperty = customProperties[key];
      var type = customProperty.type;


      this._delta = parsersMap[type](key, this._getSplit(object));
    };

    /**
     * `_getSplit` - function to get options split
     *               and parse `stagger` in `start`/`end` properties.
     *
     * @param {Object} Object to split.
     * @return {Object} Split.
     */
    DeltaClass._getSplit = function (object) {
      var split = (0, _splitDeltaBabel.splitDelta)(object);
      // parse the `stagger` in `start`/`end` delta properties
      split.start = (0, _mojsUtilParseStaggerProperty2.default)(split.start, this.index, this._totalItemsInStagger);
      split.end = (0, _mojsUtilParseStaggerProperty2.default)(split.end, this.index, this._totalItemsInStagger);

      return split;
    };

    var Delta = exports.Delta = (0, _mojsUtilClassProto.createClass)(DeltaClass);

    exports.default = Delta;
  });
});

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-class-proto"] = factory();
	else
		root["mojs-util-class-proto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /*
     * Imitate `class` with wrapper.
     *
     * @param {Object} Options object.
     * @returns {Object} Tween instance.
     */
    var createClass = exports.createClass = function (module) {
      var w = function (o) {
        var instance = Object.create(module);
        var result = instance.init(o);

        return result !== undefined ? result : instance;
      };
      w.__mojsClass = module;
      return w;
    };

    /*
     * Imitate `class` extend.
     *
     * @param {Object} `mojs` class to extend.
     * @returns {Object} Successor.
     */
    var extendClass = exports.extendClass = function (Super) {
      return Object.create(Super.__mojsClass);
    };

    /**
     * ClassProto - base class for module.
     * It is needed to:
     *   - declare `_defaults`
     *   - extend `_defaults` by `options` and save result to `_props`
     *   - declare `_vars` after extention
     *   - call `_render` eventually
     */
    var ClassProtoClass = {};

    /**
     * `get` - Method to get a property from `_props`.
     *
     * @public
     * @param {String} Key.
     * @returns {Any} Value from the `_props` by `key`.
     */
    ClassProtoClass.get = function (key) {
      return this._props[key];
    };

    /**
     * `set` - Method to set a property to `_props`.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     */
    ClassProtoClass.set = function (key, value) {
      this._props[key] = value;

      return this;
    };

    /**
     * `setBatch` - Method to set a batch of properties to `_props`.
     *
     * @public
     * @param {Object} Batch properties to set.
     * @return {Object} `this` instance.
     */
    ClassProtoClass.setBatch = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        this._props[key] = obj[key];
      }

      return this;
    };

    /**
     * `setIfNotSet` - function to set a property if it isn't
     *                 present in the initialization options.
     *
     * @public
     * @param {String} Key.
     * @param {Any} Value.
     * @returns {Object} This instance.
     */
    ClassProtoClass.setIfNotSet = function (key, value) {
      if (this._o[key] === undefined) {
        this.set(key, value);
      }

      return this;
    };

    /**
     * `init` - lifecycle initialization function.
     *
     * @private
     */
    ClassProtoClass.init = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // save options
      this._o = _extends({}, o);

      // parse index and delete it from options
      this.index = this._o.index || 0;
      delete this._o.index;
      // parse total items and delete it from options
      this._totalItemsInStagger = this._o.totalItemsInStagger || 1;
      delete this._o.totalItemsInStagger;

      this._declareDefaults();
      this._extendDefaults();
      this._vars();
    };

    /**
     * _declareDefaults - function to declare `_defaults` object.
     *
     * @private
     */
    ClassProtoClass._declareDefaults = function () {
      this._defaults = {};
    };

    /**
     * _extendDefaults - Method to copy `_o` options to `_props` object
     *                  with fallback to `_defaults`.
     * @private
     */
    ClassProtoClass._extendDefaults = function () {
      this._props = _extends({}, this._defaults);

      var keys = Object.keys(this._o);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._o[key];
        // only if value is defined
        if (value !== undefined) {
          this._props[key] = value;
        }
      }
    };

    /**
     * _vars - function do declare `variables` after `_defaults` were extended
     *         by `options` and saved to `_props`
     *
     * @private
     */
    ClassProtoClass._vars = function () {};

    var ClassProto = createClass(ClassProtoClass);

    exports.default = ClassProto;
    exports.ClassProto = ClassProto;
  });
});

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});