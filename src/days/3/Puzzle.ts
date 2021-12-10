import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const binaries = this.input.split('\n').map((l) => l);
    const binaryLength = binaries[0].split('').length;

    const gammaBinary = [];
    const epsilonBinary = [];

    for (let index = 0; index < binaryLength; index++) {
      // const element = array[index];

      let zeroCount = 0;
      let oneCount = 0;

      binaries.map((binary) => {
        const splittedBinary = binary.split('');
        const actualValue = splittedBinary[index];
        if (actualValue === '0') {
          zeroCount = zeroCount + 1;
        }
        if (actualValue === '1') {
          oneCount = oneCount + 1;
        }
        return binary;
      });

      if (zeroCount > oneCount) {
        gammaBinary.push(0);
        epsilonBinary.push(1);
      } else {
        gammaBinary.push(1);
        epsilonBinary.push(0);
      }
    }

    const gammaBinary1 = `${Number(gammaBinary.join(''))}`;
    const epsilonBinary1 = `${Number(epsilonBinary.join(''))}`;

    const decimalGamma = parseInt(gammaBinary1, 2);
    const decimalEpsilon = parseInt(epsilonBinary1, 2);
    
    
    return `day 3 solution 1 ${decimalGamma * decimalEpsilon}`;
  }

  public getFirstExpectedResult(): string {
    const binaries = this.input.split('\n').map((l) => l);
    const binaryLength = binaries[0].split('').length;

    const gammaBinary = [];
    const epsilonBinary = [];

    for (let index = 0; index < binaryLength; index++) {
      // const element = array[index];

      let zeroCount = 0;
      let oneCount = 0;

      binaries.map((binary) => {
        const splittedBinary = binary.split('');
        const actualValue = splittedBinary[index];
        if (actualValue === '0') {
          zeroCount = zeroCount + 1;
        }
        if (actualValue === '1') {
          oneCount = oneCount + 1;
        }
        return binary;
      });

      if (zeroCount > oneCount) {
        gammaBinary.push(0);
        epsilonBinary.push(1);
      } else {
        gammaBinary.push(1);
        epsilonBinary.push(0);
      }
    }

    const gammaBinary1 = `${Number(gammaBinary.join(''))}`;
    const epsilonBinary1 = `${Number(epsilonBinary.join(''))}`;

    const decimalGamma = parseInt(gammaBinary1, 2);
    const decimalEpsilon = parseInt(epsilonBinary1, 2);
    
    
    return `day 3 solution 1 ${decimalGamma * decimalEpsilon}`;
  }

  public solveSecond(): string {
    const binaries = this.input.split('\n').map((l) => l);
    const binaryLength = binaries[0].split('').length;

    let gammaBinary = binaries;
    let epsilonBinary = binaries;

    for (let index = 0; index < binaryLength; index++) {

      if (gammaBinary.length > 1) {
        const zeroBinaryGamma = gammaBinary.filter(b => b.charAt(index) === '0');
        const oneBinariesGamma = gammaBinary.filter(b => b.charAt(index) === '1');

        if (zeroBinaryGamma.length > oneBinariesGamma.length) {
          gammaBinary = zeroBinaryGamma;
        } else {
          gammaBinary = oneBinariesGamma;
        }
      }

      if (epsilonBinary.length > 1) {
        const zeroBinaryEpsilon = epsilonBinary.filter(b => b.charAt(index) === '0');
        const oneBinariesEpsilon = epsilonBinary.filter(b => b.charAt(index) === '1');

        if (zeroBinaryEpsilon.length <= oneBinariesEpsilon.length) {
          epsilonBinary = zeroBinaryEpsilon;
        } else {
          epsilonBinary = oneBinariesEpsilon;
        }
      }
    }

    const decimalGamma = parseInt(gammaBinary[0], 2);
    const decimalEpsilon = parseInt(epsilonBinary[0], 2);
    
    return `day 3 solution 2 ${decimalGamma * decimalEpsilon}`;
  }

  public getSecondExpectedResult(): string {
    const binaries = this.input.split('\n').map((l) => l);
    const binaryLength = binaries[0].split('').length;

    let gammaBinary = binaries;
    let epsilonBinary = binaries;

    for (let index = 0; index < binaryLength; index++) {

      if (gammaBinary.length > 1) {
        const zeroBinaryGamma = gammaBinary.filter(b => b.charAt(index) === '0');
        const oneBinariesGamma = gammaBinary.filter(b => b.charAt(index) === '1');

        if (zeroBinaryGamma.length > oneBinariesGamma.length) {
          gammaBinary = zeroBinaryGamma;
        } else {
          gammaBinary = oneBinariesGamma;
        }
      }

      if (epsilonBinary.length > 1) {
        const zeroBinaryEpsilon = epsilonBinary.filter(b => b.charAt(index) === '0');
        const oneBinariesEpsilon = epsilonBinary.filter(b => b.charAt(index) === '1');

        if (zeroBinaryEpsilon.length <= oneBinariesEpsilon.length) {
          epsilonBinary = zeroBinaryEpsilon;
        } else {
          epsilonBinary = oneBinariesEpsilon;
        }
      }
    }

    const decimalGamma = parseInt(gammaBinary[0], 2);
    const decimalEpsilon = parseInt(epsilonBinary[0], 2);
    
    return `day 3 solution 2 ${decimalGamma * decimalEpsilon}`;
  }
}
