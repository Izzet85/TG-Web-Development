import java.sql.Array;

public class ThirdYear extends Student{

    private Array[] courses = new Array[4];
    private Array [] GradeCourses = new Array[4];
    private Array [] notesStudents = new Array[4];

    public Array[] getCourses() {
        return courses;
    }

    public void setCourses(Array[] courses) {
        this.courses = courses;
    }

    public Array[] getGradeCourses() {
        return GradeCourses;
    }

    public void setGradeCourses(Array[] gradeCourses) {
        GradeCourses = gradeCourses;
    }

    public Array[] getNotesStudents() {
        return notesStudents;
    }

    public void setNotesStudents(Array[] notesStudents) {
        this.notesStudents = notesStudents;
    }

    public ThirdYear(Array[] courses, Array[] gradeCourses, Array[] notesStudents) {
        this.courses = courses;
        GradeCourses = gradeCourses;
        this.notesStudents = notesStudents;
    }

    @Override
    void passYear() {
        System.out.println("Third year student");
    }


}
