import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

public class Teacher extends User {

    private Class mentor;
    private ArrayList<String> curriculum;

    public Class getMentor() {
        return mentor;
    }

    public void setMentor(Class mentor) {
        this.mentor = mentor;
    }

    public ArrayList<String> getCurriculum() {
        return curriculum;
    }

    public void setCurriculum(ArrayList<String> curriculum) {
        this.curriculum = curriculum;
    }

    public Teacher(String name, LocalDate dateOfBirth) {
        super(name, dateOfBirth);
    }

    public Teacher(String name, LocalDate dateOfBirth, Class mentor, ArrayList<String> curriculums) {
        super(name, dateOfBirth);
        this.mentor = mentor;
        this.curriculum = curriculum;

    }
}
