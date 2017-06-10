import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | foo bar', function() {
  setupComponentTest('foo-bar', {
    integration: true
  });

  it('renders', function(done) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#foo-bar}}
    //     template content
    //   {{/foo-bar}}
    // `);
    this.timeout(5000)
    this.render(hbs`<h1> BIG TESTER FOR TESTING </h1>`);
    expect(this.$()).to.have.length(1);
    capture('Simple', done)
  });
});
