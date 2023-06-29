import { NodeCategory } from '../../Nodes/Registry/NodeCategory.js';
import { ValueJSON } from './Graphjson';

export type InputSocketSpecJSON = {
  name: string;
  valueType: string;
  defaultValue?: ValueJSON;
};

export type OutputSocketSpecJSON = {
  name: string;
  valueType: string;
};
export type ConfigurationSpecJSON = {
  name: string;
  valueType: string;
  defaultValue: ValueJSON;
};
export type NodeSpecJSON = {
  type: string;
  category: NodeCategory;
  label: string;
  configuration: ConfigurationSpecJSON[];
  inputs: InputSocketSpecJSON[];
  outputs: OutputSocketSpecJSON[];
};
