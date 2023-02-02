type HeaderOptions = {
    title: string;
}

export default ({ title }: HeaderOptions) => (
    <header>
        <img src="images/fediverse.png" />
        <h1>{title}</h1>
        <h2>Benvide ao fediverso en galego!</h2>
    </header>
);