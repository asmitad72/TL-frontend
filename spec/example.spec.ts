import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';//homework 17

test('Minimum required characters for password', async ({ page }) => {
    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
    const passwordField= page.getByTestId('password-input');
    await passwordField.pressSequentially('12345');
    const passwordFieldError= page.locator('.form-error_active')

    await expect(passwordFieldError).toBeVisible()
})

test('Incorrect credentials', async ({ page }) => {
    await page.goto('');
    const usernameField = page.getByTestId('username-input');
    await usernameField.fill('invalid_user');
    const passwordField = page.getByTestId('password-input');
    await passwordField.fill('invalid123');
    const signInButton = page.getByTestId('signIn-button');
    await signInButton.click();

    const errorPopup = page.getByTestId('authorizationError-popup');
    await expect(errorPopup).toBeVisible();
})

//homework17
test('User can sign in with random credentials', async ({ page }) => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();

    //await page.goto('');
    await page.goto(process.env.APP_URL!);

    const usernameField = page.getByTestId('username-input');
    await usernameField.fill(randomUsername);
    const passwordField = page.getByTestId('password-input');
    await passwordField.fill(randomPassword);
    const signInButton = page.getByTestId('signIn-button');
    await signInButton.click();

    const errorPopup = page.getByTestId('authorizationError-popup');
    await expect(errorPopup).toBeVisible();
});

