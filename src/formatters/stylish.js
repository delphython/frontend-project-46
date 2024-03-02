import _ from 'lodash';

const createIndents = (level) => {
  const indent = '  ';
  const indentSize = level * 2;

  return {
    leftIndent: indent.repeat(indentSize - 1),
    rightIndent: indent.repeat(indentSize - 2),
  };
};

const stringify = (val, depth) => {
  if (!_.isObject(val)) {
    return String(val);
  }
  const indents = createIndents(depth);

  const lines = Object.entries(val).map(([key, value]) => {
    if (!_.isObject(value)) {
      return `${indents.leftIndent}  ${key}: ${value}`;
    }

    return `${indents.leftIndent}  ${key}: ${stringify(value, depth + 1)}`;
  });

  return ['{', ...lines, `${indents.rightIndent}}`].join('\n');
};

const stylish = (tree, depth = 1) => {
  const indents = createIndents(depth);

  const items = tree.map(({type, name, value, value1, value2, children}) => {
    const makeValue = stringify(value, depth + 1);
    switch (type) {
      case 'added':
        return `${indents.leftIndent}+ ${name}: ${makeValue}`;
      case 'deleted':
        return `${indents.leftIndent}- ${name}: ${makeValue}`;
      case 'changed':
        return `${indents.leftIndent}- ${name}: ${stringify(value1, depth + 1)}\n${indents.leftIndent}+ ${name}: ${stringify(value2, depth + 1)}`;
      case 'unchanged':
        return `${indents.leftIndent}  ${name}: ${makeValue}`;
      case 'nested':
        return `${indents.leftIndent}  ${name}: ${stylish(children, depth + 1)}`;
      default:
        throw new Error('This type is not in use.');
    }
  });
  return ['{', ...items, `${indents.rightIndent}}`].join('\n');
};

export default stylish;
