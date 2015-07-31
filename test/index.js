/**
 * Author  : Ramesh R
 * Created : 7/31/2015 11:09 PM
 * ----------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * ----------------------------------------------------------------------
 */

'use strict';

var utils = require('../'),
    assert = require('assert');

var uid = utils.getUid();
utils.log(uid);
assert.ok(uid != null, 'Uid generated');
