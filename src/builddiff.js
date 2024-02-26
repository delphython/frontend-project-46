import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  const result = sortedKeys.map((key) => {
    switch (true) {
      case (!_.has(obj1, key)): 
        return {
          name: key,
          value: obj2[key],
          type: 'added',
        };
      case (!_.has(obj2, key)): 
        return {
          name: key,
          value: obj1[key],
          type: 'deleted',
        };
      case (_.isObject(obj1[key]) && _.isObject(obj2[key])):
        return {
          name: key,
          type: 'nested',
          children: buildDiff(obj1[key], obj2[key]),
        };
      case (obj1[key] !== obj2[key]):
        return {
          name: key,
          value1: obj1[key],
          value2: obj2[key],
          type: 'changed',
        };
      default: return {
        name: key,
        value: obj1[key],
        type: 'unchanged',
      };
    }
  });

  return result;
};

export default buildDiff;
