# Codefetch for Visual Studio Code

[![npm](https://img.shields.io/npm/v/codefetch-vscode.svg)](https://www.npmjs.com/package/codefetch-vscode) [![Node.js CI status](https://github.com/stalinkay/codefetch-vscode/workflows/Node.js%20CI/badge.svg)](https://github.com/stalinkay/codefetch-vscode/actions) [![Codecov](https://codecov.io/gh/stalinkay/codefetch-vscode/graph/badge.svg)](https://codecov.io/gh/stalinkay/codefetch-vscode)

**Codefetch for VS Code** integrates the powerful [codefetch](https://www.npmjs.com/package/codefetch) CLI into the Visual Studio Code experience, letting you generate Markdown snapshots of your codebase with line numbers, prompts, and more.

## Features

- **Basic Usage**: Create `codefetch/codebase.md` in one click.
- **Advanced Filters**: Include/exclude directories and file extensions.
- **Prompts**: Add built-in or custom prompts (e.g., `-p improve`, `-p fix`).
- **Project Tree**: Visualize your project structure in the markdown output.
- **Minimal UI**: Interact via Command Palette with quick picks or input boxes.

## Installation

1. Open the Extensions panel in VS Code.
2. Search for "Codefetch: Markdown for LLMs" or install from a `.vsix` file.
3. Reload VS Code if prompted.

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Type "Codefetch" to see the following commands:
   - **Basic Usage**: Runs `codefetch` with default settings.
   - **Filter by Extensions**: Prompts for file extensions to filter (e.g., `.ts,.js`).
   - **Use Prompt**: Prompts for a codefetch prompt (e.g., `improve`, `fix`, or custom).
   - **Configure & Show Options**: Select advanced flags like `--dry-run`, `--verbose 2`, or `--project-tree 3`.

## About ACHIEVE with Stalin Kay

For **expert online business insights, AI trends, and actionable strategies**, visit:
[ACHIEVE with Stalin Kay](https://achieve.stalinkay.com)
Or follow on X/Twitter: [@stalinkay](https://x.com/stalinkay).

## Requirements

- Requires Node.js (for `npx`) on your system.
- `codefetch` must be installed globally or be installable via `npx`.

## Extension Development

- Clone the repo and run `npm install`.
- Use `npm run compile` to generate `out/extension.js`.
- Press `F5` in VS Code to launch an Extension Development Host.

## License

[MIT](LICENSE)
