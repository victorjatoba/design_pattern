/**
 * This class is immutable
 */
public class NutritionFactsWithBuilder {
    private int servings;
    private int servingSize;
    private int calories;
    private int sugar;
    private int protein;

    private NutritionFactsWithBuilder(Builder builder) {
        this.servings = builder.servings;
        this.servingSize = builder.servingSize;
        this.calories = builder.calories;
        this.protein = builder.protein;
        this.sugar = builder.sugar;
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

    public static class Builder {
        // Required parameters
        private int calories;
        private int sugar;
        private int protein;

        // Optional parameters
        private int servings = 0;
        private int servingSize = 0;

        public Builder(int calories,
                       int sugar,
                       int protein) {
            this.calories = calories;
            this.sugar = sugar;
            this.protein = protein;
        }

        public Builder servings(int val) {
            servings = val;
            return this;
        }

        public Builder servingSize(int val) {
            servingSize = val;
            return this;
        }

        public NutritionFactsWithBuilder build() {
            return new NutritionFactsWithBuilder(this);
        }
    }

}
