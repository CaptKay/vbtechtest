import { Given, Then, When } from "@cucumber/cucumber";
import path from 'path';
import { findKeyInNestedFolders } from "../../helper/jsonLoaderConfig/jsonLoader";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/fixture";

const folderPath = './pages/';


Then(/^a link with text "([^"]*)" link must be present$/, async function (key: string) {
  const value = await findKeyInNestedFolders(folderPath, key);
  await fixture.page.waitForLoadState("load"); //wait for page to load
  var actualText = await fixture.page.locator(value).textContent();
  expect(actualText).toBe(key);

});

When(/^a link with text "([^"]*)" must be present$/, async function (key: string) {
  const value = await findKeyInNestedFolders(folderPath, key);
  await fixture.page.waitForLoadState("load"); //wait for page to load
  var actualText = await fixture.page.locator(value).textContent();
  expect(actualText).toBe(key);


});


Given(/^the "([^"]*)" box must contains "([^"]*)" at index "([^"]*)"$/, async function (key: string, text: string, index: number) {

  console.log(`the ${key} box must contains ${text} at index ${index}`);
  const value = await findKeyInNestedFolders(folderPath, key);
  // expecting value = //ul[@class='dropdown-menu show']
  ////ul[@class='dropdown-menu show']//li//a/span
  await fixture.page.waitForLoadState("load"); //wait for page to load

  var li = await fixture.page.locator(value).locator("li").nth(index - 1);
  var actualText = await li.innerText();
  console.log(`value is ${actualText}`);

  expect(actualText).toBe(text);

});
