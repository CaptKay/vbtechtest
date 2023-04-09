import { Given } from "@cucumber/cucumber";
import { findKeyInNestedFolders } from "../../helper/jsonLoaderConfig/jsonLoader";
import { fixture } from "../../hooks/fixture";


const folderPath = './pages/';


Given(/^I navigate to the "([^"]*)" page$/, async function (key:string) {
  
    console.log(`Not found ${folderPath}`);
 
  console.log(`I am on the ${key} page`);
  const url = await findKeyInNestedFolders(folderPath, key);

  await fixture.page.goto(url);
    
});
