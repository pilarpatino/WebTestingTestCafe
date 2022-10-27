fixture('Set Page timeout Fixture')
.page('https://devexpress.github.io/testcafe/example/')

test('set page timeout test', async t => {
    await t
    .setPageLoadTimeout(0)
    .navigateTo("http://www.google.com")
})