function checkBestStudent(subject) {
    subject = document.getElementById('inputSub').value.toLowerCase();
 //  let input = subject.toLowerCase();
    var bestStudent = "";
    var lookup = {
      "maths": "Adams Milner",
      "english": "Akande Olalekan Toheeb",
      "chemistry": "Gerald Kent",
      "physics": "Onaolapo Asiwaju",
      "biology": "Dele Alli",
      "yoruba": "Adegunju Emanuel",
      "geography": "Dele Alli",
      "statistics": "Mustopha Muhammed",
      "music": "Amina Yusuf",
    };

    bestStudent = lookup[subject];
   /* if(subject !== lookup["maths"] || subject !== lookup["english"] || subject !== lookup["chemistry"] || subject !== lookup["physics"] || subject !== lookup["biology"] || subject !== lookup["yoruba"] || subject !== lookup["geography"] || subject !== lookup["statistics"] || subject == ""){
        document.getElementById('error').innerHTML = "Sorry we don't offer this subject";
        document.getElementById('error').classList.add('text-danger');
    } else{
        document.getElementById('bestStudent').innerHTML = bestStudent;
    }
*/
    switch(subject) {
    case "maths":
    case "english":
    case "chemistry":
    case "physics":
    case "biology":
    case "yoruba":
    case "statistics":
    case "geography":
    case "music":
        document.getElementById('subjectName').innerHTML = subject.toUpperCase();
        document.getElementById('subjectName').classList.add('text-warning')
        document.getElementById('bestStudent').classList.remove('d-none');
        document.getElementById('nameOfStudent').innerHTML += bestStudent;
        document.getElementById('nameOfStudent').classList.add('text-success');
    break;
    default:
   document.getElementById('error').innerHTML ="Sorry! We don't offer this subject";
   document.getElementById('error').classList.add('text-danger');

}   
    
  }
  
  
  