@FunctionalInterface
interface RouteStrategy<T> {
    public void calculateRoute(T A, T B);
}
