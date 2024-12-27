import Signup from "./Signup";
import {LoggerDecorator} from "./LoggerDecorator";
import UseCase from "./UseCase";

let signup: UseCase = new LoggerDecorator(new Signup())
signup.execute({test: "testing..."})

signup = new Signup();
signup.execute({})