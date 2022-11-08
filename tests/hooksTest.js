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
    ("Firs Test", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });

    