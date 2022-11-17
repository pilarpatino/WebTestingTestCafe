import { Selector } from "testcafe";

fixture("Set Speed Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

    test("Firs Test", async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");

    });