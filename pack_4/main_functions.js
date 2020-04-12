function placePatients(patients, diagnosis_map, rooms_list, rooms_left, room_capacity)
{
    let patients_left = Object.keys(patients).length
    let sysle_coonter = 0;
    while(rooms_left > 0 && patients_left >= 0)
    {

        let res_buffer = maxDiagnosisKeyAndValue(diagnosis_map);
        let max_diagnosis_key = res_buffer[0], max_diagnosis_value = res_buffer[1];

        if(max_diagnosis_value >= room_capacity)
        {
            let patients_in_new_room = [];
            let counter = 0;
            while( patients_in_new_room.length <= room_capacity && counter < patients_left)
            {
                if(patients[counter].diagnosis == max_diagnosis_key)
                {
                    patients[counter].room_number = rooms_left;
                    document.getElementById(patients[counter].patient_number).innerText = rooms_left.toString();
                    patients_in_new_room.push(patients[counter]);
                    patients.splice(counter, 1);
                    patients_left--;
                    counter--; 
                }
                counter++;
            }
            let new_room = new Room(patients_in_new_room, room_capacity);
            rooms_list.push(new_room);
            rooms_left--;
            diagnosis_map.set(max_diagnosis_key,max_diagnosis_value - room_capacity);
        }
        else
        {
            let patients_in_new_room = [];
            while(patients_in_new_room.length < room_capacity && patients_left > 0)
            {
                res_buffer = maxDiagnosisKeyAndValue(diagnosis_map);
                max_diagnosis_key = res_buffer[0], max_diagnosis_value = res_buffer[1] 
                if(max_diagnosis_value < 1)
                    break;
                for(let i = 0; i < patients_left; i++)
                {
                    if(patients[i].diagnosis == max_diagnosis_key && max_diagnosis_value > 0)
                    {
                        patients[i].room_number = rooms_left;
                        document.getElementById(patients[i].patient_number).innerText = rooms_left.toString();
                        patients_in_new_room.push(patients[i]);
                        patients.splice(i, 1);  
                        i--;
                        patients_left--;

                        max_diagnosis_value--;
                        diagnosis_map.set(max_diagnosis_key, max_diagnosis_value)
                    }
                    if(patients_in_new_room.length >= room_capacity)
                        break;
                    
                }
            }
            let new_room = new Room(patients_in_new_room, room_capacity);
            rooms_list.push(new_room);
            rooms_left--;
        }
        sysle_coonter++;
    }
}


    function maxDiagnosisKeyAndValue(diagnosis_map)
    {
        let max_diagnosis_key = 0, max_diagnosis_value = 0;
        for (var [key, value] of diagnosis_map.entries()) {
            if(value > max_diagnosis_value)
            {
                max_diagnosis_value = value;
                max_diagnosis_key = key;
            }
        }
        return [max_diagnosis_key, max_diagnosis_value];
    }

    function genderDivision(same_patients,patients, gender)
    {

        for(let key in patients)
        {
            if(String(patients[key].gender) == String(gender))
                same_patients.push(patients[key]);
        }
    }

    function diagnosisClastering(diagnosis_map, patients)
    {
        for(let key in patients){
            if(diagnosis_map.has(patients[key].diagnosis))
            {
                let old_value = Number(diagnosis_map.get(patients[key].diagnosis));
                old_value +=1;
                diagnosis_map.set(patients[key].diagnosis, old_value)
            }   
            else 
                diagnosis_map.set(patients[key].diagnosis, 1)
        }
    }

    function printResult(rooms, patients, gender)
    {
        alert(`${gender} patients that got rooms:`)
        for(let key in rooms)
        {
            let single_room = rooms[key]
            for(let p in single_room.patients)
                alert(`${single_room.patients[p].first_name} is in the room no ${single_room.patients[p].room_number}; diagnosis: ${single_room.patients[p].diagnosis} `)   
        }

        alert(`${gender} patients that didn't got room:`)
        for(let key in patients){
            alert(`${patients[key].first_name} has a diagnosis ${patients[key].diagnosis}`)
            document.getElementById(patients[key].patient_number).innerText = "-";
        }
    }

function main()
{
    //alert("initializing started");
    let patients = [], rooms_left = 4, room_capacity = 2;
    let person1 = new Patient("Francis", "Ford", "Coppola", "male", 81, "dis", "patient1");  
    let person2 = new Patient("Augusta","Ada","Lovelace","female",36,"cancer", "patient2");
    let person3 = new Patient("Elvis","Aaron","Presley","male",42,"insomnia", "patient3");
    let person4 = new Patient("Nancy","Sandra","Sinatra","female",79,"Stroke", "patient4");
    let person5 = new Patient("Wassily","Wassilyevich","Kandinsky","male",77,"Stroke", "patient5")
    let person6 = new Patient("Svetlana","Yuryevna","Martynchik","female", 55, "Stroke", "patient6") 
    let person7 = new Patient("Madeleine","Korbel","Albright","female",82, "trump", "patient7")
    let person8 = new Patient("Marie","Curie","Skłodowska","female", 66, "trump", "patient8")
    patients.push(person1);
    patients.push(person2);
    patients.push(person3);
    patients.push(person4);
    patients.push(person5);
    patients.push(person6);
    patients.push(person7);
    patients.push(person8);

    let female_patients = [], male_patients = [];
    let female_rooms = [], male_rooms = [];
    let female_diagnosis_map = new Map();
    let male_diagnosis_map = new Map();

    genderDivision(female_patients, patients,"female");        
    diagnosisClastering(female_diagnosis_map, female_patients);
    placePatients(female_patients, female_diagnosis_map, female_rooms, rooms_left,room_capacity);
    printResult(female_rooms, female_patients, "female");

    rooms_left = rooms_left - Object.keys(female_rooms).length + 1;
    //alert(`rooms_left: ${rooms_left}, ${Object.keys(female_rooms).length}`)

    genderDivision(male_patients, patients,"male");        
    diagnosisClastering(male_diagnosis_map, male_patients);
    placePatients(male_patients, male_diagnosis_map, male_rooms, rooms_left, room_capacity);
    printResult(male_rooms, male_patients, "male")
    alert("Task is complete")

}