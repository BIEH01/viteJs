import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
	const port = 3000;

	console.log(command, mode);
	const env = loadEnv(mode, process.cwd());
	console.log(env);

	if (mode === "development") {
		console.log("modo desarrollo");
		return {
			server: {
				port,
			},
		};
	} else {
		console.log("modo producción");
		return {
			build: {
				rollupOptions: {
					input: {
						main: resolve(_dirname, "index.html"),
						help: resolve(_dirname, "help", "help.html"),
					},
				},
				lib: {
					entry: resolve(_dirname, "lib", "main.js"),
					name: "demo",
					fileName: (format) => `demo.${format}.js`,
				},
			},
		};
	}
});
