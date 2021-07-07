package com.company;

import java.util.ArrayList;

public class Main {

    class Zoo {

        String [] listOfAllAnimals;



        public void add(String [] animalObject){
//           Animal object = new Animal(age,yearOfBirth,)

        }
        public void remove(){

        }

        public void update(){

        }


        public void birthdayOfAnimal(){
//            welke dieren vandaag jarig zijn

        }

        public void feedingOfAnimalToday(){
//            welke dieren vandaag gevoerd moeten zijn

        }




    }

    public static class Animal{

        String name;
        int age;
        int yearOfBirth;
        int lastDayOfFeeding;
        String [] listOfAnimalToFeed;

        Animal(String name,int age, int yearOfBirth,int lastDayOfFeeding)

        {
            this.name = name;
            this.age = age;
            this.yearOfBirth = yearOfBirth;
            this.lastDayOfFeeding = lastDayOfFeeding;
        }







    }

//    bird class inherited from the parent Animal class
    public static class Bird extends Animal{


        Bird(String name, int age, int yearOfBirth, int lastDayOfFeeding) {
            super(name, age, yearOfBirth, lastDayOfFeeding);
        }
    }
//    reptile class inherited from the parent Animal class

    public static class Reptile extends Animal{


        Reptile(String name, int age, int yearOfBirth, int lastDayOfFeeding) {
            super(name, age, yearOfBirth, lastDayOfFeeding);
        }
    }
    //    cat class inherited from the parent Animal class

   public static class Cat extends Animal{


        Cat(String name, int age, int yearOfBirth, int lastDayOfFeeding) {
            super(name, age, yearOfBirth, lastDayOfFeeding);
        }
    }

    public static void main(String[] args) {
	// write your code here
        Bird Pigeon = new Bird("pigeon",1,2020,1);
        Bird HummingBird = new Bird("humming",2,2019,2);
        Bird swift = new Bird("swift",3,2018,4);

        Reptile Reptile1 = new Reptile("reptile1",5,2016,1);
        Reptile Reptile2 = new Reptile("reptile2",8,2013,7);
        Reptile Reptile3 = new Reptile("reptile3",4,2017,3);


        Cat cat1 = new Cat("cat1",1,2016,3);
        Cat cat2 = new Cat("cat2",1,2013,4);
        Cat cat3 = new Cat("cat3",1,2017,2);






        ArrayList<Animal> listOfAnimals = new ArrayList<Animal>();

        listOfAnimals.add(Pigeon);
        listOfAnimals.add(HummingBird);
        listOfAnimals.add(swift);
        listOfAnimals.add(Reptile1);
        listOfAnimals.add(Reptile2);
        listOfAnimals.add(Reptile3);
        listOfAnimals.add(cat1);
        listOfAnimals.add(cat2);
        listOfAnimals.add(cat3);

        for (Animal object: listOfAnimals){
            System.out.println("animals name is: " + object.name + " his age is " + object.age+" his year of birth is " + object.yearOfBirth + " the lastday he feeded is "+object.lastDayOfFeeding + " day ago");

        }



    }
}
