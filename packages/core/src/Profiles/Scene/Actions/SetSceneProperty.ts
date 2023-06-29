import { makeFlowNodeDefinition } from '../../../Nodes/NodeDefinitions.js';
import { IScene } from '../Abstractions/IScene.js';

export const SetSceneProperty = (valueTypeNames: string[]) =>
  valueTypeNames.map((valueTypeName) =>
    makeFlowNodeDefinition({
      typeName: `scene/set/${valueTypeName}`,
      in: {
        jsonPath: 'string',
        value: valueTypeName,
        flow: 'flow'
      },
      out: {
        flow: 'flow'
      },
      initialState: undefined,
      triggered: ({ commit, read, graph: { getDependency } }) => {
        const scene = getDependency<IScene>('scene');
        scene.setProperty(read('jsonPath'), valueTypeName, read('value'));
        commit('flow');
      }
    })
  );
