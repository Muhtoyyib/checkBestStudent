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
  /* if(bestStudent === lookup["maths"]){
    subject = document.getElementById('inputSub').value.toUpperCase();
    document.getElementById('msg').innerHTML= `The best student in <span class="text-info">${subject}</span> is ${bestStudent}`;
    document.getElementById('msg').classList.add('text-dark'); 
    }else{
        document.getElementById('msg').classList.remove('text-dark'); 
        document.getElementById('msg').classList.add('text-danger');
        document.getElementById('msg').innerHTML =`Sorry! We don't offer this subject`;
    }*/

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
     subject = document.getElementById('inputSub').value;
    document.getElementById('msg').innerHTML= `The best student in <span class="text-primary text-capitalize">${subject}</span> is <span class="text-success text-uppercase">${bestStudent}</span>`;
    document.getElementById('msg').classList.add('text-dark'); 
    break;
   default:
    document.getElementById('msg').classList.remove('text-dark'); 
   document.getElementById('msg').classList.add('text-danger');
   document.getElementById('msg').innerHTML =`Sorry! We don't offer this subject`;

} 

    
  }


  
  
  