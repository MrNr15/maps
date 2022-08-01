export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/footer.svelte"),
	() => import("../../src/routes/fototest.svelte"),
	() => import("../../src/routes/gamecart.svelte"),
	() => import("../../src/routes/hamburgertutorial.svelte"),
	() => import("../../src/routes/header.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects/dungeon-quest.svelte"),
	() => import("../../src/routes/projects/ghost-crime.svelte"),
	() => import("../../src/routes/projects/solar-sim.svelte"),
	() => import("../../src/routes/test.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"footer": [[0, 2], [1]],
	"fototest": [[0, 3], [1]],
	"gamecart": [[0, 4], [1]],
	"hamburgertutorial": [[0, 5], [1]],
	"header": [[0, 6], [1]],
	"test": [[0, 11], [1]],
	"projects/dungeon-quest": [[0, 8], [1]],
	"projects/ghost-crime": [[0, 9], [1]],
	"projects/solar-sim": [[0, 10], [1]]
};