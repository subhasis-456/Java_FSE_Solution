import java.util.Scanner;

class InvalidAgeException extends Exception {}

public class Q21_CustomException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        try {
            if (age < 18) throw new InvalidAgeException();
            System.out.println("Valid age");
        } catch (InvalidAgeException e) {
            System.out.println("Invalid age");
        }
    }
} 