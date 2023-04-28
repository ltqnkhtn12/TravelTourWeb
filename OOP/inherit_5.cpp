#pragma once
#include <iostream>

using namespace std;

class Person {
    private:
    string name;
    int age;
    string address;
    public:
    Person (string name, int age, string address) {
        this->name=name;
        this->age=age;
        this->address=address;
    }
    
    void setName (string name) {
    this->name=name;
    }
    
    string getName() {
        return name;
    }
    
    void setAge (int age) {
        this->age=age;
    }
    
    int getAge() {
        return age;
    }
    
    void setAddress (string address) {
        this->address=address;
    }
    
    string getAddress() {
        return address;
    }
    void display() {
		cout << "Name: " << name << endl;
		cout << "Age: " << age << endl;
		cout << "Address: " << address << endl;
	}
};

//Tách file Student.cpp
#include "Person.cpp"

using namespace std;

class Student : public Person {
    private:
    double gpa;
    public:
    Student(string name, int age, string address, double gpa) : Person(name,age,address) {
        this->gpa=gpa;
    }
    void setGpa (double gpa) {
        this->gpa=gpa;
    }
    double getGpa() {
        return gpa;
    }
    void display() {
        Person::display();
        cout << "GPA: " << gpa << endl;
    }
};

//Tách file Teacher:cpp
#include "Person.cpp"

class Teacher : public Person {
    private:
    int salary;
    public:
    Teacher (string name, int age, string address, int salary) : Person(name,age,address) {
        this->salary=salary;
    }
    void setSalary(int salary) {
        this->salary=salary;
    }
    int getSalary() {
        return salary;
    }
    void display() {
        Person::display();
        cout << "Salary: " << salary << endl;
    }
};