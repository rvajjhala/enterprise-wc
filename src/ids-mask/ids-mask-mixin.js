import maskAPI from './ids-mask-global';
import { props } from '../ids-base/ids-constants';

const MASK_PROPS = [
  props.MASK,
  props.MASK_OPTIONS
];

/**
 * Adds validation to any input field
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsMaskMixin = (superclass) => class extends superclass {
  constructor() {
    super();
    this.maskState = {};
  }

  static get properties() {
    if (Array.isArray(super.properties)) {
      return super.properties.concat(MASK_PROPS);
    }
    return MASK_PROPS;
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    // If combined with the events mixin, handle events
    if (super.handledEvents) {
      this.handleMaskEvents();
    }
    this.processMaskWithCurrentValue();
  }

  /**
   * @readonly
   * @returns {IdsMask} reference to a global IDS Mask instance
   */
  get maskAPI() {
    return maskAPI;
  }

  /**
   * @returns {object} defined Mask options
   */
  get maskOptions() {
    return this.maskState.options;
  }

  /**
   * @param {object} val incoming Mask options
   */
  set maskOptions(val) {
    if (typeof val === 'object') {
      this.maskState.options = val;
    }
  }

  /**
   * Retrieves the currently-stored mask pattern.
   * @returns {Function|Array<string|RegExp>} representing the stored mask pattern
   */
  get mask() {
    return this.maskState.pattern;
  }

  /**
   * Sets the Mask pattern to be used.
   * @param {string|Function|Array<string|RegExp>} val the mask pattern on which to conform input
   */
  set mask(val) {
    let trueVal;

    // In cases where the mask is a string (Legacy Soho Mask), the string is automatically converted
    // to an array containing regex patterns.
    // In cases where the mask is a function, the function call is stored and called when the mask
    // needs to be processed.
    if (Array.isArray(val) || typeof val === 'function') {
      trueVal = val;
    } else if (typeof val === 'string') {
      trueVal = maskAPI.convertPatternFromString(val);
    }

    this.maskState.pattern = trueVal;
  }

  handleMaskEvents() {
    // If combined with the events mixin, handle events
    if (!super.handledEvents) {
      return;
    }

    this.onEvent('input', this.input, () => {
      this.processMaskWithCurrentValue();
    });
  }

  /**
   * Uses an input value and pattern options to process a masked string.
   * @param {string} rawValue the value to be checked for masking.
   * @param {IdsMaskOptions} opts various options that can be passed to the masking process.
   * @returns {object} the result of the mask
   */
  processMask(rawValue, opts) {
    return maskAPI.process(rawValue, opts);
  }

  /**
   * Uses currently defined attributes to process a masked string
   * @returns {object} the result of the mask
   */
  processMaskWithCurrentValue() {
    if (!this.value) {
      return {
        originalValue: this.value,
        maskResult: false
      };
    }

    console.log(this.value);
    return this.processMask(this.value, this.maskOptions);
  }
};

export default IdsMaskMixin;
