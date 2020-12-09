import {
  IdsElement,
  customElement,
  mixin,
  scss
} from '../ids-base/ids-element';
import { IdsEventsMixin } from '../ids-base/ids-events-mixin';
import { IdsKeyboardMixin } from '../ids-base/ids-keyboard-mixin';
import { IdsExampleMixin } from '../ids-base/ids-example-mixin';
import styles from './ids-expandable-area.scss';
import { props } from '../ids-base/ids-constants';

/**
 * IDS Tag Component
 */
@customElement('ids-expandable-area')
@scss(styles)
@mixin(IdsEventsMixin)
@mixin(IdsExampleMixin)
class IdsExpandableArea extends IdsElement {
  constructor() {
    super();
    this.state = {};
    this.expander = this.shadowRoot.querySelector('.ids-expandable-area-expander');
    this.expanderTextDefault = this.shadowRoot.querySelector('[name="expander-text-default"]');
    this.expanderTextExpanded = this.shadowRoot.querySelector('[name="expander-text-expanded"]');
    this.pane = this.shadowRoot.querySelector('.ids-expandable-area-pane');
    this.text = this.expanderText;
    this.setAttribute('role', 'region');
    this.switchState();
    this.handleEvents();
  }

  connectedCallBack() {}

  /**
   * Return the properties we handle as getters/setters
   * @returns {Array} The properties in an array
   */
  static get properties() {
    return [
      props.EXPANDED,
      props.ANIMATED
    ];
  }

  static get observedAttributes() {
    return [props.EXPANDED]
  }

  attributeChangedCallback(name) {
    if (name === props.EXPANDED) {
      this.switchState();
    }
  }

  /**
   * Inner template contents
   * @private
   * @returns {string} The template
   */
  template() {
    return `
      <div class="ids-expandable-area">
        <slot name="header"></slot>
        <div class="ids-expandable-area-pane" data-expanded="false">
          <slot name="pane"></slot>
        </div>
        <a class="ids-expandable-area-expander" href="#0" role="button" aria-expanded="false">
          <slot name="expander-text-default"></slot>
          <slot name="expander-text-expanded" hidden></slot>
        </a>
      </div>
    `;
  }

  switchState() {
    this.state.expanded = this.getAttribute(props.EXPANDED) === 'true' || false;
    this.expander.setAttribute('aria-expanded', this.state.expanded);
    this.pane.setAttribute('data-expanded', this.state.expanded);
    this.expanderTextDefault.hidden = this.state.expanded;
    this.expanderTextExpanded.hidden = !this.state.expanded;

    if (!this.state.expanded) {
      this.collapsePane();
    } else {
      this.expandPane();
    }
  }

  collapsePane() {
    requestAnimationFrame(() => {
      this.pane.style.height = `${this.pane.scrollHeight}px`;
      requestAnimationFrame(() => {
        this.pane.style.height = `0px`;
      });
    });
  }

  expandPane() {
    this.pane.style.height = `${this.pane.scrollHeight}px`;
  }

  handleEvents() {
    this.eventHandlers.addEventListener('click', this.expander, () => {
      this.setAttribute(props.EXPANDED, this.getAttribute(props.EXPANDED) === 'true' ? 'false' : 'true')
    });
  }
}

export default IdsExpandableArea;
