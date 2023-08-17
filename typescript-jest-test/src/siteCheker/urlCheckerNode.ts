import { isUp } from "./urlChecker";
import { parse } from 'csv-parse/sync';
import { promises as fs } from 'fs';

async function test() {
    const content = await fs.readFile('src/siteCheker/urlList.csv');
    const records: string[][] = parse(content, { bom: true });
    const urls = records.map(r => r[0]);
    let results: string[][] = [
        ['url', 'status', 'redirects', 'error']
    ];

    for (const url of urls) {
        console.log('URL processing', url);
        let result = await isUp(url);
        let urlResult = [url, String(result.ok)];
        if (result.redirect) {
            urlResult = urlResult.concat(result.redirect);
        } else {
            urlResult.push('no_redirects');
        }
        if (result.error) {
            urlResult.push(result.error);
        }
        results.push(urlResult);
    }
    // console.log("run for ", url, "result", result);
    await fs.writeFile('src/siteCheker/urlList-output.csv', results.map(r => r.join(',')).join("\n"));
}
Promise.resolve(test());