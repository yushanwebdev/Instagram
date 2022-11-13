const {makeMetroConfig} = require('@rnx-kit/metro-config');
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
    customSerializer: MetroSerializer([DuplicateDependencies()]),
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
