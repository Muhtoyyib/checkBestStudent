var click = document.getElementById('checkBStu');

click.addEventListener('click',(subject, year)=> {
subject = document.getElementById('subject').value.toLowerCase();
year = document.getElementById('year').value;
let yearR= year.trim();
let result= subject.trim();

if(subject==""){

      document.getElementById('msg').classList.remove('text-dark'); 
      document.getElementById('msg').classList.add('text-danger');
      document.getElementById('msg').innerHTML =`Please Input a Subject`;

    }
    
    
    if(year==2021){

        var bestStudent = "";
        var examYear="";

        var lookup = {
            "maths": {
                "name": "Adams Milner",
                "year": 2021,
                "totalScore": 218,
                "score": 79
                         },
            "english": {
              "name": "Bolaji Kehinde",
              "year": 2021,
              "totalScore": 217,
              "score": 80
                       },
            "chemistry": {
              "name": "Timileyin Adeleke",
              "year": 2021,
              "totalScore": 267,
              "score": 89
                       },
            "physics": {
              "name": "Adesare Olagbagi",
              "year": 2021,
              "totalScore": 259,
              "score": 78
                       },
            "biology":{
              "name": "Isiaq Tijani Adekunle",
              "year": 2021,
              "totalScore": 267,
              "score": 78
                       },
            "yoruba": {
              "name": "Onaolapo Usman",
              "year": 2021,
              "totalScore": 218,
              "score": 86
                       },
            "geography": {
              "name": "Ajisafe Toheeb",
              "year": 2021,
              "totalScore": 240,
              "score": 76
                       },
            "statistics": {
              "name": "Ajagbe Adeleke",
              "year": 2021,
              "totalScore": 242,
              "score": 79
                       },
            "music": {
              "name": "Khalid Isiaq",
              "year": 2021,
              "totalScore": 218,
              "score": 87
                       }
          };
         
      
          examYear=lookup[result][yearR];
          bestStudent = lookup[result];
          var nameOfBestStudent=lookup[result]["name"];
          var yearOfExam=lookup[result]["year"];
          var totalScore=lookup[result]["totalScore"];
          var scoreInSubject=lookup[result]["score"];
        
      
         switch(result) {
                case "maths":
                case "english":
                case "chemistry":
                case "physics":
                case "biology":
                case "yoruba":
                case "statistics":
                case "geography":
                case "music":
                   document.getElementById('msg').innerHTML= `The best student in <span class="text-primary text-capitalize">${result}</span> in the year <span class="text-success text-uppercase">${yearOfExam}</span>  is <span class="text-success text-uppercase">${nameOfBestStudent}</span>.<br> Total Jamb Score: <span class="text-success text-uppercase">${totalScore}</span>. <br> Score in ${result}: <span class="text-success text-uppercase">${scoreInSubject}</span>.`;
                   document.getElementById('msg').classList.add('text-dark'); 
                   break;
                default:
                    document.getElementById('msg').classList.remove('text-dark'); 
                    document.getElementById('msg').classList.add('text-danger');
                    document.getElementById('msg').innerHTML =`Sorry! We don't offer this subject`;
      
      } 
      
    } else if (year==2022){
        var lookup = {
            "maths": {
                "name": "Adigun Bello",
                "year": 2022,
                "totalScore": 276,
                "score": 80
                         },
            "english": {
              "name": "Bolaji Quadri",
              "year": 2022,
              "totalScore": 228,
              "score": 83
                       },
            "chemistry": {
              "name": "Adeleke Olaoluwa",
              "year": 2022,
              "totalScore": 222,
              "score": 76
                       },
            "physics": {
              "name": "Adesare Kehinde",
              "year": 2022,
              "totalScore": 279,
              "score": 79
                       },
            "biology":{
              "name": "Idiagbon Adigun",
              "year": 2022,
              "totalScore": 276,
              "score": 89
                       },
            "yoruba": {
              "name": "Onaolapo Usman",
              "year": 2022,
              "totalScore": 232,
              "score": 90
                       },
            "geography": {
              "name": "Ajisafe Toheeb",
              "year": 2022,
              "totalScore": 265,
              "score": 69
                       },
            "statistics": {
              "name": "Ajagbe Ajagungbade",
              "year": 2022,
              "totalScore": 234,
              "score": 78
                       },
            "music": {
              "name": "Khalid Ajadi",
              "year": 2022,
              "totalScore": 218,
              "score": 89
                       }
          }
         
      
          examYear=lookup[result][yearR];
          bestStudent = lookup[result];
          var nameOfBestStudent=lookup[result]["name"];
          var yearOfExam=lookup[result]["year"];
          var totalScore=lookup[result]["totalScore"];
          var scoreInSubject=lookup[result]["score"];
        
      
         switch(result) {
           case "maths":
           case "english":
           case "chemistry":
           case "physics":
           case "biology":
           case "yoruba":
           case "statistics":
           case "geography":
           case "music":
              document.getElementById('msg').innerHTML= `The best student in <span class="text-primary text-capitalize">${result}</span> in the year <span class="text-success text-uppercase">${yearOfExam}</span>  is <span class="text-success text-uppercase">${nameOfBestStudent}</span>.<br> Total Jamb Score: <span class="text-success text-uppercase">${totalScore}</span>. <br> Score in ${result}: <span class="text-success text-uppercase">${scoreInSubject}</span> `;
              document.getElementById('msg').classList.add('text-dark'); 
              break;
           default:
              document.getElementById('msg').classList.remove('text-dark'); 
              document.getElementById('msg').classList.add('text-danger');
              document.getElementById('msg').innerHTML =`Sorry! We don't offer this subject`;
      
      }  
    } else{
            document.getElementById('msg').classList.remove('text-dark'); 
            document.getElementById('msg').classList.add('text-danger');
            document.getElementById('msg').innerHTML =`Sorry! No data is available for the ${year}`;
    }
   
    
  }


  
  
   );

