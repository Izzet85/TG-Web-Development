import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

public class Student extends User {

    private String nationality;

    private String profile;
    private ArrayList<String> grades;
    private ArrayList<LocalDate> datesAbsent;
    private ArrayList<Class> classes;

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public ArrayList<String> getGrades() {
        return grades;
    }

    public void setGrades(ArrayList<String> grades) {
        this.grades = grades;
    }

    public ArrayList<LocalDate> getDatesAbsent() {
        return datesAbsent;
    }

    public void setDatesAbsent(ArrayList<LocalDate> datesAbsent) {
        this.datesAbsent = datesAbsent;
    }

    public ArrayList<Class> getClasses() {
        return classes;
    }

    public void setClasses(ArrayList<Class> classes) {
        this.classes = classes;
    }

    public Student(String name, LocalDate dateOfBirth, String nationality) {
        super(name, dateOfBirth);
        this.nationality = nationality;
    }

    public Student(String name, LocalDate dateOfBirth, String nationality, String profile) {
        super(name, dateOfBirth);
        this.nationality = nationality;
        this.profile = profile;
    }
}
