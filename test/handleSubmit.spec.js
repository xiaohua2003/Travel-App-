import "babel-polyfill";
import { handleSubmit } from "../src/client/js/handleSubmit";

describe("Testing the handleSubmit functionality", () => { 
    test("Testing the handleSubmit() function", () => {
           
           expect(handleSubmit).toBeDefined();
})});

