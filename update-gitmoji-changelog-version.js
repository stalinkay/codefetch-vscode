import fs from 'fs';
import path from 'path';

const changelogPath = path.resolve(__dirname, '.gitmoji-changelogrc');

// Read the current changelog configuration
const changelogConfig = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));

// Get the new version from the environment variable set by semantic release
const newVersion = process.env.RELEASE_VERSION;

if (!newVersion) {
  console.error('No release version provided.');
  process.exit(1);
}

// Update the version in the changelog configuration
changelogConfig.project.version = newVersion;

// Write the updated configuration back to the file
fs.writeFileSync(changelogPath, JSON.stringify(changelogConfig, null, 4));

console.log(`Updated .gitmoji-changelogrc to version ${newVersion}`);
