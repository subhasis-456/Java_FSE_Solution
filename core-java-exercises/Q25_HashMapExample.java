import java.util.HashMap;
import java.util.Scanner;

public class Q25_HashMapExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> map = new HashMap<>();
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            int id = sc.nextInt();
            sc.nextLine();
            String name = sc.nextLine();
            map.put(id, name);
        }
        int searchId = sc.nextInt();
        System.out.println(map.get(searchId));
    }
} 