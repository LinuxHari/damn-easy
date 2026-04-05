import path from 'path';

export const noPrivateFolderImports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow importing from private `_`-prefixed folders outside their parent directory',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
    messages: {
      privateImport:
        'Cannot import from private folder `{{folder}}` outside its parent directory `{{parent}}`.',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (typeof node.source.value === 'string') {
          checkImport(context, node, node.source.value);
        }
      },
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments.length === 1 &&
          node.arguments[0].type === 'Literal' &&
          typeof node.arguments[0].value === 'string'
        ) {
          checkImport(context, node, node.arguments[0].value);
        }
      },
      ImportExpression(node) {
        if (node.source.type === 'Literal' && typeof node.source.value === 'string') {
          checkImport(context, node, node.source.value);
        }
      },
    };
  },
};

function checkImport(context, node, importPath) {
  if (!importPath.startsWith('.') && !importPath.startsWith('@/')) {
    return;
  }

  const projectRoot = context.cwd || process.cwd();
  const rawImporterPath = context.filename || context.physicalFilename;
  const importerPath = path.isAbsolute(rawImporterPath)
    ? rawImporterPath
    : path.resolve(projectRoot, rawImporterPath);

  let importedPathAbsolute = '';

  if (importPath.startsWith('@/')) {
    importedPathAbsolute = path.resolve(projectRoot, importPath.replace(/^@\//, ''));
  } else {
    importedPathAbsolute = path.resolve(path.dirname(importerPath), importPath);
  }

  const importedDir = path.dirname(importedPathAbsolute);

  if (!importedDir.includes('/_') && !importedDir.includes('\\_')) {
    return;
  }

  const segments = importedDir.split(path.sep);

  let privateFolderIndex = -1;
  let privateFolderName = '';

  for (let i = 0; i < segments.length; i++) {
    if (segments[i].startsWith('_')) {
      privateFolderIndex = i;
      privateFolderName = segments[i];
      break;
    }
  }

  if (privateFolderIndex !== -1) {
    const ownerDirPath = segments.slice(0, privateFolderIndex).join(path.sep);
    const normalizedOwnerDir = path.resolve(ownerDirPath);
    const ownerWithSep = normalizedOwnerDir.endsWith(path.sep)
      ? normalizedOwnerDir
      : normalizedOwnerDir + path.sep;

    if (!importerPath.startsWith(ownerWithSep) && importerPath !== normalizedOwnerDir) {
      context.report({
        node,
        messageId: 'privateImport',
        data: {
          folder: privateFolderName,
          parent: normalizedOwnerDir,
        },
      });
    }
  }
}
