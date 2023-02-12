describe('iOS Native Features', () => {
    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        console.log(await driver.getAlertText());

        //Click ok on alert box
        //I can use accessibilityId to click OK
        //await $('~OK').click();

        //or I can use native iOS accept/dismiss alert
        await driver.dismissAlert();

        //assertion
        await expect($('~OK')).not.toExist();
    })

    it('Working with scrollable elements', async () => {
        //easiest
        // await driver.execute('mobile: scroll', { direction: "down" });
        // await driver.execute('mobile: scroll', { direction: "up" });

        //complex
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: "down" });
        await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: "up" });
        await driver.pause(5000);

    });

    it.only('Working with scrollable elements', async () => {


        //scroll to value
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(5000);

    });
});