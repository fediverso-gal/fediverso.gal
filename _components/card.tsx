type CardOptions = {
    title?: string;
    url?: string;
    description?: string;
    image: string;
}

export default ({ title, url, description, image }: CardOptions) => (
    <figure>
        <a href={url}>
            <img src={`images/${image}`} />
            <h3>{title}</h3>
            {description && <figcaption>{description}</figcaption>}
        </a>
    </figure>
);