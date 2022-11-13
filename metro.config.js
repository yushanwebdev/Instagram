const {makeMetroConfig} = require('@rnx-kit/metro-config');
const {
  CyclicDependencies,
} = require('@rnx-kit/metro-plugin-cyclic-dependencies-detector');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {
  DuplicateDependencies,
} = require('@rnx-kit/metro-plugin-duplicates-checker');
const {MetroSerializer} = require('@rnx-kit/metro-serializer');

module.exports = makeMetroConfig({
  projectRoot: __dirname,
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
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
