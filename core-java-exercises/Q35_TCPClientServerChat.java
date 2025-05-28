import java.net.*;
import java.io.*;

public class Q35_TCPClientServerChat {
    public static void main(String[] args) throws Exception {
        new Thread(() -> {
            try {
                ServerSocket server = new ServerSocket(5000);
                Socket s = server.accept();
                BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
                PrintWriter out = new PrintWriter(s.getOutputStream(), true);
                out.println("Hello Client");
                System.out.println(in.readLine());
                s.close();
                server.close();
            } catch (Exception e) {}
        }).start();
        Thread.sleep(500);
        Socket client = new Socket("localhost", 5000);
        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        System.out.println(in.readLine());
        out.println("Hello Server");
        client.close();
    }
} 