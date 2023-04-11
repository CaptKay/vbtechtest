import {Given} from '@cucumber/cucumber'
import {ScenarioWorld} from "./setup/world";
import { globalBody } from './1_post-steps';



Given('I retrieve the {string}', async function(this:ScenarioWorld, endpoint:string){
    const {api:{request},globalAPIResponseVariables}=this

    console.log(`I retrieve the ${endpoint}`)

    const respBody = globalBody;
   // console.log(respBody.id)

    const resId = respBody.id
    //console.log(resId)

    endpoint = `${endpoint}/${resId}`
   // console.log(endpoint)


    const response = await request.get("https://api.restful-api.dev/"+endpoint)


    globalAPIResponseVariables.response = response

    console.log(await globalAPIResponseVariables.response.json())

})
