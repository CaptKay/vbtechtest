import { Given } from "@cucumber/cucumber";
import path from 'path';
import {findKeyInNestedFolders} from "../../helper/jsonLoaderConfig/jsonLoader";
import { fixture } from "../../hooks/fixture";

const folderPath = './pages/';


Given(/^I click on the "([^"]*)" (?:button|link|text|radio button|checkbox)$/, async function (key:string) {
    
 
    console.log(`I click on the ${key} (?:button|link|text|radio button|checkbox)`);
    const value = await findKeyInNestedFolders(folderPath, key);
  
    await fixture.page.waitForLoadState("load");
    await fixture.page.click(value);
      
  });

  
  