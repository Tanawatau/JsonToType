import * as vscode from "vscode";

import jsonToTs from "json-to-ts";

function fixJsonKeys(jsonString: string): string {
  jsonString = jsonString.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
  jsonString = jsonString.replace(/,(\s*[}\]])/g, "$1");
  return jsonString;
}

function convertFunction(rawJson: any) {
  let json: any;
  try {
    json = JSON.parse(rawJson);
  } catch (error) {
    let fixedjson = fixJsonKeys(rawJson);
    json = JSON.parse(fixedjson);
  }
  const interfaces = jsonToTs(json);
  const types = interfaces.map((interfaceDef) => interfaceDef.replace(/^interface\s+(\w+)\s*{/, "type $1 = {")).join("\n\n");
  return types;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("jsontotype.convert", async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      try {
        const json = await vscode.env.clipboard.readText();
        if (!json) {
          return;
        }
        const converted = convertFunction(json);
        editor.edit((editBuilder) => {
          editBuilder.replace(editor.selection, converted);
        });
      } catch (error) {}
    } else {
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
