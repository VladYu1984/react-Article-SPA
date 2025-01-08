import { getQueryParams } from './addQueryParams';

describe('shared/lib/addQueryParams', () => {
    test('with 1 params', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });
    test('with multiplay params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });

        expect(params).toBe('?test=value&second=2');
    });
    test('with undefined params', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });

        expect(params).toBe('?test=value');
    });
});
