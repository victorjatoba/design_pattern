public class Main {
    public static void main(String[] args) {
        NutritionFacts cocaCola = new NutritionFacts(240, 1000, 20);
        cocaCola.setServings(1111);
        cocaCola.setServingSize(2222);
        System.out.println(cocaCola);

        NutritionFactsWithBuilder cola = new NutritionFactsWithBuilder.Builder(240, 1000, 20)
                .servingSize(1)
                .servings(2)
                .build();
        System.out.println(cola);
    }
}