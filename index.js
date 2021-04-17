const puppeteer = require('puppeteer');
const ExportCsv = require('./export-csv');

const cities = "Barcelona,Madrid,Sevilla,Valencia,Zaragoza,Málaga,Palma,Murcia,Las Palmas,A Coruña,Donostia,Bilbao,Alicante,Córdoba,Valladolid,Vigo,Gijón,Vitoria-Gasteiz,Granada,Badalona,Cartagena,Sabadell,Jerez de la Frontera,Santa Cruz,Pamplona,Almería,Oviedo,Mataró,Albacete,Santander,Castellón de la Plana,Burgos,La Laguna,Badajoz,Salamanca,Logroño,Huelva,Marbella,Ciudad de Melilla,Tarragona,León,Cádiz,Jaén,Algeciras,Ourense,Girona,Lugo,Cáceres,Lorca,Santiago de Compostela,El Puerto de Santa María,Ciudad de Ceuta,Pontevedra,Mijas,Guadalajara,Avilés,Rubí,Toledo,Gandía,Benidorm,Benalmádena,Villanueva y Geltrú,Ferrol,La Línea de la Concepción,Arrecife,Zamora,Granollers,Linares,Mérida,Motril,Ávila,Torrelavega,Villareal,Ibiza,Portugalete,Antequera,Plasencia,Écija,Tudela,Onteniente,Burriana,Villena,Ronda,Castro-Urdiales,Arcos de la Frontera,Puerto de la Cruz,Mahón,Éibar,Villanueva de la Serena,Jumilla,Villarrobledo,Almonte,Laguna de Duero,Torre del Mar,Moguer,Palafrugell,Loja,Requena,Guadix,Navalmoral de la Mata,Ejea de los Caballeros,Azpeitia,Noya,Cuevas del Almanzora,Socuéllamos,Olivenza,Palos de la Frontera,Santoña,Tafalla,La Bañeza,Canteras,Miajadas,Piedras Blancas,Puigcerdá,Valldoreix,Corella,Cintruénigo,Talayuela,Porto Cristo,Moraleja,San Adrián,Arroyo de la Luz,Valencia de Alcántara,Mutriku,La Herradura,Garachico,Lodosa,Malpartida de Plasencia,Hornachuelos,Viana,Hervás,Olite,Villargordo,Cascante,Azagra,Luarca,Ribaforada,Mendavia,Viella,San Francisco Javier,Milagro,Oza de los Ríos,Cortes,Estartit,Leiza,Marcilla,Villafranca,Puente la Reina,Jarandilla de la Vera,Ribadesella,Caparroso,Vegadeo,Losar de la Vera,Alcuéscar,Madroñera,Carcastillo,Fustiñana,Echarri-Aranaz,Ablitas,Funes,Valtierra,Valverde del Fresno,Palencia,Lleida,Segovia,Huesca,Ciudad Real,Soria,Teruel,Cuenca".split(',')
const makeAsyncOperatorFromArray = async function* (arr) {
    for (const iterator of arr) {
        yield iterator;
    }
};

(async event => {
    //TODO: substitute for this
    // var array = fs.readFileSync('file.txt', 'utf8').split('\n');
    const unis = "ceu, deusto, uc3m, ie, nebrija, ua, uah, uam, uax, ubu, uca, ucavila, ucjc, ucm, carlos iii, ucv, udg, udl, uec, uemc, ufv, uhu, uia, uic, ujaen, ull, ulpgc, uma, unav, uneatlantico, unex, unileon, unir, unizar, upc, upf, upo, upv, url, upm, urjc, icai, us, usc, uned, uv, uoc, uvic, elisava, viu".split(',').map(e => e.trim())
    let results = [];

    // await ExportCsv.export([{ uni: 'ceu', type: 'cádiz' }], './prova.csv'); process.exit(1);

    const link = 'https://www.google.com';
    const browser = await puppeteer.launch({
        headless: true,
        // slowMo: 50,
        devtools: false
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1199, height: 900 });
    await page.goto(link);
    try {
        for await (const uni of makeAsyncOperatorFromArray(unis)) {
            // console.log(uni)

            const result = await scrapeUni(page, uni);
            results.push(result);
        }

    } catch (error) {
        console.log(error);
        await browser.close();
    }

    await ExportCsv.export(results)
    await page.close();
    await browser.close();
})();

const scrapeUni = async (page, uni) => {

    const key_words = `${uni} university spain`;

    const searchBoxCssSel = 'div form div:nth-child(2) input';

    await page.waitForSelector(searchBoxCssSel);
    await page.click(searchBoxCssSel, { clickCount: 3 }); //click 3 times to remove previous input

    await page.keyboard.type(key_words);
    await page.keyboard.press('Enter');

    await page.waitForNavigation();
    // await page.waitForTimeout(3000);

    const pageText = await page.evaluate('document.body.innerText')
    const type = countOcurrences(pageText, 'public') > countOcurrences(pageText, 'private') ? 'public' : 'private'
    const ocurrences = countOcurrencesArray(pageText, cities)
    const location = ocurrences[0].location

    let result = {
        uni,
        type,
        location
    }

    console.log(result);
    return result;
}

const countOcurrences = (text, textToFind) => {
    const re = new RegExp(`${textToFind}`, 'ig')
    var count = (text.match(re) || []).length;
    return count;
};

const countOcurrencesArray = (text, array) => {
    let results = []
    for (const location of array) {
        results.push({
            location,
            count: countOcurrences(text, location)
        })
    }
    results.sort((a, b) => b.count > a.count ? 1 : -1)
    return results;
};