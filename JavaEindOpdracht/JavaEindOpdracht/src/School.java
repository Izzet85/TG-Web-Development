import java.time.LocalDate;
import java.util.ArrayList;

public class School {
    private  ArrayList <Teacher> listOfTeachers;
    private  ArrayList<Student> ListOfStudents;
    private String schoolType;
    private static ArrayList<String> curriculum = new ArrayList<String>();
    private static ArrayList<Class> classes = new ArrayList<Class>();


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

//    public School(ArrayList<Teacher> listOfTeachers, ArrayList<Student> listOfStudents, String schoolType, ArrayList<String> curriculum) {
//        this.listOfTeachers = listOfTeachers;
//        ListOfStudents = listOfStudents;
//        this.schoolType = schoolType;
//        this.curriculum = curriculum;
//    }

    public  void addStudent(String name, int year, int month, int dayOfMonth, String nationality){
         Student student1 = new Student(name, LocalDate.of(year,month,dayOfMonth),nationality);
        ListOfStudents.add(student1);



    }

    public  void addTeacher(String name,int year,int month,int dayOfMonth){

        Teacher teacher1 = new Teacher(name,LocalDate.of(year,month,dayOfMonth));
        listOfTeachers.add(teacher1);





    }

    public static void main(String[] args) {

//       CREATIE VAN TEACHER OBJECTS




        Teacher teacher1 = new Teacher("Hans", LocalDate.of(1970,10,15));
        Teacher teacher2 = new Teacher("Kees", LocalDate.of(1979,9,10));
        Teacher teacher3 = new Teacher("Kees", LocalDate.of(1989,2,1));




//      TOEVOEGEN VAN TEACHER OBJECTS NAAR EEN ARRAYLIST

        ArrayList <Teacher> teachers = new ArrayList <Teacher>();

        teachers.add(teacher1);
        teachers.add(teacher2);
        teachers.add(teacher3);
        System.out.println(teachers.get(0));
        System.out.println(teachers.get(1));
        System.out.println(teachers.get(2));
        System.out.println(teachers.size());

        for (Teacher i: teachers
             ) {
            System.out.println();
        }


//       CREATIE VAN STUDENT OBJECTS

        Student student1 = new Student("Izzet",LocalDate.of(1985,1,3),"Dutch");
        Student student2 = new Student("Mark",LocalDate.of(1991,3,12),"Dutch");
        Student student3 = new Student("Klaas",LocalDate.of(1989,6,20),"Dutch");


//      TOEVOEGEN VAN STUDENT OBJECTS NAAR EEN ARRAYLIST

        ArrayList <Student> students = new ArrayList<Student>();

        students.add(student1);
        students.add(student2);
        students.add(student3);

        System.out.println(students.get(0));
        System.out.println(students.get(1));
        System.out.println(students.get(2));
        System.out.println(students.size());


        School school1 = new School();

        school1.setListOfTeachers(teachers);
        System.out.println(school1.getListOfTeachers());

        school1.setListOfStudents(students);
        System.out.println(school1.getListOfStudents());

        school1.addTeacher("Peter",1988,4,5);
        System.out.println(school1.getListOfTeachers());

        school1.addStudent("Klaas",1988,12,12,"Dutch");
        System.out.println(school1.getListOfStudents());


























    }



}
