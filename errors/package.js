Package.describe({
  name: 'nghtrieu:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'package support to alert errors',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nguyenhaitrieu10/nghtrieu-errors',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  api.mainModule('errors.js');
});
