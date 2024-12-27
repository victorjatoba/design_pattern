import UseCase from "./UseCase";

export class LoggerDecorator implements UseCase {
    name = "I'm decorating before call Signup"
    constructor(readonly useCase: UseCase) {
    }

    execute(input: any) {
        console.log(this.name)
        return this.useCase.execute((input))
    }
}