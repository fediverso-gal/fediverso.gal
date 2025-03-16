const places = [{
    name: 'aguiño',
    author: 'Luis Miguel Bugallo Sánchez',
    source: 'Wikimedia',
    license: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:Porto_de_Agui%C3%B1o._Ribeira._Galiza_R29.jpg'
},
{
    name: 'arcos',
    author: 'Fmrmayo',
    source: 'Wikimedia',
    license: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:Arcos_panoramica_01.jpg'
},
{
    name: 'cariño',
    author: 'Adbar',
    source: 'Wikimedia',
    license: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:Cariño_Galicia.jpg'
},
{
    name: 'freixo_de_sabardes',
    author: 'Luis Miguel Bugallo Sánchez',
    source: 'Wikimedia',
    license: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:N%C3%A9boa_na_costa._Peirao_do_Freixo_de_Sabardes._Outes._Galiza.jpg'
},
{
    name: 'marín',
    author: 'Beninho',
    source: 'Wikimedia',
    license: 'CC BY-SA 2.5 Spain',
    url: 'https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_Mar%C3%ADn.JPG'
},
{
    name: 'quenxe',
    author: 'Basotxerri',
    source: 'Wikimedia',
    license: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Corcubi%C3%B3n_-_Quenxe_-BT-_03.jpg'
}];

document.addEventListener("DOMContentLoaded", () => {
    const place = Math.floor(Math.random() * places.length);
    const pictureElem = document.querySelector('header picture');
    const avifSourceElem = document.createElement('source');
    avifSourceElem.setAttribute('srcset', `/imaxes/places/${places[place].name}.avif`);
    avifSourceElem.setAttribute('type', 'image/avif');
    pictureElem.appendChild(avifSourceElem);
    const webpSourceElem = document.createElement('source');
    webpSourceElem.setAttribute('srcset', `/imaxes/places/${places[place].name}.webp`);
    webpSourceElem.setAttribute('type', 'image/webp');
    pictureElem.appendChild(webpSourceElem);
    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', `/imaxes1/places/${places[place].name}.jpg`);
    pictureElem.appendChild(imgElem);
    const byElement = document.getElementsByClassName("attribution")[0];
    byElement.textContent = `${places[place].author} - ${places[place].source} (${places[place].license})`;
});