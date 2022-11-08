import { Selector } from "testcafe";

fixture("Set Speed Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

    const nameInput = Selector('#developer-name');

    test("Set Speed Test", async t =>{
        await t
            .setTestSpeed(0.01)
            .typeText(nameInput, "Peter")
            .typeText(nameInput, "Parker")
            .click("#macos")
            .click("#submit-button");

    });