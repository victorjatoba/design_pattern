public class NutritionFacts {
    private int servings;
    private int servingSize;
    private int calories;
    private int sugar;
    private int protein;

    public NutritionFacts(int servings,
                          int servingSize,
                          int calories,
                          int sugar,
                          int protein) {
        this.servings = servings;
        this.servingSize = servingSize;
        this.calories = calories;
        this.sugar = sugar;
        this.protein = protein;
    }

    public NutritionFacts(int calories,
                          int sugar,
                          int protein) {
        this(0, 0, calories, sugar, protein);
    }

    public int getCalories() {
        return calories;
    }

    public int getSugar() {
        return sugar;
    }

    public int getProtein() {
        return protein;
    }

    public int getServings() {
        return servings;
    }

    public int getServingSize() {
        return servingSize;
    }

    @Override
    public String toString() {
        return "NutritionFactsWithBuilder{" +
                "servings=" + servings +
                ", servingSize=" + servingSize +
                ", calories=" + calories +
                ", sugar=" + sugar +
                ", protein=" + protein +
                '}';
    }
}