import { PageData } from "lume/core.ts";

interface Service {
    name: string;
    url: string;
    description: string;
    image: string;
}

interface Sponsor {
    name: string;
    url: string;
    image: string;
}

interface LandingProps extends PageData {
    description: string;
    about: string[];
    services: Service[];
    sponsors: Sponsor[];
}

export default ({title, description, about, services, sponsors, comp}: LandingProps) => (
    <html lang="gl">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>

            <title>{title}</title>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Open+Sans&family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href={`/index.css?date=${Date.now()}`} />
        </head>
        <body>
            <comp.Header title={title} />
            <main>
                <section class="about">
                    {about.map(paragraph => <p>{paragraph}</p>)}
                </section>
                <section class="grid_section">
                    <h2>Servizos do fediverso.gal</h2>
                    <section class="grid grid_center">
                        {services.map(service => <comp.ui.Card
                            title={service.name}
                            url={service.url}
                            description={service.description}
                            image={service.image}
                            imageFit
                        />)}
                    </section>
                </section>
                <section class="grid_section">
                    <h2>Os nosos patrocinadores</h2>
                    <section class="grid">
                        {sponsors.map(sponsor => <comp.ui.Card
                            title={sponsor.name}
                            url={sponsor.url}
                            image={sponsor.image}
                            small
                        />)}
                    </section>
                </section>
            </main>
            <comp.Footer />
            <script src="/index.js" />
        </body>
    </html>
);
