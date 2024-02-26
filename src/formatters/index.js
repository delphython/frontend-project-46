import stylish from './stylish.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    default:
      throw new Error('This formatting is not in use.');
  }
};

export default format;