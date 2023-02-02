import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";
import minify_html from "lume/plugins/minify_html.ts";

const site = lume();

site.copy("assets/images", "images");
site.ignore("README.md", "LICENSE");

site.use(jsx_preact());
site.use(sass());
site.use(minify_html());

export default site;
