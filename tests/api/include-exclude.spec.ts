import { test, expect } from '@playwright/test';
import { inclExclOptions } from './util/constants';

test('should exclude the correct fields when requested', async ({ request }) => {
    for(const option of inclExclOptions) {
        const result = await request.get('./api/', { params: { 'exc': option } });
        expect(result.ok()).toBeTruthy();
        expect(await result.json()).not.toHaveProperty(option);
    }
    
});