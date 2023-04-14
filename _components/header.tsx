type HeaderOptions = {
    title: string;
}

export default ({ title }: HeaderOptions) => (
    <header>
        <picture />
        <div className="attribution" />
        <div className="content">
            <img src="images/fediverse.png" />
            <div>
                <h1><a href="/">{title}</a></h1>
                <h2>Benvide ao fediverso en galego!</h2>
            </div>
        </div>
    </header>
);