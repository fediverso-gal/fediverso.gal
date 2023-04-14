import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";
import minify_html from "lume/plugins/minify_html.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.copy("assets/images", "images");
site.copy("assets/js/index.js", "js/index.js");
site.ignore("README.md", "LICENSE");

site.use(jsx_preact());
site.use(sass());
site.use(minify_html());
site.use(terser());

export default site;
