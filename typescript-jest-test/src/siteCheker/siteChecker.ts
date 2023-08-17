
import axios, {isCancel, AxiosError} from 'axios';
import https from 'https';



export async function isUp(siteToCheck: string): Promise<{ok: boolean, redirect?: string[], error?: string}> {
    const siteURL = addHttpProtocol(siteToCheck);
    
    try {
        // console.log(`checking ${siteToCheck}`);
        let redirect: string[] = [];
        const instance = axios.create({
            httpsAgent: new https.Agent({  
              rejectUnauthorized: false
            }),
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
            },
            
        });
        const response = await instance.get(siteURL, { 
            timeout: 10000, 
            responseType: 'text', 
            beforeRedirect: (options) => {
                redirect.push(options.href);
            }
        });
        
        // if (response.status >= 300 && response.status < 400) {
        //     console.log('REDIRECT', response);
        //     return {ok: false};
        // }
        // console.log('RESPONSE', response);
        // console.log('REDIRECT COUNT', response.request._redirectable._redirectCount);
        // console.log('LAST REDIRECT TO', response.request._redirectable._currentUrl);

        if (response.status === 200) {
            if (redirect.length > 0) {
                return {ok: response.data.length > 900, redirect};    
            }
            return {ok: response.data.length > 900};
        }
        return {ok: false};
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {ok: false, error: e.message};
        }
        return {ok: false};
    }
}

function addHttpProtocol(siteURL: string): string {
    if (!siteURL.startsWith("http://") && !siteURL.startsWith("https://")) {
        return `http://${siteURL}`;
    }
    return siteURL;
    }


    // import axios, {isCancel, AxiosError} from 'axios';
// import https from 'https';


// export async function isUp(siteToCheck: string): Promise<{ok: boolean, redirect?: string[]}> {
//     const siteURL = addHttpProtocol(siteToCheck);

//     try {
//         console.log(`checking ${siteToCheck}`);
        

//         let redirect: string[] = [];

//         const instance = axios.create({
//             // httpsAgent: new https.Agent({  
//             //   rejectUnauthorized: false
//             // }),
//             // headers: {
//             //     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
//             // } 
//         });
//         const response = await instance.get(siteURL, { 
//             timeout: 3000, 
//             responseType: 'text', 
//             beforeRedirect: (options) => {
//                 redirect.push(options.href);
//             }
//         });
        
//         // if (response.status >= 300 && response.status < 400) {
//         //     console.log('REDIRECT', response);
//         //     return {ok: false};
//         // }
//         console.log('RESPONSE', response);
//         // console.log('REDIRECT COUNT', response.request._redirectable._redirectCount);
//         // console.log('LAST REDIRECT TO', response.request._redirectable._currentUrl);

//         if (response.status === 200) {
          
//             if (redirect.length > 0) {
//                 return {ok: response.data.length > 900, redirect};    
//             }
//             return {ok: response.data.length > 900};
//         }
//         return {ok: false};
//     } catch (error) {
//         console.error(error);
//         return {ok: false};
//     }
// }

// function addHttpProtocol(siteURL: string): string {
//     if (!siteURL.startsWith("http://") && !siteURL.startsWith("https://")) {
//         return `http://${siteURL}`;
//     }
//     return siteURL;
//     }

