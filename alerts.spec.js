const { spawnSync } = require('child_process');

const result = spawnSync(
  'npx',
  ['playwright', 'test', 'tests/alerts.spec.js'],
  {
    stdio: 'inherit',
    shell: true,
  }
);

process.exit(result.status ?? 1);
