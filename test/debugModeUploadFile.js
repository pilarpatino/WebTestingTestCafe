import { Selector } from "testcafe";

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload Fixture", async t =>{
    await t
    .setFilesToUpload(fileUpload, '../../upload/Logo.jpg')
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload, '../../upload/Logo.jpg')
    .debug()
    .click(uploadFileButton);

})


