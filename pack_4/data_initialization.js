function getDataFromTable(patients)
{
    let i = 1;
    while(!isNaN(document.getElementById("fname" + String(i)).innerText) && i < 11) //&& document.getElementById("fname" + String(i)).innerText != "")
    {
        let f_name = String(document.getElementById("fname" + String(i)).value)
        let s_name = String(document.getElementById("sname" + String(i)).value)
        let t_name= String(document.getElementById("tname" + String(i)).value)
        let gender_table = String(document.getElementById("gender_table" + String(i)).value)
        let age_table = String(document.getElementById("age_table"+ String(i)).value)
        let diagnosis_table = String(document.getElementById("diagnosis_table"+ String(i)).value)
        let room_number = String(document.getElementById("room_number"+ String(i)).innerText)
        //alert(`${i},${f_name},${s_name},${t_name},${gender_table},${age_table},${diagnosis_table},${room_number}`)
        i++;
        if(f_name == "" && t_name == "" && age_table == "" && diagnosis_table == "")
            continue;
                                //("Marie","Curie","Skłodowska","female", 66, "flu", "8")
        let person = new Patient(f_name,s_name,t_name,gender_table,age_table,diagnosis_table,i - 1,room_number)
        patients.push(person);
        // let = String(document.getElementById(""+ String(i)).value)

    }

}


function initializingInfo(patients) 
{
    let person1 = new Patient("Francis", "Ford", "Coppola", "male", 81, "lupus", "1");  
    let person2 = new Patient("Augusta","Ada","Lovelace","female",36,"cancer", "2");
    let person3 = new Patient("Elvis","Aaron","Presley","male",42,"insomnia", "3");
    let person4 = new Patient("Nancy","Sandra","Sinatra","female",79,"stroke", "4");
    let person5 = new Patient("Wassily","Wassilyevich","Kandinsky","male",77,"stroke", "5")
    let person6 = new Patient("Svetlana","Yuryevna","Martynchik","female", 55, "stroke", "6") 
    let person7 = new Patient("Madeleine","Korbel","Albright","female",82, "flu", "7")
    let person8 = new Patient("Marie","Curie","Sklodowska","female", 66, "flu", "8")
    patients.push(person1);
    patients.push(person2);
    patients.push(person3);
    patients.push(person4);
    patients.push(person5);
    patients.push(person6);
    patients.push(person7);
    patients.push(person8);
}

function sortByRoom()
{
    patients = [];
    getDataFromTable(patients);
    patients.sort((a, b) => a.room_number > b.room_number ? 1 : -1);
    tableUpdate(patients)
}

function sortByAge()
{
    patients = [];
    getDataFromTable(patients);
    patients.sort((a, b) => a.age > b.age ? 1 : -1);
    tableUpdate(patients)
}


function sortByName()
{
    patients = [];
    getDataFromTable(patients);
    patients.sort((a, b) => a.first_name > b.first_name ? 1 : -1);
    tableUpdate(patients)
}


function sortByDiagnosis()
{
    patients = [];
    getDataFromTable(patients);
    patients.sort((a, b) => a.diagnosis > b.diagnosis ? 1 : -1);
    tableUpdate(patients)
}


function tableUpdate(patients)
{
    let patients_left = Object.keys(patients).length
    for(let counter = 0; counter < patients_left; counter++){
        let p = patients[counter];
        let i = counter + 1;
        //alert(patients_left)
        document.getElementById("fname"  + String(i)).value = (p.first_name).toString();
        document.getElementById("sname"  + String(i)).value = (p.second_name).toString();
        document.getElementById("tname"  + String(i)).value = (p.third_name).toString();
        document.getElementById("gender_table" + String(i)).value = (p.gender).toString();
        document.getElementById("age_table" + String(i)).value = (p.age).toString();
        document.getElementById("diagnosis_table" + String(i)).value = (p.diagnosis).toString();
        document.getElementById("room_number" + String(i)).innerText = (p.room_number).toString();
    }
    //document.getElementById("").innerText = .toString();
}

function clearTable()
{
    for(let i = 1; i < 12; i++){
        document.getElementById("fname"  + String(i)).value = "";
        document.getElementById("sname"  + String(i)).value = "";
        document.getElementById("tname"  + String(i)).value = "";
        document.getElementById("gender_table" + String(i)).value = "";
        document.getElementById("age_table" + String(i)).value = "";
        document.getElementById("diagnosis_table" + String(i)).value = "";
        document.getElementById("room_number" + String(i)).innerText = "";
    }
    //document.getElementById("").innerText = .toString();
}

function fromInitializingInfo()
{
    patients = []
    initializingInfo(patients)
    tableUpdate(patients)
}

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function removePatient(patients)
{
    patients = []
    getDataFromTable(patients)
    tableUpdate(patients)
    let patients_num = prompt("enter patient number for removing");
    if(isNaN(Number(patients_num))) {
        alert(`${patients_num} is not a number`);
        return;
      }
    patients.splice(Number(patients_num) - 1, 1);
    clearTable(); 
    tableUpdate(patients)
}


function findByRoom()
{
    patients = [];
    getDataFromTable(patients);
    let find_tag = prompt("enter patient room number");
    for(let key in patients)
    {
        if(patients[key].room_number == String(find_tag))
            alert(`patient of age ${patients[key].age}: ${patients[key].first_name} ${patients[key].second_name} ${patients[key].third_name}\n
            diagnosis: ${patients[key].diagnosis}, gender: ${patients[key].gender}, room_number: ${patients[key].room_number}`);
    }

}


function findByName(patients)
{
    patients = [];
    getDataFromTable(patients);
    let first_name = prompt("enter patient first");
    let seond_name = prompt("enter patient second name");
    let third_name = prompt("enter patient third name");
    //toLowerCase()
    for(let key in patients)
    {
        if( (patients[key].first_name).toLowerCase() == String(first_name.toLowerCase()) &&  (patients[key].second_name).toLowerCase() == String(seond_name.toLowerCase()) 
        && (patients[key].third_name).toLowerCase() == String(third_name.toLowerCase()))
            alert(`patient of age ${patients[key].age}: ${patients[key].first_name} ${patients[key].second_name} ${patients[key].third_name}\n
            diagnosis: ${patients[key].diagnosis}, gender: ${patients[key].gender}, room_number: ${patients[key].room_number}`);
    }
}


function findByDiagnosis()
{
    patients = [];
    getDataFromTable(patients);
    let find_tag = prompt("enter patient Diagnosis");
    for(let key in patients)
    {
        if(patients[key].diagnosis == String(find_tag))
            alert(`patient of diagnosis ${patients[key].diagnosis}: ${patients[key].first_name} ${patients[key].second_name} ${patients[key].third_name}\n
            age ${patients[key].age}, gender: ${patients[key].gender}, room_number: ${patients[key].room_number}`);
    }
}