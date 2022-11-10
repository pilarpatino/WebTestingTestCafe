# WebTestingTestCafe

- Execution with Metadata = testcafe chrome tests/testMetadataScript.js --test-meta env=production

- Check list of all available browsers =  testcafe --list-browsers

- Run test in all browsers available = testcafe all tests

- Skip java script errors = testcafe all tests/firstTest.js - skipt-js-errors

- Run test in Parallel = testcafe -c 3 chrome tests/firstTest.js (3 = Number of times that the test will be run)
                         testcafe -c 4 safari, firefox tests/firstTest.js

- Run test and fixture by metadata = testcafe chrome tests/testMetadataScript.js --test-meta env=production

- Run test and fixture by name = testcafe chrome tests/hooksTest.js -t "Firs Test"

- Run test in Headless Mode = testcafe chrome:headless tests/firstSelectorTest.js
                              testcafe firefox:headless tests/firstSelectorTest.js

- Run test using Chromium Device Emulation = testcafe "chrome:emulation:device=iphone X" tests/firstSelectorTest.js       

- Execution with Metadata = testcafe chrome tests/testMetadataScript.js --test-meta env=production
