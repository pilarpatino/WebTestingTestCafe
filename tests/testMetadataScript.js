fixture.meta('Version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.meta('env', 'production')
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

    