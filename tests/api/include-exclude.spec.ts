import { test, expect } from '@playwright/test';

test('should exclude the correct fields when requested', async ({ request }) => {
    
    const options: string[] = [
        'gender',
        'name',
        'location',
        'email',
        'login',
        'registered',
        'dob',
        'phone',
        'cell',
        'id',
        'picture',
        'nat',
    ];

    for(const option of options) {
        const result = await request.get('./api/', { params: { 'excl': option } });
        expect(result.ok()).toBeTruthy();
        expect(await result.json()).not.toHaveProperty(option);
    }
    
});