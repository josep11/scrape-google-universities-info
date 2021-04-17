const ObjectsToCsv = require('objects-to-csv');

const DEFAULT_FILENAME = './exports/universities_export.csv';

const ExportCsv = {
    export: async (data, filename = DEFAULT_FILENAME) => {
        const csv = new ObjectsToCsv(data);

        // Save to file:
        await csv.toDisk(filename, {
            bom: true
        });

        console.log(await csv.toString());
        console.log("Exportat fitxer a " + filename);
    }
};

module.exports = ExportCsv;