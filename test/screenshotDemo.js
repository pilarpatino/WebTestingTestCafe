fixture("Hooks Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .setPageLoadTimeout(0)
    });
    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("screenshotDemo - Firs Test", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button").takeScreenshot();

    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("screenshotDemo - Second Test", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .takeScreenshot()
            .takeElementScreenshot("#submit-button")
            .click("#submit-button");
    });

    