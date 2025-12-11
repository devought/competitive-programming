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

### 📦 Deps:

```json
{
	"devDependencies": {
		"@types/node": "^24.10.1",
		"esbuild": "^0.27.0",
		"prettier": "^3.7.4",
		"ts-node": "^10.9.2",
		"typescript": "^5.9.3"
	}
}
```

---

### 🚀 NPM Scripts

```json
{
	"scripts": {
		"format": "prettier --write \"src/**/*.ts\"",
		"test": "ts-node src/main.ts < src/test.txt",
		"bundle": "npx esbuild src/main.ts --bundle --platform=node --target=node18 --outfile=src/main.js --minify && cat src/main.js | pbcopy && rm src/main.js",
		"benchmark": "chmod +x src/scripts/benchmark.sh && ./src/scripts/benchmark.sh"
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
			"const readline = () => line().trim().split(/\\s+/).map(Number);",
			"const int = () => Number(read());",
			"const float = () => parseFloat(read());",
			"const bigint = () => BigInt(read());",
			"const line = () => lines[l++];",
			"const ints = (n: number) => Array.from({ length: n }, () => int());",
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
	// "editor.fontFamily": "",
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.fontFamily": "Lab Mono",
	"editor.largeFileOptimizations": true,
	"editor.tabCompletion": "on",
	"editor.cursorStyle": "underline",
	"editor.lineHeight": 1.2,
	"editor.unicodeHighlight.ambiguousCharacters": false,
	"editor.wordWrap": "on",
	"editor.formatOnSave": true,

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
	"workbench.tree.indent": 20,
	"workbench.tree.renderIndentGuides": "none",

	// ---- Terminal ----
	"terminal.integrated.cursorStyle": "underline",
	"terminal.integrated.fontSize": 12,

	// ---- Language-Specific Formatters ----
	"[prisma]": { "editor.defaultFormatter": "Prisma.prisma" },
	"[python]": { "editor.defaultFormatter": "ms-python.black-formatter" },

	// ---- Typescript ----
	"typescript.updateImportsOnFileMove.enabled": "always",

	// ---- Extensions Behavior ----
	"extensions.autoUpdate": true,
	"extensions.ignoreRecommendations": true,
	"liveServer.settings.donotShowInfoMsg": true,

	// ---- Misc ----
	"json.schemaDownload.enable": true,
	"notebook.formatOnSave.enabled": true,
	"update.mode": "default",
	"window.zoomLevel": 1,
	"workbench.fontAliasing": "none",

	// ---- Hide UI Elements ----
	"window.commandCenter": false,
	"workbench.editor.showTabs": "single",
	"breadcrumbs.enabled": false,
	"editor.minimap.autohide": true,
	"redhat.telemetry.enabled": true
}
```
