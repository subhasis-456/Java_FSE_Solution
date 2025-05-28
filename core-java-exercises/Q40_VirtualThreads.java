public class Q40_VirtualThreads {
    public static void main(String[] args) throws Exception {
        for (int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> System.out.println("Hello from virtual thread"));
        }
        Thread.sleep(2000);
    }
} 