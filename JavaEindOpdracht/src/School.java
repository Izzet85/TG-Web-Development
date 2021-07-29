import java.time.LocalDate;
import java.util.ArrayList;

public class School {
    private  ArrayList <Teacher> listOfTeachers;
    private  ArrayList<Student> ListOfStudents;
    private String schoolType;
    private ArrayList<String> curriculum = new ArrayList<String>();

    public ArrayList<Teacher> getListOfTeachers() {
        return listOfTeachers;
    }

    public void setListOfTeachers(ArrayList<Teacher> listOfTeachers) {
        this.listOfTeachers = listOfTeachers;
    }

    public ArrayList<Student> getListOfStudents() {
        return ListOfStudents;
    }

    public void setListOfStudents(ArrayList<Student> listOfStudents) {
        ListOfStudents = listOfStudents;
    }

    public String getSchoolType() {
        return schoolType;
    }

    public void setSchoolType(String schoolType) {
        this.schoolType = schoolType;
    }

    public ArrayList<String> getCurriculum() {
        return curriculum;
    }

    public void setCurriculum(ArrayList<String> curriculum) {
        this.curriculum = curriculum;
    }

    public School(ArrayList<Teacher> listOfTeachers, ArrayList<Student> listOfStudents, String schoolType, ArrayList<String> curriculum) {
        this.listOfTeachers = listOfTeachers;
        ListOfStudents = listOfStudents;
        this.schoolType = schoolType;
        this.curriculum = curriculum;
    }

    public  void addStudent(String name, int year, int month, int dayOfMonth, String nationality){
         Student student1 = new Student(name, LocalDate.of(year,month,dayOfMonth),nationality);
        ListOfStudents.add(student1);



    }

    public  void addTeacher(String name,int year,int month,int dayOfMonth){

        Teacher teacher1 = new Teacher(name,LocalDate.of(year,month,dayOfMonth));
        listOfTeachers.add(teacher1);





    }

    public static void main(String[] args) {

        School school1 = new School(null,null,"primary School",null);

        school1.addStudent("Izzet",1985,3,1,"dutch");

        System.out.println(school1.getListOfStudents());

    }

}
