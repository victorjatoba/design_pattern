final class FinalClass {
    public void display() {
        System.out.println("Display method of FinalClass");
    }
}

interface FinalClassDecorator {
    void display();
}

class FinalClassWrapper implements FinalClassDecorator {
    private FinalClass finalClass;

    public FinalClassWrapper (FinalClass finalClass) {
        this.finalClass = finalClass;
    }

    @Override
    public void display() {
        System.out.println("before");
        this.finalClass.display();
        System.out.println("final");
    }
}

public class Decorator {
    public static void main(String[] args) {
        FinalClass finalClass = new FinalClass();

        FinalClassDecorator decorator = new FinalClassWrapper(finalClass);

        decorator.display();
    }
}
