const text = "Accessibility links\nSkip to main content\nAccessibility help\nAccessibility feedback\nSign in\nSearch modes\nAll\nImages\nNews\nMaps\nVideos\nMore\nSettings\nTools\nAbout 273,000 results (0.66 seconds) \nSearch Results\nWeb results\n\nUAX: Study at the Universidad Alfonso X El Sabio\nhttps://www.uax.com › ...\nDiscover the Alfonso X el Sabio Private University. We have specific programs for english students.\n‎Degree in Veterinary Science · ‎Degrees and double degrees · ‎Admission Process\nLocal results\nRating\nUniversity Alfonso X the Wise\n3.9 \n (218) · University\nVillanueva de la Cañada, Spain · +34 919 10 01 70\nClosed ⋅ Opens 9AM\nWebsite\n\t\nDirections\nUniversity Alfonso X the Wise\n3.3 \n (38) · Private university\n+34 919 10 01 70\nClosed ⋅ Opens 9AM\nWebsite\nWeb results\n\nOur University Residences - UAX\nhttps://www.uax.com › Home › Campus and residences\nUAX University Residences. Experience the university from within and enjoy a unique experience that perfectly complements your academic journey and ...\n\nAlfonso X El Sabio University - Wikipedia\nhttps://en.wikipedia.org › wiki › Alfonso_X_El_Sabio_...\nAlfonso X el Sabio University (Universidad Alfonso X El Sabio in Spanish language, UAX) is a private university in the Community of Madrid, Spain. The number of ...\nCampus: 248 acres (1000000 m²)\n\t\nRector: José Domínguez de Posada\n\n\nPresident: Jesús Núñez Velázquez\n\nStudy at UAX\nhttps://ori.uax.es › study-at-uax\nStudy at The Alfonso X el Sabio University - UAX (Madrid) .The first Spanish private university. Find out in the ORI , tel : 91 810 97 00 or inter@uax.es.\n\nUAX University at uax.com | Ranking & Review\nhttps://www.4icu.org › ... › UAX University at uax.com\n2 Feb 2021 — Officially recognized by the Ministerio de Universidades, España (Ministry of Universities of Spain), Universidad Alfonso X el Sabio (UAX) is a ...\n\nAlfonso X el Sabio University in Spain Reviews & Rankings ...\nhttps://www.eduopinions.com › universities-in-spain › a...\nAlfonso X el Sabio University - UAX ratings and description. Locations: Madrid, Spain. Delivery Type: On Campus. Overall. Facilities. Professors. Location.\n Rating: 4.3 · ‎4 votes\n\nUniversidad Alfonso X el Sabio (UAX) - Educations.com\nhttps://www.educations.com › Schools\nUniversidad Alfonso X el Sabio (UAX) is a leading private university whose main campus is located in Villanueva de la Cañada (25 km from Madrid City Center).\n\nUniversidad Alfonso X el Sabio – ISEP Study Abroad\nhttps://search.isepstudyabroad.org › University › Detail\nUniversidad Alfonso X el Sabio is a young, dynamic private university. The university gained its charter from Parliament with the goal of educating students for ...\n\nAlfonso X el Sabio University (UAX), Spain | Institution outputs ...\nhttps://www.natureindex.com › institution-outputs › alf...\nNo articles found. Alfonso X el Sabio University (UAX) did not contribute to any primary research papers from Nature Index journals in the current 12 month ...\n\nAlfonso X El Sabio University - UAX (Spain) - Altillo.com\nhttps://www.altillo.com › universities › alfonso_x_el_sa...\nUniversidad Avenue, 1. Madrid. Telephone.: 902.100.868 info@uax.es. This university offers the following Masters ...\nRelated searches\nUAX Madrid\nFeedback\ncampus uax\nuax meaning\nuniversity of burgos\nuax fees\nuniversidad alfonso fc\nuax | odontología\nresidencias uax\nPage navigation\n\t\n1\t\n2\n\t\n3\n\t\n4\n\t\n5\n\t\n6\n\t\n7\n\t\n8\n\t\n9\n\t\n10\n\t\nNext\nFooter links\nHong KongHong Kong - From your Internet address - Use precise location - Learn more\nHelpSend feedbackPrivacyTerms"
const pageText = text

