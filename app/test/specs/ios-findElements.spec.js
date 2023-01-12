

describe('iOS Find Element', () => {
    it('find element by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });
    it('find by tag name', async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());

        }

    });
    it('find element by xpath', async () => {
        // xpath - (//tagname[@attribute=value])

        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });

    it('find element by class chain', async () => {

        //class chaing queries construction rules
        //https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
        //f.ex. **/XCUIElementTypeCell[`name BEGINSWITH "B"`] - select all cells in the tree, where name starts with 'B'

        const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';

        await $(`-ios class chain:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });

    it.only('find element by predicate string', async () => {

        //predicate queries construction rules
        //https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
        //f.ex. const alertText = 'value BEGINWITH[c] "alert"';
        //[c] - case-sensitive - defines whether uppercase and lowercase letters are treated as distinct

        const alertText = 'label == "Alert Views"';

        await $(`-ios predicate string:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });






});