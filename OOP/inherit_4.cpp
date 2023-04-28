//Trong kế thừa, khi lớp con khai báo phương thức có tên trùng với phương thức ở lớp cha thì phương thức của lớp cha sẽ bị thay thế bởi phương thức ở lớp con.
//Lưu ý: trong trường hợp phương thức của lớp cha bị ghi đè thì bạn vẫn có thể gọi tới nó bằng toán tử ::

#include<iostream>

using namespace std;

class Person {
private:
	string name;
	string gender;

public:
	Person(string name, string gender) {
		this->name = name;
		this->gender = gender;
	}

	string getName() {
		return name;
	}

	void setName(string name) {
		this->name = name;
	}

	string getGender() {
		return gender;
	}

	void setGender(string gender) {
		this->gender = gender;
	}

	void display() {
		cout << "Name: " << name << endl;
		cout << "Gender: " << gender << endl;
	}
};

class Student : Person {
	private:
	float salary;
	public:
	Student(string name, string gender, float salary) : Person(name,gender) {
		this->salary=salary;
	}

	void setSalary(float salary) {
		this->salary=salary;
	}

	float getSalary() {
		return salary;
	}

	void display() {
		Person::display();
		cout << "Salary: " << salary << endl;
	}
};

int main() {
	Student s("Trung", "Male", 1700);
	s.display();
	return 0;
}