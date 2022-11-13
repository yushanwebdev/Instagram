const {
  makeMetroConfig,
  resolveUniqueModule,
  exclusionList,
} = require('@rnx-kit/metro-config');
const {
  CyclicDependencies,
} = require('@rnx-kit/metro-plugin-cyclic-dependencies-detector');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {
  DuplicateDependencies,
} = require('@rnx-kit/metro-plugin-duplicates-checker');
const {MetroSerializer} = require('@rnx-kit/metro-serializer');

const [reactIsPath, reactIsExcludePattern] = resolveUniqueModule('react-is');
const additionalExclusions = [reactIsExcludePattern];
const blockList = exclusionList(additionalExclusions);

module.exports = makeMetroConfig({
  projectRoot: __dirname,
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
    extraNodeModules: {
      'react-is': reactIsPath,
      blockList,
    },
  },
  serializer: {
    customSerializer: MetroSerializer([
      DuplicateDependencies(),
      CyclicDependencies({
        includeNodeModules: false,
        linesOfContext: 1,
        throwOnError: true,
      }),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});
