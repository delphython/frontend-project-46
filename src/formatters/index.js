import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    default:
      throw new Error('This formatting is not in use.');
  }
};

export default format;