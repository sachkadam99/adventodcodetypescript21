import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    let count = 0;
    const numbers = this.input.split('\n').map((l) => parseInt(l));
    numbers.reduce((prev, curr): number => {
      if (curr > prev) {
        count = count + 1;
      }
      return curr;
    });
    
    return `day 1 solution 1 ${count}`;
  }
  public solveSecond(): string {
    
    const numbers = this.input.split('\n').map((l) => parseInt(l));
    const size = 3;

    let count = 0;
    let curSum = 0;
    let maxSumSeen = 0;

    for (let index = 0; index < numbers.length; index++) {
      curSum += numbers[index];

      if (index >= size - 1) {
        if (curSum > maxSumSeen) {
          count = count + 1;
        }
        maxSumSeen = curSum;
        curSum -= numbers[index - (size - 1)];
      }
    }
    
    return `day 1 solution 2 => ${count - 1}`;
  }

  public getFirstExpectedResult(): string {
    let count = 0;
    const numbers = this.input.split('\n').map((l) => parseInt(l));
    numbers.reduce((prev, curr): number => {
      if (curr > prev) {
        count = count + 1;
      }
      return curr;
    });
  
    return `day 1 solution 1 ${count}`;
  }
  public getSecondExpectedResult(): string {
    const numbers = this.input.split('\n').map((l) => parseInt(l));
    const size = 3;

    let count = 0;
    let curSum = 0;
    let maxSumSeen = 0;

    for (let index = 0; index < numbers.length; index++) {
      curSum += numbers[index];

      if (index >= size - 1) {
        if (curSum > maxSumSeen) {
          count = count + 1;
        }
        maxSumSeen = curSum;
        curSum -= numbers[index - (size - 1)];
      }
    }
    
    return `day 1 solution 2 => ${count - 1}`;
  }
}
