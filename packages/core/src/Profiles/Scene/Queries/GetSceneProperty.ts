import { makeFunctionNodeDefinition } from '../../../Nodes/NodeDefinitions.js';
import { IScene } from '../Abstractions/IScene.js';

export const GetSceneProperty = (valueTypeNames: string[]) =>
  valueTypeNames.map((valueTypeName) =>
    makeFunctionNodeDefinition({
      typeName: `scene/get${valueTypeName}`,
      in: {
        jsonPath: 'string'
      },
      out: {
        value: valueTypeName
      },
      exec: ({ graph: { getDependency }, read, write }) => {
        const scene = getDependency<IScene>('scene');
        const propertyValue = scene.getProperty(
          read('jsonPath'),
          valueTypeName
        );
        write('value', propertyValue);
      }
    })
  );
