import { Selector, ClientFunction } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const SubmitButton = Selector("#submit-button");

const getPageUrl = ClientFunction(() => window.location.href)

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

    test("Firs Test", async t =>{
        await t
            .typeText( developerName, "TAU")
            .click(osOption)
            .click(SubmitButton)
            .expect(getPageUrl()).contains('thank-you');

    });