import * as vscode from "vscode";
// import { exec } from "child_process";

export function activate(context: vscode.ExtensionContext) {
  // Command 1: Basic Usage
  const disposableBasic = vscode.commands.registerCommand(
    "codefetch.runBasic",
    async () => {
      runCodefetchCommand([""], "Running codefetch with basic usage...");
    },
  );

  // Command 2: Filter by Extensions
  const disposableExtensions = vscode.commands.registerCommand(
    "codefetch.runWithExtensions",
    async () => {
      const extInput = await vscode.window.showInputBox({
        placeHolder: ".ts,.js",
        prompt:
          "Enter file extensions to include (comma separated, e.g. .ts,.js)",
      });
      if (!extInput) {
        vscode.window.showInformationMessage(
          "No extensions provided. Command cancelled.",
        );
        return;
      }
      runCodefetchCommand(
        [`-e ${extInput}`],
        `Filtering by extensions: ${extInput}`,
      );
    },
  );

  // Command 3: Use Prompt
  const disposablePrompt = vscode.commands.registerCommand(
    "codefetch.runPrompt",
    async () => {
      const promptInput = await vscode.window.showInputBox({
        placeHolder: "improve, fix, codegen, or custom prompt file",
        prompt: "Specify a codefetch prompt (built-in or custom).",
      });
      if (!promptInput) {
        vscode.window.showInformationMessage(
          "No prompt provided. Command cancelled.",
        );
        return;
      }
      runCodefetchCommand(
        [`-p ${promptInput}`],
        `Using prompt: ${promptInput}`,
      );
    },
  );

  // Command 4: Configure & Show Options
  const disposableConfigure = vscode.commands.registerCommand(
    "codefetch.configure",
    async () => {
      const quickPickItems: vscode.QuickPickItem[] = [
        {
          label: "--dry-run",
          description: "Preview markdown in console (no file output)",
        },
        {
          label: "--disable-line-numbers",
          description: "Disable line numbers in output",
        },
        { label: "--verbose 2", description: "Enable detailed logs" },
        {
          label: "--project-tree 3",
          description: "Project tree with depth of 3",
        },
        {
          label: "--token-limiter sequential",
          description: "Use sequential token limiting",
        },
        {
          label: "--token-limiter truncated",
          description: "Use truncated token limiting (default)",
        },
      ];

      const selected = await vscode.window.showQuickPick(quickPickItems, {
        placeHolder: "Select codefetch options...",
        canPickMany: true,
      });

      if (!selected || selected.length === 0) {
        vscode.window.showInformationMessage(
          "No options selected. Command cancelled.",
        );
        return;
      }

      const flags = selected.map((item) => item.label);
      runCodefetchCommand(
        flags,
        `Running codefetch with options: ${flags.join(" ")}`,
      );
    },
  );

  context.subscriptions.push(
    disposableBasic,
    disposableExtensions,
    disposablePrompt,
    disposableConfigure,
  );
}

/**
 * Helper function to run codefetch in a VS Code terminal.
 */
function runCodefetchCommand(args: string[], message: string) {
  const terminal = vscode.window.createTerminal("Codefetch");
  terminal.show(true);
  terminal.sendText(`echo "${message}"`);
  terminal.sendText(`npx codefetch ${args.join(" ")}`);
}

export function deactivate() {
  // Cleanup if necessary
}
