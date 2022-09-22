import { Metadata } from '../Graphs/Metadata';
import Socket from '../Sockets/Socket';
import { NodeEvalFunction } from './NodeEvalFunction';

function findSocketByName(sockets: Socket[], name: string): Socket | undefined {
  return sockets.find((socket) => socket.name === name);
}

export default class Node {
  public id: string = '';
  public label: string = '';
  public metadata: Metadata = {};
  public readonly flow: boolean;
  public evaluateOnStartup = false;
  public async = false;
  public interruptableAsync = false;

  constructor(
      public readonly category: string,
      public readonly typeName: string,
      public readonly inputSockets: Socket[],
      public readonly outputSockets: Socket[],
      public readonly evalFunc: NodeEvalFunction,
  ) {
    // determine if this is an eval node
    let areAnySocketsFlowType = false;
    this.inputSockets.forEach((socket) => {
      areAnySocketsFlowType ||= (socket.valueTypeName === 'flow');
    });
    this.outputSockets.forEach((socket) => {
      areAnySocketsFlowType ||= (socket.valueTypeName === 'flow');
    });
    this.flow = areAnySocketsFlowType;
  }

  getInputSocket(socketName: string): Socket {
    const socket = findSocketByName(this.inputSockets, socketName);
    if (socket === undefined) throw new Error(`no input sockets with name: ${socketName} on node ${this.typeName}`);
    return socket;
  }

  getOutputSocket(socketName: string): Socket {
    const socket = findSocketByName(this.outputSockets, socketName);
    if (socket === undefined) throw new Error(`no output socket with name: ${socketName} on node ${this.typeName}`);
    return socket;
  }
}
