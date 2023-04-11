import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";


export let globalBody:any;

Given('I create an {string}', async function(this:ScenarioWorld, endpoint:string){
    const {api:{request},globalAPIResponseVariables}=this

    console.log(`I created an ${endpoint}`)

    const response = await request.post("https://api.restful-api.dev/"+endpoint, {
        data: {
            "name": "Apple MacBook Pro 77",
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

    globalBody = await response.json()

    //console.log(globalBody.id)
})


// Given(/^I retrieve the "([^"]*)"$/, async function(this:ScenarioWorld, endpoint:string){
//     const {api:{request},globalAPIResponseVariables}=this

//     console.log(`I retrieve the ${endpoint}`)

//     const respBody = await globalAPIResponseVariables.response.json()
//     const resId = respBody.id
//     endpoint = `${endpoint}/${resId}`


//     const response = await request.get("https://api.restful-api.dev/"+endpoint)


//     globalAPIResponseVariables.response = response

//     console.log(await globalAPIResponseVariables.response.json())

//     // globalBody = await response.json()

//     // console.log(globalBody.id)
// })



