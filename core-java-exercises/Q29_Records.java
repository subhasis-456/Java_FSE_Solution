import java.util.*;
import java.util.stream.*;

public class Q29_Records {
    public record Person(String name, int age) {}
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 22),
            new Person("Bob", 17),
            new Person("Charlie", 25)
        );
        for (Person p : people) {
            System.out.println(p);
        }
        List<Person> adults = people.stream().filter(p -> p.age() >= 18).collect(Collectors.toList());
        for (Person p : adults) {
            System.out.println(p);
        }
    }
} 