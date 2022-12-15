import { Graph } from '../../Graphs/Graph';
import { Socket } from '../../Sockets/Socket';
import { FunctionNode } from '../FunctionNode';
import { NodeDescription } from '../Registry/NodeDescription';

export class In5Out1FuncNode<
  In1,
  In2,
  In3,
  In4,
  In5,
  Out1
> extends FunctionNode {
  constructor(
    description: NodeDescription,
    graph: Graph,
    inputValueTypes: string[],
    outputValueType: string,
    public readonly evalFunc: (a: In1, b: In2, c: In3, d: In4, e: In5) => Out1,
    public readonly inputNames: string[] = ['a', 'b', 'c', 'd', 'e']
  ) {
    if (inputValueTypes.length !== 5) {
      throw new Error(
        `inputValueTypes of ${description.typeName}  must have a length of 5, it is instead ${inputValueTypes.length}`
      );
    }
    if (inputNames.length !== 5) {
      throw new Error(
        `inputNames of ${description.typeName}  must have a length of 5, it is instead ${inputNames.length}`
      );
    }
    super(
      description,
      graph,
      [
        new Socket(inputValueTypes[0], inputNames[0]),
        new Socket(inputValueTypes[1], inputNames[1]),
        new Socket(inputValueTypes[2], inputNames[2]),
        new Socket(inputValueTypes[3], inputNames[3]),
        new Socket(inputValueTypes[4], inputNames[4])
      ],
      [new Socket(outputValueType, 'result')],
      () => {
        this.writeOutput(
          'result',
          this.evalFunc(
            this.readInput(inputNames[0]),
            this.readInput(inputNames[1]),
            this.readInput(inputNames[2]),
            this.readInput(inputNames[3]),
            this.readInput(inputNames[4])
          )
        );
      }
    );
  }
}
