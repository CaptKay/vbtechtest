import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { objectId } from "./2_get-steps";


Given('I partially update an {string}', async function(this:ScenarioWorld, endpoint:string){
    const {api:{request},globalAPIResponseVariables}=this

    console.log(`I partially updated the ${endpoint}`)

//     const respBody = globalBody;
//    console.log(respBody.id)

    const resId = objectId
    //console.log(resId)

    endpoint = `${endpoint}/${resId}`
   // console.log(endpoint)


   const response = await request.patch("https://api.restful-api.dev/"+endpoint, {
    data: {
        "data": {
            "year": 2040,
            "CPU model": "BlueD-Ultra i007",
            "Hard disk size": "1000 TB"
        }
    }
    });


    globalAPIResponseVariables.response = response

    console.log(await globalAPIResponseVariables.response.json())


})