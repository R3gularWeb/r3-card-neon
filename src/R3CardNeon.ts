/* eslint class-methods-use-this: "off" */
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import style from './R3CardNeonStyle.js';
import 'r3-clip-box/dist/r3-clip-box';

const customStyles = css``;

export class R3CardNeon extends LitElement {
  static styles = [style, customStyles];

  @property({ type: Object, attribute: 'custom-style' })
  customStyle = css``;

  @property({ type: String }) date = '';

  @property({ type: String }) image = '';

  @property({ type: String }) info = '';

  @property({ type: String }) title = '';

  @property({ type: String }) user = '';

  @property({ type: String }) variant = 'default';

  _dispatchEvent() {
    const detail = {
      date: this.date,
      image: this.image,
      info: this.info,
      title: this.title,
      user: this.user,
      variant: this.variant
    }

    this.dispatchEvent(new CustomEvent('eventCardSelect', {
        detail, bubbles: true, composed: true
    }));
  }

  _getDateNow() {
    const date = new Date();
    const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDay()}`;
    const month = `${date.getMonth() + 1 > 9 ? '' : '0'}${date.getMonth() + 1}`;

    return `${day}/${month}/${date.getFullYear()}`;
  }

  get _getClipBox() {
    const user = !this.user ? 'NA' : this.user;
    return html` <r3-clip-box text="${user}" size="small"></r3-clip-box> `;
  }

  get _getDate() {
    const date = this.date ? this.date : this._getDateNow();
    return html` <label class="date">${date}</label> `;
  }

  get _getTitle() {

    const title = this.title.length > 15
      ? this.title.substr(0,15) + '...' 
      : this.title;

    return html` <label class="title">${title}</label> `;
  }

  render() {
    return html`
      <div id="card" style="background-image: url(${this.image});">
        <div id="${this.variant}" class="content" @click="${this._dispatchEvent}">
          ${this._getTitle} ${this._getClipBox} ${this._getDate}
        </div>
      </div>
    `;
  }
}
