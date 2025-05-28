import java.util.Scanner;

public class Q16_PalindromeChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String rev = new StringBuilder(s).reverse().toString();
        if (s.equals(rev)) System.out.println("Palindrome");
        else System.out.println("Not a palindrome");
    }
} 