const unis = "ceu, deusto, uc3m, ie, nebrija, ua, uah, uam, uax, ubu, uca, ucavila, ucjc, ucm, carlos iii, ucv, udg, udl, uec, uemc, ufv, uhu, uia, uic, ujaen, ull, ulpgc, uma, unav, uneatlantico, unex, unileon, unir, unizar, upc, upf, upo, upv, url, upm, urjc, icai, us, usc, uned, uv, uoc, uvic, elisava, viu".split(',').map(e => e.trim())

const ocurrences =
    [
        {
            location: "Barcelona",
            count: 2,
        },
        {
            location: "Madrid",
            count: 5,
        },
        {
            location: "Sevilla",
            count: 0,
        },
        {
            location: "Valencia",
            count: 17,
        },
        {
            location: "Zaragoza",
            count: 0,
        },
        {
            location: "Málaga",
            count: 0,
        },
        {
            location: "Palma",
            count: 0,
        },
        {
            location: "Murcia",
            count: 0,
        },
        {
            location: "Las Palmas",
            count: 0,
        },
        {
            location: "A Coruña",
            count: 0,
        },
        {
            location: "Donostia",
            count: 0,
        },
        {
            location: "Bilbao",
            count: 0,
        },
        {
            location: "Alicante",
            count: 1,
        },
        {
            location: "Córdoba",
            count: 0,
        },
        {
            location: "Valladolid",
            count: 0,
        },
        {
            location: "Vigo",
            count: 0,
        },
        {
            location: "Gijón",
            count: 0,
        },
        {
            location: "Vitoria-Gasteiz",
            count: 0,
        },
        {
            location: "Granada",
            count: 0,
        },
        {
            location: "Badalona",
            count: 0,
        },
        {
            location: "Cartagena",
            count: 0,
        },
        {
            location: "Sabadell",
            count: 0,
        },
        {
            location: "Jerez de la Frontera",
            count: 0,
        },
        {
            location: "Santa Cruz",
            count: 0,
        },
        {
            location: "Pamplona",
            count: 0,
        },
        {
            location: "Almería",
            count: 0,
        },
        {
            location: "Oviedo",
            count: 0,
        },
        {
            location: "Mataró",
            count: 0,
        },
        {
            location: "Albacete",
            count: 0,
        },
        {
            location: "Santander",
            count: 0,
        },
        {
            location: "Castellón de la Plana",
            count: 0,
        },
        {
            location: "Burgos",
            count: 0,
        },
        {
            location: "La Laguna",
            count: 0,
        },
        {
            location: "Badajoz",
            count: 0,
        },
        {
            location: "Salamanca",
            count: 0,
        },
        {
            location: "Logroño",
            count: 0,
        },
        {
            location: "Huelva",
            count: 0,
        },
        {
            location: "Marbella",
            count: 0,
        },
        {
            location: "Ciudad de Melilla",
            count: 0,
        },
        {
            location: "Tarragona",
            count: 0,
        },
        {
            location: "León",
            count: 0,
        },
        {
            location: "Cádiz",
            count: 0,
        },
        {
            location: "Jaén",
            count: 0,
        },
        {
            location: "Algeciras",
            count: 0,
        },
        {
            location: "Ourense",
            count: 0,
        },
        {
            location: "Girona",
            count: 0,
        },
        {
            location: "Lugo",
            count: 0,
        },
        {
            location: "Cáceres",
            count: 0,
        },
        {
            location: "Lorca",
            count: 0,
        },
        {
            location: "Santiago de Compostela",
            count: 0,
        },
        {
            location: "El Puerto de Santa María",
            count: 0,
        },
        {
            location: "Ciudad de Ceuta",
            count: 0,
        },
        {
            location: "Pontevedra",
            count: 0,
        },
        {
            location: "Mijas",
            count: 0,
        },
        {
            location: "Guadalajara",
            count: 0,
        },
        {
            location: "Avilés",
            count: 0,
        },
        {
            location: "Rubí",
            count: 0,
        },
        {
            location: "Toledo",
            count: 0,
        },
        {
            location: "Gandía",
            count: 0,
        },
        {
            location: "Benidorm",
            count: 0,
        },
        {
            location: "Benalmádena",
            count: 0,
        },
        {
            location: "Villanueva y Geltrú",
            count: 0,
        },
        {
            location: "Ferrol",
            count: 0,
        },
        {
            location: "La Línea de la Concepción",
            count: 0,
        },
        {
            location: "Arrecife",
            count: 0,
        },
        {
            location: "Zamora",
            count: 0,
        },
        {
            location: "Granollers",
            count: 0,
        },
        {
            location: "Linares",
            count: 0,
        },
        {
            location: "Mérida",
            count: 0,
        },
        {
            location: "Motril",
            count: 0,
        },
        {
            location: "Ávila",
            count: 0,
        },
        {
            location: "Torrelavega",
            count: 0,
        },
        {
            location: "Villareal",
            count: 0,
        },
        {
            location: "Ibiza",
            count: 0,
        },
        {
            location: "Portugalete",
            count: 0,
        },
        {
            location: "Antequera",
            count: 0,
        },
        {
            location: "Plasencia",
            count: 0,
        },
        {
            location: "Écija",
            count: 0,
        },
        {
            location: "Tudela",
            count: 0,
        },
        {
            location: "Onteniente",
            count: 0,
        },
        {
            location: "Burriana",
            count: 0,
        },
        {
            location: "Villena",
            count: 0,
        },
        {
            location: "Ronda",
            count: 0,
        },
        {
            location: "Castro-Urdiales",
            count: 0,
        },
        {
            location: "Arcos de la Frontera",
            count: 0,
        },
        {
            location: "Puerto de la Cruz",
            count: 0,
        },
        {
            location: "Mahón",
            count: 0,
        },
        {
            location: "Éibar",
            count: 0,
        },
        {
            location: "Villanueva de la Serena",
            count: 0,
        },
        {
            location: "Jumilla",
            count: 0,
        },
        {
            location: "Villarrobledo",
            count: 0,
        },
        {
            location: "Almonte",
            count: 0,
        },
        {
            location: "Laguna de Duero",
            count: 0,
        },
        {
            location: "Torre del Mar",
            count: 0,
        },
        {
            location: "Moguer",
            count: 0,
        },
        {
            location: "Palafrugell",
            count: 0,
        },
        {
            location: "Loja",
            count: 0,
        },
        {
            location: "Requena",
            count: 0,
        },
        {
            location: "Guadix",
            count: 0,
        },
        {
            location: "Navalmoral de la Mata",
            count: 0,
        },
        {
            location: "Ejea de los Caballeros",
            count: 0,
        },
        {
            location: "Azpeitia",
            count: 0,
        },
        {
            location: "Noya",
            count: 0,
        },
        {
            location: "Cuevas del Almanzora",
            count: 0,
        },
        {
            location: "Socuéllamos",
            count: 0,
        },
        {
            location: "Olivenza",
            count: 0,
        },
        {
            location: "Palos de la Frontera",
            count: 0,
        },
        {
            location: "Santoña",
            count: 0,
        },
        {
            location: "Tafalla",
            count: 0,
        },
        {
            location: "La Bañeza",
            count: 0,
        },
        {
            location: "Canteras",
            count: 0,
        },
        {
            location: "Miajadas",
            count: 0,
        },
        {
            location: "Piedras Blancas",
            count: 0,
        },
        {
            location: "Puigcerdá",
            count: 0,
        },
        {
            location: "Valldoreix",
            count: 0,
        },
        {
            location: "Corella",
            count: 0,
        },
        {
            location: "Cintruénigo",
            count: 0,
        },
        {
            location: "Talayuela",
            count: 0,
        },
        {
            location: "Porto Cristo",
            count: 0,
        },
        {
            location: "Moraleja",
            count: 0,
        },
        {
            location: "San Adrián",
            count: 0,
        },
        {
            location: "Arroyo de la Luz",
            count: 0,
        },
        {
            location: "Valencia de Alcántara",
            count: 0,
        },
        {
            location: "Mutriku",
            count: 0,
        },
        {
            location: "La Herradura",
            count: 0,
        },
        {
            location: "Garachico",
            count: 0,
        },
        {
            location: "Lodosa",
            count: 0,
        },
        {
            location: "Malpartida de Plasencia",
            count: 0,
        },
        {
            location: "Hornachuelos",
            count: 0,
        },
        {
            location: "Viana",
            count: 0,
        },
        {
            location: "Hervás",
            count: 0,
        },
        {
            location: "Olite",
            count: 0,
        },
        {
            location: "Villargordo",
            count: 0,
        },
        {
            location: "Cascante",
            count: 0,
        },
        {
            location: "Azagra",
            count: 0,
        },
        {
            location: "Luarca",
            count: 0,
        },
        {
            location: "Ribaforada",
            count: 0,
        },
        {
            location: "Mendavia",
            count: 0,
        },
        {
            location: "Viella",
            count: 0,
        },
        {
            location: "San Francisco Javier",
            count: 0,
        },
        {
            location: "Milagro",
            count: 0,
        },
        {
            location: "Oza de los Ríos",
            count: 0,
        },
        {
            location: "Cortes",
            count: 0,
        },
        {
            location: "Estartit",
            count: 0,
        },
        {
            location: "Leiza",
            count: 0,
        },
        {
            location: "Marcilla",
            count: 0,
        },
        {
            location: "Villafranca",
            count: 0,
        },
        {
            location: "Puente la Reina",
            count: 0,
        },
        {
            location: "Jarandilla de la Vera",
            count: 0,
        },
        {
            location: "Ribadesella",
            count: 0,
        },
        {
            location: "Caparroso",
            count: 0,
        },
        {
            location: "Vegadeo",
            count: 0,
        },
        {
            location: "Losar de la Vera",
            count: 0,
        },
        {
            location: "Alcuéscar",
            count: 0,
        },
        {
            location: "Madroñera",
            count: 0,
        },
        {
            location: "Carcastillo",
            count: 0,
        },
        {
            location: "Fustiñana",
            count: 0,
        },
        {
            location: "Echarri-Aranaz",
            count: 0,
        },
        {
            location: "Ablitas",
            count: 0,
        },
        {
            location: "Funes",
            count: 0,
        },
        {
            location: "Valtierra",
            count: 0,
        },
        {
            location: "Valverde del Fresno",
            count: 0,
        },
        {
            location: "Palencia",
            count: 0,
        },
        {
            location: "Lleida",
            count: 0,
        },
        {
            location: "Segovia",
            count: 0,
        },
        {
            location: "Huesca",
            count: 0,
        },
        {
            location: "Ciudad Real",
            count: 0,
        },
        {
            location: "Soria",
            count: 0,
        },
        {
            location: "Teruel",
            count: 0,
        },
        {
            location: "Cuenca",
            count: 0,
        },
    ];

const countOcurrences = (text, textToFind) => {
    const re = new RegExp(`${textToFind}`, 'ig')
    var count = (text.match(re) || []).length;
    return count;
}

var count = (text.match(/private/ig) || []).length;
var countPub = (text.match(/public/ig) || []).length;

var cPriv = countOcurrences(pageText, 'private')
var cPub = countOcurrences(pageText, 'public')

let a = 1;
