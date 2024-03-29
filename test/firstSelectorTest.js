import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const SubmitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

    test("firstSelectorTest", async t =>{
        await t
            .typeText( developerName, "TAU")
            .click(osOption)
            .click(SubmitButton);

    });