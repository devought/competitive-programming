### 🏎️ TypeScript Template for competitive programming (Node.js + esbuild + ts-node)

### 📦 Install Dependencies

```bash
npm i -D @types/node esbuild ts-node typescript
```

### ⚙️ Initialize TypeScript

```bash
tsc --init
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

### 📁 Folder Structure

```
.
├── node_modules
├── dist
├── src/
│   └── main.ts
├── test.txt
├── .gitignore
├── .prettierc
├── package.json
├── package-lock.json
└── tsconfig.json
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

### 📝 VSCode Snippet — ICPC TypeScript Template

Create file:
`~/.config/Code/User/snippets/typescript.json`

Add:

```json
{
	"ICPC TypeScript Template": {
		"prefix": "icpc",
		"body": [
			"import * as fs from \"fs\";",
			"",
			"const data = fs.readFileSync(0, \"utf-8\");",
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
			"const write = (s: any) => (out += s + \"\\n\");",
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
		"description": "TypeScript template with fast I/O for Codeforces/Atcoder/CSES"
	}
}
```
