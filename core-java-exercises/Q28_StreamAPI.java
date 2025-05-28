import java.util.*;
import java.util.stream.*;

public class Q28_StreamAPI {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> evens = list.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());
        for (int n : evens) {
            System.out.println(n);
        }
    }
} 