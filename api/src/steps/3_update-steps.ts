import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { objectId } from "./2_get-steps";



Given('I update an {string}', async function(this:ScenarioWorld, endpoint:string){
    const {api:{request},globalAPIResponseVariables}=this

    console.log(`I updated the ${endpoint}`)


    const resId = objectId
    //console.log(resId)

    endpoint = `${endpoint}/${resId}`
   // console.log(endpoint)


   const response = await request.put("https://api.restful-api.dev/"+endpoint, {
    data: {
        "name": "ValueBlue BlueDolphin Pro 7",
        "data": {
            "year": 2020,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "10 TB"
        }
    }
    });


    globalAPIResponseVariables.response = response

    console.log(await globalAPIResponseVariables.response.json())

})