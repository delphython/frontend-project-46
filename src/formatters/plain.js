import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof (value) === 'string' ? `'${value}'` : String(value);
};

const plain = (tree) => {
  const iter = (currentValue, path) => {
    const lines = currentValue
      .filter(({ type }) => type !== 'unchanged')
      .map(({
        type, name, value, value1, value2, children,
      }) => {
        const keys = [...path, name];
        const property = keys.join('.');

        switch (type) {
          case 'added':
            return `Property '${property}' was added with value: ${stringify(value)}`;
          case 'deleted':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
          case 'nested':
            return iter(children, keys);
          default:
            throw new Error('This type is not in use.');
        }
      });
    return lines.join('\n');
  };

  return iter(tree, []);
};

export default plain;
