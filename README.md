# WebTestingTestCafe
# Extensions to install = TestCafe Test Runner, TestCafe Snippets, TestLatte 
# Library to record videos with nodejs (https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg) = npm i @ffmpeg-installer/ffmpeg

- commands
  npm i
  npm install -g testcafe

- Execution with Metadata = testcafe chrome test/testMetadataScript.js --test-meta env=production

- Check list of all available browsers =  testcafe --list-browsers

- Run test in all browsers available = testcafe all test

- Skip java script errors = testcafe all test/firstTest.js - skipt-js-errors

- Run test in Parallel = testcafe -c 3 chrome test/firstTest.js (3 = Number of times that the test will be run)
                         testcafe -c 4 safari, firefox test/firstTest.js

- Run test and fixture by metadata = testcafe chrome test/testMetadataScript.js --test-meta env=production

- Run test and fixture by name = testcafe chrome test/hooksTest.js -t "Firs Test"

- Run test in Headless Mode = testcafe chrome:headless test/firstSelectorTest.js
                              testcafe firefox:headless test/firstSelectorTest.js

- Run test using Chromium Device Emulation = testcafe "chrome:emulation:device=iphone X" test/firstSelectorTest.js       

- Execution with Metadata = testcafe chrome test/testMetadataScript.js --test-meta env=production

- Debug mode on Fail = testcafe chrome test/debugModeUploadFile.js --debug-on-fail

- Take screenshots when the test fail = testcafe chrome test/debugModeUploadFile.js  -s takeOnFails=true

- Recording video when the test is running = testcafe chrome test/iframeTest.js --video artifacts/video

- Recording video when the test fail = testcafe chrome test/IframeTest.js --video artifacts/videos --video-options failedOnly=true