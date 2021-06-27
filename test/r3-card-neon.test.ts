import { html, fixture, expect, assert } from '@open-wc/testing';
import { css } from 'lit';

import { R3CardNeon } from '../src/R3CardNeon.js';
import '../r3-card-neon.js';

describe('R3CardNeon', () => {
  describe('Default values', async () => {
    it('Props value', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);

      expect(el.customStyle).to.equal( css`` );
      assert.typeOf(el.customStyle, 'Object');

      expect(el.date).to.equal('');
      assert.typeOf(el.date, 'String');

      expect(el.image).to.equal('');
      assert.typeOf(el.image, 'String');

      expect(el.info).to.equal('');
      assert.typeOf(el.info, 'String');

      expect(el.title).to.equal('');
      assert.typeOf(el.title, 'String');

      expect(el.user).to.equal('');
      assert.typeOf(el.user, 'String');

      expect(el.variant).to.equal('default');
      assert.typeOf(el.variant, 'String');
    });

    it('Empty label in dom', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);
      const label = el.shadowRoot?.querySelector('#card label');
      expect(label?.textContent).to.equal('');
    });

    it('Empty user in dom', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);
      const r3ClipBox = el.shadowRoot?.querySelector('#card r3-clip-box');
      const labelClip = r3ClipBox?.shadowRoot?.querySelector('#clip label');
      expect(labelClip?.textContent).to.equal('NA');
    });

    it('Date now in dom', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon></r3-card-neon>`);
      const date = el._getDateNow();
      const labelDate = el.shadowRoot?.querySelector('#card .date');
      expect(labelDate?.textContent).to.equal(date);
    });
  });

  describe('Change value in props', () => {
    it('Date now in dom', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon date="06/01/2222"></r3-card-neon>`);
      const labelDate = el.shadowRoot?.querySelector('#card .date');
      expect(labelDate?.textContent).to.equal('06/01/2222');
    });

    it('Custom User', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon user="Asuna X"></r3-card-neon>`);
      const r3ClipBox = el.shadowRoot?.querySelector('#card r3-clip-box');
      const labelClip = r3ClipBox?.shadowRoot?.querySelector('#clip label');
      expect(labelClip?.textContent).to.equal('AX');
    });

    it('Large text in dom', async () => {
      const el = await fixture<R3CardNeon>(html`
        <r3-card-neon
          image="https://i.pinimg.com/originals/8a/ce/a9/8acea9261c892e75b0651de1d4f4e0e1.jpg" 
          title="CUSTOM TITLE ksdjlskjdal"
        ></r3-card-neon>
      `);
      const title = el.shadowRoot?.querySelector('.title');
      expect(title?.textContent).to.equal('CUSTOM TITLE ks...');
    });

    it('Get event', async () => {
      const el = await fixture<R3CardNeon>(html`<r3-card-neon user="Asuna X"></r3-card-neon>`);
      el._dispatchEvent();
      el.addEventListener('eventCardSelect', (detail) => {
        expect(el.user).to.equal(detail);
      });
    });
  });
});
