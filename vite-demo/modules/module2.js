const module = {
	name: "module2",
};

export function load() {
	console.log(`${module.name} loaded!`);
}

export default module;
