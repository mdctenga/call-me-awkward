 "use strict";

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