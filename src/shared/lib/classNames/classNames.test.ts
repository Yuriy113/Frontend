import { describe } from 'node:test';
import { classNames } from './classNames';

void describe('classNames', () => {
    test('with only fitst param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass additional1 additional2';
        expect(classNames('someClass', {}, ['additional1', 'additional2'])).toBe(expected);
    });

    test('with mods as true', () => {
        const expected = 'someClass additional mod1 mod2';
        expect(classNames('someClass', { mod1: true, mod2: true }, ['additional'])).toBe(expected);
    });

    test('with mods as true and false', () => {
        const expected = 'someClass additional mod1';
        expect(classNames('someClass', { mod1: true, mod2: false }, ['additional'])).toBe(expected);
    });

    test('with mods as true and undefined', () => {
        const expected = 'someClass additional mod1';
        expect(classNames('someClass', { mod1: true, mod2: undefined }, ['additional'])).toBe(expected);
    });
});
