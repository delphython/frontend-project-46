import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const objKeys1 = _.keys(obj1);
  const objKeys2 = _.keys(obj2);

  const sortedKeys = _.sortBy(_.union(objKeys1, objKeys2));

  const result = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        name: key,
        value: obj2[key],
        type: '+',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        name: key,
        value: obj1[key],
        type: '-',
      };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        name: key,
        type: '_',
        children: buildDiff(obj1[key], obj2[key]),
      };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        name: key,
        value: obj2[key],
        type: ' ',
      };
    }
    return {
      name: key,
      value: obj1[key],
      type: ' ',
    };
  });
  return result;
};

export default buildDiff;
