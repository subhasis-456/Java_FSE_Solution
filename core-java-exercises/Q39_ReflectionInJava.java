import java.lang.reflect.*;

public class Q39_ReflectionInJava {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Q39_ReflectionInJava");
        Method[] methods = clazz.getDeclaredMethods();
        for (Method m : methods) {
            System.out.print(m.getName() + "(");
            Class<?>[] params = m.getParameterTypes();
            for (int i = 0; i < params.length; i++) {
                System.out.print(params[i].getSimpleName());
                if (i < params.length - 1) System.out.print(", ");
            }
            System.out.println(")");
        }
        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method greet = clazz.getDeclaredMethod("greet", String.class);
        greet.invoke(obj, "World");
    }
} 