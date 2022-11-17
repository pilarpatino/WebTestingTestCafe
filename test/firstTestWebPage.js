fixture("First Fixture")
    .page("https://google.com/")

    test.page("https://devexpress.github.io/testcafe/example/")
    ("firstTestWebPage", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });