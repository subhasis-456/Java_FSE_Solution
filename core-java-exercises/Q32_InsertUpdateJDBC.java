import java.sql.*;

class StudentDAO {
    Connection conn;
    StudentDAO() throws Exception {
        Class.forName("org.sqlite.JDBC");
        conn = DriverManager.getConnection("jdbc:sqlite:students.db");
    }
    void insert(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("INSERT INTO students VALUES (?, ?)");
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.executeUpdate();
        ps.close();
    }
    void update(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
        ps.close();
    }
    void close() throws Exception {
        conn.close();
    }
}

public class Q32_InsertUpdateJDBC {
    public static void main(String[] args) throws Exception {
        StudentDAO dao = new StudentDAO();
        dao.insert(1, "Alice");
        dao.update(1, "Alicia");
        dao.close();
    }
} 