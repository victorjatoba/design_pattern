final class Log {
    public String display() {
        return "Log";
    }
}

interface LogDecorator {
    String display();
}

class LogWrapper implements LogDecorator {
    Log log;
    LogWrapper(Log log) {
        this.log = log;
    }

    public String display() {
        this.log.display();
        return this.log.display() + " for today";
    }
}

public class LogDecoratorExample {
    public static void main(String[] args) {
        LogDecorator decorator = new LogWrapper(new Log());
        System.out.println(decorator.display());
    }
}