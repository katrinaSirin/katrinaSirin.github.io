import { isUp } from "./siteChecker";

describe('siteChecker', function () {
    describe('isUp', function () {
        // it('should say its up', async function () {
        //     expect(await isUp("https://bcpartners.capdata.co.uk/")).toEqual({ ok: true });
        // });
        // it('should say its down', async function () {
        //     expect(await isUp("https://apax.capdata.co.uk/")).toEqual({ ok: false });
        // });
        // it('should say its down', async function () {
        //     expect(await isUp("fdxdfcgcdfgdrt")).toEqual({ ok: false });
        // });
        it('should say its down', async function () {
            expect(await isUp("www.park-resorts.com")).toEqual({ ok: true, redirect: ["https://www.parkdeanresorts.co.uk/"] });
        // });
        // it('should say its down', async function () {
        //     expect(await isUp("http://www.abbotgroup.com/")).toEqual({ ok: false });
        // });
        // it('should say its down', async function () {
        //     expect(await isUp("www.zerolag.com")).toEqual({ ok: false });
        // });
        // it('should say its down', async function () {
        //     expect(await isUp("www.park-resorts.com")).toEqual({ ok: true });
        // });
    });


    // describe('redirect', function () {
        // it('should indicate redirect', async function () {
        //     // expect(await isUp("http://google.com")).toEqual({ ok: true, redirect: ["https://google.com", "https://www.google.com"] })
        //     expect(await isUp("http://google.com")).toEqual({ ok: true, redirect: ["http://www.google.com/", "https://www.google.com"] })


        // })
        // it('should indicate redirect', async function () {
        //     expect((await isUp("www.bq.com")).ok).toBeTruthy();

        // })
        // it('should indicate redirect', async function () {
        //     expect(await isUp("www.zhilabs.com")).toEqual({ ok: true, redirect: ["https://www.zhilabs.com/"] })
        // })
        // it('should indicate redirect', async function () {
        //     expect(await isUp("www.roxspur.com")).toEqual({ ok: true, redirect: ["http://www.roxspur.com/", "https://www.ttelectronics.com/products/brands/roxspur-measurement-and-control/"
        // , "https://www.ttelectronics.com/brands/roxspur-measurement-and-control"] })
        // })

    })
})
