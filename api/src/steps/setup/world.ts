import playwright, {APIRequestContext} from "playwright";
import {World, IWorldOptions, setWorldConstructor} from "@cucumber/cucumber";
import {GlobalAPIResponseVariables} from "../../env/global";


export type Api = {
    request:APIRequestContext
}

export class ScenarioWorld extends World{
    constructor(options:IWorldOptions) {
        super(options);

        this.globalAPIResponseVariables = {}
    }

    globalAPIResponseVariables:GlobalAPIResponseVariables

    api!:Api

    async init(): Promise<Api>{

        const request = await this.newRequest()
        this.api = {request}

        return this.api
    }

    private newRequest = async (): Promise<APIRequestContext> => {
        const request = await playwright.request.newContext({
            extraHTTPHeaders:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        })

        return request
    }
}

setWorldConstructor(ScenarioWorld);