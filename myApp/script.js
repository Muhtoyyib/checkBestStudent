let click = document.getElementById('checkBStu');

click.addEventListener('click',(subject, year)=> {
subject = document.getElementById('subject').value.toLowerCase();
year = document.getElementById('year').value;
let yearR= year.trim();
let result= subject.trim();

if(subject==""){

      document.getElementById('msg').classList.remove('text-dark'); 
      document.getElementById('msg').classList.add('text-danger');
      document.getElementById('msg').innerHTML =`Please Input a Subject`;

    }else{
      document.getElementById('msg').classList.remove('text-dark'); 
      document.getElementById('msg').classList.add('text-danger');
      document.getElementById('msg').innerHTML =`Sorry! We don't offer this subject`;
    }
    
    function BestStu(name, totalScore, score){
      this.name=name;
      this.totalScore=totalScore;
      this.score=score;
    }

    BestStu.constructor = BestStu;

   
    
    if(year==2021){

        let bestStudent = "";
        let examYear="";

        BestStu.prototype.year=2021;

var lookup = {
          maths: new BestStu('Adeshin Olaitan', 218, 80),
          english: new BestStu('Bolaji Kehinde', 217,80),
          chemistry: new BestStu('Timileyin Adeleke', 267, 89),
          physics: new BestStu('Adesare Olagbagi', 259, 79),
          biology: new BestStu('Isiaq Tijani Adekunle', 267, 78),
          yoruba: new BestStu('Onaolapo Usman', 257, 86),
          geography: new BestStu('Ajisafe Toheeb', 240, 76),
          statistics: new BestStu('Ajagbe Adeleke', 242, 79),
          music: new BestStu('Khalid Isiaq', 218, 87),
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
               
      } 
      
    } else if (year==2022){

      
      BestStu.prototype.year=2022;

        var lookup = {

          maths: new BestStu('Adigun Bello', 276, 80),
          english: new BestStu('Bolaji Quadri', 227,83),
          chemistry: new BestStu('Adeleke Olaoluwa', 222, 76),
          physics: new BestStu('AAdesare Kehinde', 279, 79),
          biology: new BestStu('Idiagbon Adigun', 276, 89),
          yoruba: new BestStu('Onaolapo Usman', 232, 86),
          geography: new BestStu('Ajisafe Ridwan', 265, 69),
          statistics: new BestStu('Ajagbe Ajagungbade', 234, 78),
          music: new BestStu('Khalid Ajadi', 218, 89),
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
          
      
      }  
    } else{
            document.getElementById('msg').classList.remove('text-dark'); 
            document.getElementById('msg').classList.add('text-danger');
            document.getElementById('msg').innerHTML =`Sorry! No data is available for the ${year}`;
    }
   
    
  });


 
