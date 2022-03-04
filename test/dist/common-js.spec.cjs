// test/func/index.test.js

const { expect } = require('chai');

const { version } = require('../../dist/cjs');
const pkg = require('../../package.json');

describe('The Common JS module distribution', function () {
  it('should have the same version as package.json', function () {
    expect(version).to.equal(pkg.version);
  });
});
