import stylish from './stylish.js';
import plain from './plain.js';
import jsonf from './jsonf.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    case 'json': {
      return jsonf(tree);
    }
    default:
      throw new Error('This formatting is not in use.');
  }
};

export default format;