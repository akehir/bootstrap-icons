const path = require('path');

// Shared configuration for all projects. Each project runs with its own
// rootDir, tsconfig.spec.json and src/setup-jest.ts (zoneless TestBed init).
const projectDefaults = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  collectCoverage: true,
};

// The example apps import the library from the published build output,
// mirroring the "paths" mapping in the root tsconfig.json.
const exampleAppDefaults = {
  ...projectDefaults,
  moduleNameMapper: {
    '^@triangular/bootstrap-icons/icons$':
      '<rootDir>/../../dist/bootstrap-icons/icons/index.mjs',
    '^@triangular/bootstrap-icons$':
      '<rootDir>/../../dist/bootstrap-icons/fesm2022/triangular-bootstrap-icons.mjs',
  },
};

module.exports = {
  coverageReporters: ['html', 'text-summary'],
  projects: [
    {
      ...projectDefaults,
      displayName: 'bootstrap-icons-lib',
      rootDir: path.join(__dirname, 'projects/bootstrap-icons-lib'),
      coverageDirectory: path.join(__dirname, 'coverage/bootstrap-icons-lib'),
      collectCoverageFrom: ['src/lib/**/*.ts'],
    },
    {
      ...exampleAppDefaults,
      displayName: 'example-app',
      rootDir: path.join(__dirname, 'projects/example-app'),
      coverageDirectory: path.join(__dirname, 'coverage/example-app'),
      collectCoverageFrom: ['src/app/**/*.ts'],
    },
    {
      ...exampleAppDefaults,
      displayName: 'example-app-standalone',
      rootDir: path.join(__dirname, 'projects/example-app-standalone'),
      coverageDirectory: path.join(
        __dirname,
        'coverage/example-app-standalone'
      ),
      collectCoverageFrom: ['src/app/**/*.ts'],
    },
  ],
};
