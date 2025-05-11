class DrivingRouteStrategy implements RouteStrategy<String> {
    @Override
    public void calculateRoute(String A, String B) {
        System.out.println("Driving from " + A + " to " + B);
    }
}
