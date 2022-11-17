import { Selector } from "testcafe";

fixture("Set Speed Fixture")

/*    test.only.page("https://devexpress.github.io/testcafe/example/")
    ("Firs Test one", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });
    */

    test.page("https://devexpress.github.io/testcafe/example/")
    ("skipTest - Firs Test two", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });