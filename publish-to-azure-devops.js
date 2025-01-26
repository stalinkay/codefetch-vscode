import { execSync } from 'child_process';
import path from 'path';

// Path to your VSCode extension package
const extensionPath = path.resolve(__dirname, 'path/to/your/extension.vsix');

// Azure DevOps organization and project details
const organization = 'your-organization';
const project = 'your-project';
const feed = 'your-feed';

// Personal Access Token for Azure DevOps
const pat = process.env.AZURE_DEVOPS_PAT;

try {
  // Authenticate with Azure DevOps
  execSync(`az devops login --organization https://${organization}.visualstudio.com --token ${pat}`, { stdio: 'inherit' });

  // Publish the extension
  execSync(`az artifacts universal publish --organization https://${organization}.visualstudio.com --project ${project} --feed ${feed} --name your-extension-name --version 1.0.0 --description "Your extension description" --path ${extensionPath}`, { stdio: 'inherit' });

  console.log('Extension published successfully!');
} catch (error) {
  console.error('Failed to publish extension:', error);
}
