// test/func/index.test.js

import { expect } from 'chai';

import { readFileSync } from 'fs';

import { version } from '../../dist/esm/index.js';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

describe('The ES module distribution', function () {
  it('should have the same version as package.json', function () {
    expect(version).to.equal(pkg.version);
  });
});
