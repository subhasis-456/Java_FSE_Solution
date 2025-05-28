import java.sql.*;

public class Q33_TransactionHandlingJDBC {
    public static void main(String[] args) throws Exception {
        Class.forName("org.sqlite.JDBC");
        Connection conn = DriverManager.getConnection("jdbc:sqlite:bank.db");
        conn.setAutoCommit(false);
        try {
            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setInt(1, 100);
            debit.setInt(2, 1);
            debit.executeUpdate();
            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setInt(1, 100);
            credit.setInt(2, 2);
            credit.executeUpdate();
            conn.commit();
            debit.close();
            credit.close();
        } catch (Exception e) {
            conn.rollback();
        }
        conn.close();
    }
} 