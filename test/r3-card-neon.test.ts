import { html, fixture, expect } from '@open-wc/testing';

import { R3CardNeon } from '../src/R3CardNeon.js';
import '../r3-card-neon.js';

describe('R3CardNeon', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<R3CardNeon>(html`<r3-card-neon title="attribute title"></r3-card-neon>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
