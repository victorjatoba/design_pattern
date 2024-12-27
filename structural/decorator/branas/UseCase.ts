export default interface UseCase {
    name: string
    execute(input: any): any
}