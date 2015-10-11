function getRandomExcuses(numberOfExcuses){
    var usersCollectionArray = Meteor.Excuses.find().fetch();
    //if you want all the users just getRandomBots();
    if(typeof numberOfExcuses === "undefined"){
        return usersCollectionArray;
    }
    /***
     * RandomNumbers
     * @param numberOfBots
     * @param max
     * @returns {Array}
     */
    function randomNumbers(numberOfBots, max){
        var arr = [];
        while(arr.length < numberOfBots){
            var randomnumber=Math.ceil(Math.random()*max);
            var found=false;
            for(var i=0;i<arr.length;i++){
                if(arr[i]==randomnumber){found=true;}
            }
            if(!found)arr[arr.length]=randomnumber;
        }
        return arr;
    }
    //length of the users collection
    var count = Meteor.Excuses.find().count();

    //random numbers between 0 and Max bots, selecting the number of bots required
    var numbers = randomNumbers(numberOfExcuses,count);

    //the bots we are gonna select
    var Excuses = [];

    //pushing users with using the random number as index.
    _.each(numbers,function(item){
        Excuses.push(usersCollectionArray[item]);
    });

} 
  if (Excuses.find().count() === 0) {
      var radExcuses = [
                    {title: "AWKWARD",
                    body: "My cat is diabetic, and I have to go home and give her shots",
                    },
                    {title: "AWKWARD",
                    body: "OH MY GOD THERE'S BEEN AN ACCIDENT",
                    },
                    {title: "AWKWARD",
                    body: "I have to go wash my hair"
                    },
                    {title: "AWKWARD",
                    body: "My iguana has separation anxiety",
                    },
                    {title: "AWKWARD",
                    body: "OH GOD ITS HAPPENING *sprints from room*",
                    },
                    {title: "AWKWARD",
                    body: "Help me Obi Wan Kenobi, you're my only hope",
                    },
                    {title: "AWKARD",
                    body: "My best friend is having brain surgery, and wants me to go with her",
                    }
      ];
      for (var i = 0; i < radExcuses.length; i++){
        Excuses.insert({title: radExcuses[i].title, body: radExcuses[i].body});
      }
  }

