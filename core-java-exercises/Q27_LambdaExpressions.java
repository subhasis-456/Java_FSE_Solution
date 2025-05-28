import java.util.*;

public class Q27_LambdaExpressions {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("banana", "apple", "cherry", "date");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        for (String s : list) {
            System.out.println(s);
        }
    }
} 