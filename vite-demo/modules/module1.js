const module = {
	name: "module1",
};

export function load() {
	console.log(`${module.name} loaded!`);
}

export default module;
