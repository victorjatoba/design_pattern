import UseCase from "./UseCase";

export default class Signup implements UseCase {
    name = "signup"
    execute(input: any): any {
        console.log(this.name, input)
    }
}