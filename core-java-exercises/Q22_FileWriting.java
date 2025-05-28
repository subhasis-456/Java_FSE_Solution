import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

public class Q22_FileWriting {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        FileWriter fw = new FileWriter("output.txt");
        fw.write(s);
        fw.close();
        System.out.println("Written");
    }
} 