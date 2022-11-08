import { Selector } from "testcafe"

fixture('Hover Fixture')
.page('https://devexpress.github.io/testcafe/example/')

const populateButton = Selector('#populate')

test('Hover test', async t => {
    await t
    .setTestSpeed(0.1)
    .hover(populateButton);
})