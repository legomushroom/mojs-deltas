import Tween from 'mojs-tween';
import Timeline from 'mojs-timeline';

import { extendClass, createClass } from 'mojs-util-class-proto';
import Tweenable from 'mojs-util-tweenable';
import MotionPath from 'mojs-util-motion-path';
import Delta from 'mojs-util-delta';
import separateTweenOptions from 'mojs-util-separate-tween-options';
import parseStaticProperty from 'mojs-util-parse-static-property';

/* ------------------- */
/* The `Deltas` class  */
/* ------------------- */

const DeltasClass = extendClass(Tweenable);
const Super = Tweenable.__mojsClass;

/**
 * `init` - function init the class.
 *
 * @extends @Tweenable
 * @public
 */
DeltasClass.init = function (o = {}) {
  // super call
  Super.init.call(this, o);
  // clone the options
  const options = Object.assign({}, o);
  // get `timeline` options and remove them immediately
  const timelineOptions = options.timeline;
  delete options.timeline;

  // get `customProperties` options and remove them immediately
  this._customProperties = options.customProperties || {};
  this._pipe = this._customProperties.pipe || (() => {});
  this._render = this._customProperties.render || (() => {});
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
DeltasClass._setupTween = function (options = {}) {
  const support = {
    props: this._supportProps,
    pipeObj: this._pipeObj,
  };
  // separate main tween options
  const tweenOptions = separateTweenOptions(options) || {};
  // create tween
  this.tween = new Tween(Object.assign({}, tweenOptions, {
    index: this.index,
    // update plain deltas on update
    // and call the previous `onUpdate` if present
    onUpdate: (ep, p, isForward) => {
      // update plain deltas
      this._upd_deltas(ep, p, isForward);
      // pipe
      this._pipe(this._el, support, ep, p, isForward);
      // render
      this._render(this._el, support, ep, p, isForward);
      // envoke onUpdate if present
      if (tweenOptions.onUpdate !== undefined) {
        tweenOptions.onUpdate(ep, p, isForward);
      }
    },
  }));
};

/**
 * `_setupTimeline` - function to set up main timeline.
 *
 * @param {Object} Timeline options.
 */
DeltasClass._setupTimeline = function (options = {}) {
  this.timeline = new Timeline(Object.assign({}, { index: this.index }, options, {
    onUpdate: (ep, p, isForward) => {
      // envoke onUpdate if present
      if (options.onUpdate !== undefined) {
        options.onUpdate(ep, p, isForward);
      }
    },
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
  const optionsKeys = Object.keys(options);
  // loop thru options and create deltas with objects
  for (let i = 0; i < optionsKeys.length; i++) {
    const key = optionsKeys[i];
    const value = options[key];
    // if value is tatic save it to static props
    if (typeof value !== 'object') {
      // find out property `el`, it can be `supportProps` if the `isSkipRender`
      // is set for the property in the `customProperties`
      const custom = this._customProperties[key];
      const target = (custom && custom.isSkipRender)
        ? this._supportProps
        : this._el;

      const property = parseStaticProperty(
        key,
        value,
        this._customProperties,
        this.index,
        this._totalItemsInStagger,
      );
      this._staticProps[key] = property;
      target[key] = property;
      continue;
    }

    // check the delta type
    let delta;
    if (value.path !== undefined) {
      delta = new MotionPath(Object.assign({}, { el: this._el }, value, {
        supportProps: this._supportProps,
        customProperties: this._customProperties,
        unit: value.unit,
        property: key,
        index: this.index,
      }));
    } else {
      // if value is not motion path, create delta object
      delta = new Delta({
        key,
        target: this._el,
        supportProps: this._supportProps,
        object: value,
        customProperties: this._customProperties,
        index: this.index,
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
  for (let i = 0; i < this._plainDeltas.length; i++) {
    this._plainDeltas[i].update(ep, p, isForward);
  }
};

export const Deltas = createClass(DeltasClass);

export default Deltas;
