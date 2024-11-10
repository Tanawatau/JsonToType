# JSON to TypeScript Type Converter Extension

This Visual Studio Code Extension converts JSON data from the clipboard into TypeScript types and inserts the result directly into the active editor. This tool is useful for developers who work frequently with JSON data and need to quickly convert it into strongly-typed TypeScript definitions.

## Features

- Convert JSON data from the clipboard into TypeScript `type` declarations.

## Usage

1. Copy a valid JSON object to your clipboard.
2. In VS Code, place the cursor where you want to insert the TypeScript type.
3. Open the Command Palette (`Ctrl+Shift+V` or `Cmd+Shift+V` on Mac).
4. The extension will insert the converted TypeScript type at the current cursor position.

## Example

## DEMO
![Demo of the Extension](/asset/demo.gif)

**Input (Clipboard JSON):**
```json
{
  "name": "John",
  "age": 30,
  "active": true
}
```

**Output (Inserted TypeScript type):**
```typescript
type RootObject = {
  name: string;
  age: number;
  active: boolean;
};
```

## Dependencies

- [VS Code Extension API](https://code.visualstudio.com/api)
- [json-to-ts](https://www.npmjs.com/package/json-to-ts)

## Acknowledgements
Special thanks to Marius Alchimavicius for developing the json-to-ts package, which simplifies JSON to TypeScript type conversion.