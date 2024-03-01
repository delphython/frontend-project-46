import * as yaml from 'js-yaml';

const parsers = (content, formatName) => {
    switch (formatName) {
      case 'json':
        return JSON.parse(content);
      case 'yml':
      case 'yaml':
        return yaml.load(content);
      default:
        throw new Error('Invalid file format! Try supported formats.');
    }
  };

export default parsers;
