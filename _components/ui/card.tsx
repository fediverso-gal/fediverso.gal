type CardOptions = {
    title?: string;
    url?: string;
    description?: string;
    image: string;
    imageFit: boolean
    small: boolean
}

export default ({ title, url, description, image, imageFit, small }: CardOptions) => (
    <article>
        <a className={small ? 'small_card' : ''} href={url}>
            <img className={imageFit ? 'image_fit' : ''} src={`images/${image}`} />
            {(title || description) && <div>
                {title && <h3>{title}</h3>}
                {description && <p>{description}</p>}
            </div>}
        </a>
    </article>
);