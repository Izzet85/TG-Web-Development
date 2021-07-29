import java.util.ArrayList;

public class Class {
    String name;
    boolean teacherMentor;
    ArrayList<String>  listOfStudents = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isTeacherMentor() {
        return teacherMentor;
    }

    public void setTeacherMentor(boolean teacherMentor) {
        this.teacherMentor = teacherMentor;
    }

    public ArrayList<String> getListOfStudents() {
        return listOfStudents;
    }

    public void setListOfStudents(ArrayList<String> listOfStudents) {
        this.listOfStudents = listOfStudents;
    }
}

