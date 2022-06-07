import {ExCsv} from "@/ExCsv";

describe('neko', (): void => {
    test('nekoって表示される', (): void => {
        const exCsv = new ExCsv();
        const response: string = exCsv.neko();
        expect(response).toBe('neko');
    });
})
