import { PageData } from "lume/core.ts";

export default ({title, children}: PageData) => (
    <html lang="gl">
        <head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
        </head>
        <body>
            {children}
        </body>
    </html>
);
