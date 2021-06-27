import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import style from './R3CardNeonStyle';
import 'r3-clip-box/dist/r3-clip-box';

let customStyles = css``;

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

  _getDateNow() {
    const date = new Date();
    const day = date.getDate() > 9 
      ? `${date.getDate()}` : `0${date.getDay()}`;
    const month = 
      `${date.getMonth() + 1 > 9 ? '' : '0'}${date.getMonth() + 1}`;

    return `${day}/${month}/${date.getFullYear()}`;
  }

  get _getClipBox() {
    return html`
      <r3-clip-box size="small"></r3-clip-box>
    `;
  }

  get _getDate() {
    const date = this.date ? this.date : this._getDateNow();
    return html`
      <label class="date">${date}</label>
    `;
  }

  get _getTitle() {
    return html`
      <label class="title">${this.title}</label>
    `;
  }

  render() {
    return html`
      <div id="card">
        <div class="content">
          ${this._getTitle}
          ${this._getClipBox}
          ${this._getDate}
        </div>
      </div>
    `;
  }
}