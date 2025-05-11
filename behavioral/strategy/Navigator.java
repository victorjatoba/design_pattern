class Navigator {
    public static void main(String[] args) {
        RouteStrategy<String> route = new DrivingRouteStrategy();
        route.calculateRoute("Aveiro", "Porto");
    }
}
