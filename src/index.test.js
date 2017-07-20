/* eslint-disable max-len */
import { expect } from 'chai';
import { encodeRailFenceCipher, decodeRailFenceCipher } from './index';

describe('Solution', () => {
  describe('Some simple tests', () => {
    it('should "" encode to ""', () => {
      expect(encodeRailFenceCipher('', 3)).to.be.equal('');
    });
    it('should "a" encode to "a"', () => {
      expect(encodeRailFenceCipher('a', 3)).to.be.equal('a');
    });
    it('should "abc" encode to "abc"', () => {
      expect(encodeRailFenceCipher('abc', 3)).to.be.equal('abc');
    });
    it('should "Hello, World!" encode to "Hoo!el,Wrdl l"', () => {
      expect(encodeRailFenceCipher('Hello, World!', 3)).to.be.equal('Hoo!el,Wrdl l');
    });
    it('should "Hoo!el,Wrdl l" decode to "Hello, World!"', () => {
      expect(decodeRailFenceCipher('Hoo!el,Wrdl l', 3)).to.be.equal('Hello, World!');
    });
  });
  describe('Sipher with 3 rails', () => {
    /*
    W . . . E . . . C . . . R . . . L . . . T . . . E (07)
    . E . R . D . S . O . E . E . F . E . A . O . C . (12)
    . . A . . . I . . . V . . . D . . . E . . . N . . (06)
    */
    it('should "WEAREDISCOVEREDFLEEATONCE" encode to "WECRLTEERDSOEEFEAOCAIVDEN"', () => {
      expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).to.be.equal('WECRLTEERDSOEEFEAOCAIVDEN');
    });
    it('should "WECRLTEERDSOEEFEAOCAIVDEN" decode to "WEAREDISCOVEREDFLEEATONCE"', () => {
      expect(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).to.be.equal('WEAREDISCOVEREDFLEEATONCE');
    });
  });
  describe('Sipher with 4 rails', () => {
    /*
    W . . . . . I . . . . . R . . . . . E . . . . . E (5)
    . E . . . D . S . . . E . E . . . E . A . . . C . (8)
    . . A . E . . . C . V . . . D . L . . . T . N . . (8)
    . . . R . . . . . O . . . . . F . . . . . O . . . (4)
    */
    it('should "WEAREDISCOVEREDFLEEATONCE" encode to "WIREEEDSEEEACAECVDLTNROFO"', () => {
      expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4)).to.be.equal('WIREEEDSEEEACAECVDLTNROFO');
    });
    it('should "WECRLTEERDSOEEFEAOCAIVDEN" decode to "WEAREDISCOVEREDFLEEATONCE"', () => {
      expect(decodeRailFenceCipher('WIREEEDSEEEACAECVDLTNROFO', 4)).to.be.equal('WEAREDISCOVEREDFLEEATONCE');
    });
  });
  describe('Sipher with 5 rails', () => {
    /*
    W . . . . . . . C . . . . . . . L . . . . . . . E (4)
    . E . . . . . S . O . . . . . F . E . . . . . C . (6)
    . . A . . . I . . . V . . . D . . . E . . . N . . (6)
    . . . R . D . . . . . E . E . . . . . A . O . . . (6)
    . . . . E . . . . . . . R . . . . . . . T . . . . (3)
    */
    it('should "WEAREDISCOVEREDFLEEATONCE" encode to "WCLEESOFECAIVDENRDEEAOERT"', () => {
      expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 5)).to.be.equal('WCLEESOFECAIVDENRDEEAOERT');
    });
    it('should "WECRLTEERDSOEEFEAOCAIVDEN" decode to "WEAREDISCOVEREDFLEEATONCE"', () => {
      expect(decodeRailFenceCipher('WCLEESOFECAIVDENRDEEAOERT', 5)).to.be.equal('WEAREDISCOVEREDFLEEATONCE');
    });
  });
  describe('Sipher with 6 rails', () => {
    /*
    W . . . . . . . . . V . . . . . . . . . T . . . . (3)
    . E . . . . . . . O . E . . . . . . . A . O . . . (5)
    . . A . . . . . C . . . R . . . . . E . . . N . . (5)
    . . . R . . . S . . . . . E . . . E . . . . . C . (5)
    . . . . E . I . . . . . . . D . L . . . . . . . E (5)
    . . . . . D . . . . . . . . . F . . . . . . . . . (3)
    */
    it('should "WEAREDISCOVEREDFLEEATONCE" encode to "WVTEOEAOACRENRSEECEIDLEDF"', () => {
      expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 6)).to.be.equal('WVTEOEAOACRENRSEECEIDLEDF');
    });
    it('should "WECRLTEERDSOEEFEAOCAIVDEN" decode to "WEAREDISCOVEREDFLEEATONCE"', () => {
      expect(decodeRailFenceCipher('WVTEOEAOACRENRSEECEIDLEDF', 6)).to.be.equal('WEAREDISCOVEREDFLEEATONCE');
    });
  });
  describe('random tests', () => {
    const a = 'ruiauq mciije r musteu evpta dtt ainminAet oai kfanieeosddeg dr cnesosruc,ferrtefelme    opD miopminaiiup  ce fubpetdqts nmuai!re  osa s r! iv !ui nienis.ianteiiaseltoim sP ea r pemtatVairscas ie,lseioete nruu uxe a ei osextir at itiu v toori r';
    const b = 'risumorci piaaDmasupiV qonti  aaem it,c imli uesieppejm  iel ro ec erfeat e eemtf  uruPnsrbsrtep uefemuu,ti  cdoueuqtxvrtlepsse to saasna  emiednuiitcae t ito r!nsadraei eixng .tme siidoirndsn Asaeareo it tesn i e  iroiritoan!uioia !ut fi   kvv';
    it('should encode', () => {
      expect(encodeRailFenceCipher(a, 48)).to.be.equal(b);
    });
    it('should decode', () => {
      expect(decodeRailFenceCipher(b, 48)).to.be.equal(a);
    });
  });
});
