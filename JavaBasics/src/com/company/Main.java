package com.company;
import java.util.Scanner;

public class Main {

    static class Person {


        //    instance variables
        static int age = 32;
        static String Name = "Izzet";




    }




    public static void main(String[] args) {
	// write your code here


        Scanner myScanner = new Scanner(System.in); // Make scanner obj
        System.out.println("Type je naam:");
        String naam = myScanner.nextLine();
        System.out.println(naam);

        System.out.println("Type je geboorte datum:");
        String geboorteDatum = myScanner.nextLine();
        System.out.println(geboorteDatum);


        System.out.println(System.currentTimeMillis());

        const currentTime = System.currentTimeMillis();










    }
}
