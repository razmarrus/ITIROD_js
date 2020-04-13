class Room {
    constructor(patients, room_capacity){
        this.patients = patients;
        this.room_capacity = room_capacity;
    }
}

class Patient {
    constructor(first_name, second_name, third_name, gender, age, diagnosis, patient_number, room_number){
        this.first_name = first_name;
        this.second_name = second_name;
        this.third_name = third_name; 
        this.gender = gender; 
        this.age = age; 
        this.room_number = room_number ? room_number : "-";//"No information"; 
        this.diagnosis = diagnosis;
        this.patient_number = patient_number;
    }
}