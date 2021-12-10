import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const actions = this.input.split('\n').map((l) => l);

    // const actions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8','forward 2'];

    let horizontal = 0;
    let depth = 0;

    actions.map(action => {
      const splitString = action.split(' ');
      const actionName = splitString[0];
      const actionValue = parseInt(splitString[1]);

      switch (actionName) {
        case 'forward':
          horizontal = horizontal + actionValue;
          break;
        case 'up':
          depth = depth - actionValue;
          break;
        case 'down':
          depth = depth + actionValue;
          break;
      
        default:
          break;
      }
      return action;
    });

    return `day 2 solution 1 ${horizontal * depth}`;
  }

  public getFirstExpectedResult(): string {
    const actions = this.input.split('\n').map((l) => l);

    // const actions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8','forward 2'];

    let horizontal = 0;
    let depth = 0;

    actions.map(action => {
      const splitString = action.split(' ');
      const actionName = splitString[0];
      const actionValue = parseInt(splitString[1]);

      switch (actionName) {
        case 'forward':
          horizontal = horizontal + actionValue;
          break;
        case 'up':
          depth = depth - actionValue;
          break;
        case 'down':
          depth = depth + actionValue;
          break;
      
        default:
          break;
      }
      return action;
    });

    return `day 2 solution 1 ${horizontal * depth}`;
  }

  public solveSecond(): string {
    const actions = this.input.split('\n').map((l) => l);

    // const actions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    actions.map(action => {
      const splitString = action.split(' ');
      const actionName = splitString[0];
      const actionValue = parseInt(splitString[1]);

      switch (actionName) {
        case 'forward':
          horizontal = horizontal + actionValue;
          if (aim > 0) {
            depth = depth + (aim * actionValue);
          }
          break;
        case 'up':
          aim = aim - actionValue;
          break;
        case 'down':
          aim = aim + actionValue;
          break;
      
        default:
          break;
      }
      return action;
    });

    return `day 2 solution 2 ${horizontal * depth}`;
  }

  public getSecondExpectedResult(): string {
    const actions = this.input.split('\n').map((l) => l);

    // const actions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    actions.map(action => {
      const splitString = action.split(' ');
      const actionName = splitString[0];
      const actionValue = parseInt(splitString[1]);

      switch (actionName) {
        case 'forward':
          horizontal = horizontal + actionValue;
          if (aim > 0) {
            depth = depth + (aim * actionValue);
          }
          break;
        case 'up':
          aim = aim - actionValue;
          break;
        case 'down':
          aim = aim + actionValue;
          break;
      
        default:
          break;
      }
      return action;
    });

    return `day 2 solution 2 ${horizontal * depth}`;
  }
}
