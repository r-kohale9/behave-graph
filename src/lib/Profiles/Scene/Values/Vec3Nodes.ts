import { NodeDescription } from '../../../Nodes/NodeDescription.js';
import { In1Out1FuncNode } from '../../../Nodes/Templates/In1Out1FuncNode.js';
import { In2Out1FuncNode } from '../../../Nodes/Templates/In2Out1FuncNode.js';
import { In3Out1FuncNode } from '../../../Nodes/Templates/In3Out1FuncNode.js';
import { VecElements } from '../Logic/VecElements.js';
import {
  Vec3,
  vec3Add,
  vec3Cross,
  vec3Dot,
  vec3Equals,
  vec3Length,
  vec3Mix,
  vec3Negate,
  vec3Normalize,
  vec3Scale,
  vec3Subtract,
  vec3ToArray
} from './Internal/Vec3.js';

export const Constant = new NodeDescription(
  'math/vec3',
  'Logic',
  'Constant',
  (description, graph) =>
    new In1Out1FuncNode<Vec3, Vec3>(
      description,
      graph,
      'vec3',
      'vec3',
      (a) => a
    )
);

export const Create = new NodeDescription(
  'math/create/vec3',
  'Logic',
  'CREATE',
  (description, graph) =>
    new In3Out1FuncNode<number, number, number, Vec3>(
      description,
      graph,
      'float',
      'float',
      'float',
      'vec3',
      (x, y, z) => new Vec3(x, y, z),
      ['x', 'y', 'z']
    )
);

export const Elements = new NodeDescription(
  'math/elements/vec3',
  'Logic',
  'CREATE',
  (description, graph) =>
    new VecElements<Vec3>(
      description,
      graph,
      'vec3',
      ['x', 'y', 'z'],
      vec3ToArray
    )
);

export const Add = new NodeDescription(
  'math/add/vec3',
  'Logic',
  '+',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, Vec3, Vec3>(
      description,
      graph,
      'vec3',
      'vec3',
      'vec3',
      (a, b) => vec3Add(a, b)
    )
);
export const Subtract = new NodeDescription(
  'math/subtract/vec3',
  'Logic',
  '-',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, Vec3, Vec3>(
      description,
      graph,
      'vec3',
      'vec3',
      'vec3',
      (a, b) => vec3Subtract(a, b)
    )
);
export const Negate = new NodeDescription(
  'math/negate/vec3',
  'Logic',
  '-',
  (description, graph) =>
    new In1Out1FuncNode<Vec3, Vec3>(description, graph, 'vec3', 'vec3', (a) =>
      vec3Negate(a)
    )
);
export const Scale = new NodeDescription(
  'math/scale/vec3',
  'Logic',
  '×',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, number, Vec3>(
      description,
      graph,
      'vec3',
      'float',
      'vec3',
      (a, b) => vec3Scale(a, b)
    )
);
export const Length = new NodeDescription(
  'math/length/vec3',
  'Logic',
  'LENGTH',
  (description, graph) =>
    new In1Out1FuncNode<Vec3, number>(
      description,
      graph,
      'vec3',
      'float',
      (a) => vec3Length(a)
    )
);
export const Normalize = new NodeDescription(
  'math/normalize/vec3',
  'Logic',
  'NORMALIZE',
  (description, graph) =>
    new In1Out1FuncNode<Vec3, Vec3>(description, graph, 'vec3', 'vec3', (a) =>
      vec3Normalize(a)
    )
);
export const Cross = new NodeDescription(
  'math/cross/vec3',
  'Logic',
  'CROSS',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, Vec3, Vec3>(
      description,
      graph,
      'vec3',
      'vec3',
      'vec3',
      (a, b) => vec3Cross(a, b)
    )
);
export const Dot = new NodeDescription(
  'math/dot/vec3',
  'Logic',
  'DOT',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, Vec3, number>(
      description,
      graph,
      'vec3',
      'vec3',
      'float',
      (a, b) => vec3Dot(a, b)
    )
);
export const Mix = new NodeDescription(
  'math/mix/vec3',
  'Logic',
  '÷',
  (description, graph) =>
    new In3Out1FuncNode<Vec3, Vec3, number, Vec3>(
      description,
      graph,
      'vec3',
      'vec3',
      'float',
      'vec3',
      (a, b, t) => vec3Mix(a, b, t),
      ['a', 'b', 't']
    )
);

export const Equal = new NodeDescription(
  'math/equal/vec3',
  'Logic',
  '=',
  (description, graph) =>
    new In2Out1FuncNode<Vec3, Vec3, boolean>(
      description,
      graph,
      'vec3',
      'vec3',
      'boolean',
      (a, b) => vec3Equals(a, b)
    )
);
