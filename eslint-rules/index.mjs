import { noPrivateFolderImports } from './no-private-folder-imports.mjs';

const plugin = {
  rules: {
    'no-private-folder-imports': noPrivateFolderImports,
  },
};

export default plugin;
