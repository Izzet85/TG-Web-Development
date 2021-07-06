package com.company;


class Animal {
    String name;
    int age;
    public static String type = "Animal";

    public Animal(String name,int age){
        this.name = name;
        this.age = age;
    }


     public  void feed(){
        System.out.println("The animal feeded");
    }
    public  void feed(String eten){
        System.out.println("The animal feeded" + eten);
    }

     public  void visitVet(){
        System.out.println("The animal feeded");
    }
}

class Bear extends Animal{

    public Bear(String name, int age,int weight) {
        super(name, age);

    }
    public  void feed(){

        System.out.println(" de beer heeft de dierenarts heeft opgegeten.\n");
    }

    public  void visitVet(){
        System.out.println(" de beer heeft de dierenarts heeft opgegeten.\n");
    }


    public String type ="Bear";

    public void showType(){

        System.out.println( "type of bear which is extended from class Animal  "+type);
        System.out.println("type of class Animal  "+ super.type);





        System.out.println("type of class bear is  is" + type);

    }


}






public class Main {

    public static <obj, bears> void main(String[] args) {
	// write your code here
        Animal animal1 = new Animal("Beer",12);
        System.out.println("Name of animal1 is " +  animal1.name + " and his age is " + animal1.age);
        Bear bear1 = new Bear("Brown Bear",5,50);
        System.out.println("bear1 object heet " + bear1.name + "en hij is pas " + bear1.age + " oud"  );
        Bear bear2 = new Bear("Polar Bear",3,60);
        System.out.println("bear2 object heet " + bear2.name + "en hij is pas " + bear2.age + " oud en weegt " + bear2  );
        bear1.showType();
        Animal animal2 = new Animal("ijsbeer",10);
        Animal animal3 = new Animal("ijsbeer",20);



         Animal[] animal = new Animal[3];

         animal[0] = animal1;
         animal[1] = animal2;
        animal[2] = animal3;
        System.out.println(  "The first bear in the array is " + animal[0].age  + " old and his name is " + animal[0].name );
        System.out.println(  "The second bear in the array is " + animal[1].age  + " old and his name is " + animal[1].name );
        System.out.println(  "The second bear in the array is " + animal[2].age  + " old and his name is " + animal[2].name );


        Animal[] bearArray = new Animal[2];

        bearArray[0] = bear1;
        bearArray[1] = bear2;
        System.out.println(  "The first bear in the array is " + bearArray[0].age  + " old and his name is " + bearArray[0].name );
        System.out.println(  "The second bear in the array is " + bearArray[1].age  + " old and his name is " + bearArray[1].name );



        for (Animal animalData:bearArray ){
            animalData.feed();


        }

        for (Animal bearData:bearArray ){
            bearData.feed();


        }




        }







    }

