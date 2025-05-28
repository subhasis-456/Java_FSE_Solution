import java.util.concurrent.*;
import java.util.*;

public class Q41_ExecutorServiceCallable {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(4);
        List<Callable<Integer>> tasks = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            int num = i;
            tasks.add(() -> num * num);
        }
        List<Future<Integer>> results = executor.invokeAll(tasks);
        for (Future<Integer> f : results) {
            System.out.println(f.get());
        }
        executor.shutdown();
    }
} 