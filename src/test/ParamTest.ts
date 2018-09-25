import { expect, assert } from 'chai';
import 'mocha';
import { ParamSet, ParamSetSchematic } from '../app/Param/ParamSet';
import { NormalParamSchemtic } from '../app/Param/ParamTmpl';

let paramset = new ParamSet('Test');
let NormalParamName = ['Vehicle',
  'Equip',
  'Project',
  'Config',
  'SysComm'];

describe('paramSet Testing', () => {

  for (const setkey of NormalParamName) {
    const param = paramset[setkey].GetData(0);
    describe(`${setkey} Testing`, () => {
      const pss = ParamSetSchematic[setkey] as NormalParamSchemtic;
      for (const pkey in pss) {
        if (pss.hasOwnProperty(pkey) && !param.hasOwnProperty(pkey)) {
          const pssval = pss[pkey];
          const e = pssval.Default;
          const r = param[pkey];
          it(`${pkey}`, () => {
            assert.strictEqual(r, e);
          })

        }
      }
    })
  }
  // after(function () {
  //     console.log('after.');
  // });

  // beforeEach(function () {
  //     console.log('  beforeEach:');
  // });

  // afterEach(function () {
  //     console.log('  afterEach.');
  // });

});