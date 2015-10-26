/**
 * @copyright 2015 Prometheus Research, LLC
 */

import assert from 'power-assert';
import * as pkg from '../index';
import defineStylesheet from '../defineStylesheet';
import styleComponent from '../styleComponent';
import * as Stylesheet from '../Stylesheet';
import * as DOMStylesheet from '../DOMStylesheet';
import * as CSS from '../CSS';

describe('package', function() {

  it('exports some stuff', function() {
    assert(pkg.deafult === undefined);
    assert(pkg.define === defineStylesheet);
    assert(pkg.style === styleComponent);
    assert(pkg.CSS  === CSS);
    assert(pkg.Stylesheet === Stylesheet);
    assert(pkg.DOMStylesheet === DOMStylesheet);
  });
});
