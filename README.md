### 🏎️ TypeScript Template for competitive programming (Node.js + esbuild + ts-node)

### 📦 Install Dependencies

```bash
npm i -D @types/node esbuild ts-node typescript
```

### ⚙️ Initialize TypeScript

```bash
tsc --init
```

#### `launch.json` for debug

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Debug CP (ts-node)",
			"runtimeExecutable": "node",
			"runtimeArgs": ["-r", "ts-node/register/transpile-only"],
			"program": "${workspaceFolder}/src/main.ts",
			"cwd": "${workspaceFolder}",
			"console": "integratedTerminal",
			"internalConsoleOptions": "neverOpen",
			"env": {
				"DEBUG_FILE_INPUT": "${workspaceFolder}/src/test.txt",
				"TS_NODE_PROJECT": "${workspaceFolder}/tsconfig.json"
			},
			"sourceMaps": true,
			"resolveSourceMapLocations": [
				"${workspaceFolder}/**",
				"!**/node_modules/**"
			]
		}
	]
}
```

#### `tsconfig.json`

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"module": "commonjs",
		"lib": ["ES2024", "DOM"],
		"outDir": "dist",
		"rootDir": "src",
		"strict": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"skipLibCheck": true
	},
	"include": ["src/**/*", "*.ts"]
}
```

---

### 🚀 NPM Scripts

```json
{
	"scripts": {
		"test": "ts-node src/main.ts < src/test.txt",
		"copy": "npx esbuild src/main.ts --bundle --platform=node --target=node18 --outfile=src/main.js --minify && cat src/main.js | pbcopy && rm src/main.js",
		"bundle": "npx esbuild src/main.ts --bundle --platform=node --target=node18 --outfile=src/main.js --minify",
		"stress": "chmod +x src/scripts/benchmark.sh && ./src/scripts/benchmark.sh"
	}
}
```

---

### 📝 VSCode Snippet — Codeforces TypeScript Template

Create file:
`~/.config/Code/User/snippets/typescript.json`

Add:

```json
{
	"TypeScript Template": {
		"prefix": "ts",
		"body": [
			"import * as fs from \"fs\";",
			"",
			"const readInput = () => {",
			"    const debug = process.env.DEBUG_FILE_INPUT;",
			"    if (debug) {",
			"        return fs.readFileSync(debug, \"utf-8\");",
			"    }",
			"    return fs.readFileSync(0, \"utf-8\");",
			"};",
			"",
			"const data = readInput();",
			"const tokens = data.split(/\\s+/).filter(Boolean);",
			"const lines = data.split(/\\r?\\n/);",
			"",
			"let t = 0;",
			"let l = 0;",
			"",
			"const read = () => tokens[t++];",
			"const int = () => Number(read());",
			"const float = () => parseFloat(read());",
			"const bigint = () => BigInt(read());",
			"const line = () => lines[l++];",
			"const readSafe = () => (t >= tokens.length ? null : tokens[t++]);",
			"const readlineSafe = () => (l >= lines.length ? null : lines[l++]);",
			"const has = () => t < tokens.length;",
			"const array = (n: number) => Array.from({ length: n }, () => int());",
			"const intline = () => line().trim().split(/\\s+/).map(Number);",
			"",
			"let out = '';",
			"const write = (...s: any[]) => (out += s.join(' ') + \"\\n\");",
			"const flush = () => process.stdout.write(out);",
			"",
			"function solve() {",
			"    $0",
			"}",
			"",
			"function main() {",
			"    solve();",
			"    flush();",
			"}",
			"",
			"main();"
		],
		"description": "Codeforces TypeScript template with fast I/O + debug input support"
	}
}
```

- _Create a test.txt and main.ts file in src/_

### 📝 VSCode Settings

```json
{
	// ---- Editor ----
	"editor.autoClosingBrackets": "always",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},
	"editor.cursorStyle": "line",
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.fontFamily": "Lab Mono",
	"editor.fontWeight": "599",
	"editor.formatOnSave": true,
	"editor.indentSize": "tabSize",
	"editor.largeFileOptimizations": true,
	"editor.lineHeight": 1.25,
	"editor.tabCompletion": "on",
	"editor.tabSize": 4,
	"editor.unicodeHighlight.ambiguousCharacters": false,
	"editor.wordWrap": "on",

	// ---- File Associations ----
	"files.associations": {
		"*.css": "tailwindcss"
	},

	// ---- File Watcher / Search Exclude ----
	"files.watcherExclude": {
		"**/node_modules": true,
		"**/.git": true,
		"**/dist/**": true,
		"**/build/**": true
	},
	"search.exclude": {
		"**/node_modules": true,
		"**/.git": true,
		"**/dist/**": true,
		"**/build/**": true
	},

	// ---- Explorer / Workbench UI ----
	"explorer.compactFolders": false,
	"explorer.confirmDelete": false,
	"explorer.confirmPasteNative": false,
	"explorer.confirmDragAndDrop": false,
	"workbench.enableExperiments": false,
	"workbench.fontAliasing": "none",
	"workbench.tree.indent": 20,
	"workbench.tree.renderIndentGuides": "none",

	// ---- Terminal ----
	"terminal.integrated.cursorStyle": "line",
	"terminal.integrated.fontSize": 12,
	"terminal.integrated.fontWeight": "599",

	// ---- Language-Specific Formatters ----
	"[go]": { "editor.defaultFormatter": "golang.go" },
	"[prisma]": { "editor.defaultFormatter": "Prisma.prisma" },
	"[python]": { "editor.defaultFormatter": "ms-python.black-formatter" },

	// ---- Typescript ----
	"typescript.updateImportsOnFileMove.enabled": "always",

	// ---- Extensions Behavior ----
	"extensions.autoUpdate": true,
	"extensions.ignoreRecommendations": true,
	"go.toolsManagement.autoUpdate": true,
	"liveServer.settings.donotShowInfoMsg": true,

	// ---- Misc ----
	"json.schemaDownload.enable": true,
	"notebook.formatOnSave.enabled": true,
	"update.mode": "default",
	"window.zoomLevel": 2,

	// ---- Hide UI Elements -----
	"window.commandCenter": false,
	"workbench.editor.showTabs": "multiple",
	"breadcrumbs.enabled": false,
	"redhat.telemetry.enabled": true,
	"workbench.iconTheme": "symbols",
	"symbols.hidesExplorerArrows": true,
	"workbench.colorTheme": "Default Dark+"
}
```
