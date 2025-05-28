public class Q30_PatternMatchingSwitch {
    static void printType(Object obj) {
        if (obj instanceof Integer) {
            System.out.println("Integer: " + obj);
        } else if (obj instanceof String) {
            System.out.println("String: " + obj);
        } else if (obj instanceof Double) {
            System.out.println("Double: " + obj);
        } else {
            System.out.println("Other type");
        }
    }
    public static void main(String[] args) {
        printType(42);
        printType("hello");
        printType(3.14);
        printType(true);
    }
} 