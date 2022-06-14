import {ExCsv} from "@/ExCsv";

describe('neko', (): void => {
    test('nekoって表示される', (): void => {
        const exCsv = new ExCsv();
        expect(exCsv.neko()).toBe('neko');
        exCsv.load('tests/test.csv');
        const e = exCsv.execute();
        console.log("🐱いったん出す",e)

        const response: string = exCsv.neko();
        expect(response).toBe('neko');
    });
})
