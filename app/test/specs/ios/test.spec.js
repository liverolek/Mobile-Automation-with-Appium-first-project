describe('test', () => {
    it('test', async () => {

        const listTextField = 'value == "List Name"';
        const elementTitleField = '**/XCUIElementTypeTextField[`value == "Title"`]';




        await expect(await $('//XCUIElementTypeStaticText[@name="Lists"]').getText()).toContain("Lists");
        await expect($('~Tap the button to create your first list').toExist());

        await $('//XCUIElementTypeStaticText[@name="Create list"]').click();

        await $(`-ios predicate string:${listTextField}`).addValue('TV Shows');
        await $('~Create').click();
        await expect(await $('~TV Shows').getText()).toContain("TV Shows");

        await $('~TV Shows').click();
        await $('~Add').click();

        await expect(await driver.getAlertText()).toContain("Add To Do");
        await expect(await $(`-ios class chain:${elementTitleField}`).getText()).toContain("Title");
        await $(`-ios class chain:${elementTitleField}`).addValue('Love never lies');
        await $("//*[@value='Due']").click();
        await $('~Date Picker').click();
        await $('~Monday, February 13').click();

        await $("//XCUIElementTypeWindow[@index=2]").click();




        await $('~Create').click();
        await expect($('~Love never lies').toBeExisting());
        await expect($('~Due Monday, February 13').toBeExisting());
        const loveNeverLies = await $('~Love never lies');

        await driver.execute('mobile: scroll', { element: loveNeverLies.elementId, direction: "right" });
        await $('//XCUIElementTypeButton[@name="Done"]').click();
        await expect(await $('~Completed Today').getText()).toContain("Completed Today");

        await driver.execute('mobile: scroll', { element: loveNeverLies.elementId, direction: "right" });
        await $('//XCUIElementTypeButton[@name="Not Done"]').click();
        await expect($('~Due Monday, February 13').toBeExisting());

        await $('//XCUIElementTypeButton[@name="Lists"]').click();
        const tvShows = await $('~TV Shows');

        await driver.execute('mobile: scroll', { element: tvShows.elementId, direction: "right" });
        await $('//XCUIElementTypeButton[@name="Delete"]').click();

        //jak sprawdzic, ze element nie istnieje


    });
});