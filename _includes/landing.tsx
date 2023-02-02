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

            <link href="/index.css" rel="stylesheet" />
        </head>
        <body>
            <comp.Header title={title} />
            <div>
                {about.map(paragraph => <p>{paragraph}</p>)}
            </div>
            <div>
                <h2>Servizos do fediverso.gal</h2>
                <ul>
                    {services.map(service => <li>
                        <comp.Card
                            title={service.name}
                            url={service.url}
                            description={service.description}
                            image={service.image}
                        />
                    </li>)}
                </ul>
            </div>
            <div>
                <h2>Os nosos patrocinadores</h2>
                <ul>
                    {sponsors.map(sponsor => <li>
                        <comp.Card
                            title={sponsor.name}
                            url={sponsor.url}
                            image={sponsor.image}
                        />
                    </li>)}
                </ul>
            </div>
            <comp.Footer />
        </body>
    </html>
);
