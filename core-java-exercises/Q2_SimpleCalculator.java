import java.util.Scanner;

public class Q2_SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        String op = sc.next();
        double res = 0;
        if (op.equals("+")) res = a + b;
        else if (op.equals("-")) res = a - b;
        else if (op.equals("*")) res = a * b;
        else if (op.equals("/")) res = a / b;
        System.out.println(res);
    }
} 