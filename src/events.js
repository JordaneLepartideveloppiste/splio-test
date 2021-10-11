const daysName = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

const events = [];


  for (let i = 0; i <= 6; i++) {
        events.push({
          id: i+1,
          day: daysName[i],
          week: 1,
          title: "",
          color: "",
        });
      }
  for (let i = 7; i <= 13; i++) {
        events.push({
          id: i+1,
          day: daysName[i-7],
          week: 2,
          title: "",
          color: "",
        });
      }
  for (let i = 14; i <= 20; i++) {
        events.push({
          id: i + 1,
          day: daysName[i - 14],
          week: 3,
          title: "",
          color: "",
        });
      }
  for (let i = 21; i <= 27; i++) {
        events.push({
          id: i+1,
          day: daysName[i-21],
          week: 4,
          title: "",
          color: "",
        });
      }
  for (let i = 28; i <= 30; i++) {
        events.push({
          id: i+1,
          day: daysName[i-28],
          week: 5,
          title: "",
          color: "",
        });
      }

        
    
  


 

 export const events$ = new Promise((resolve, reject) =>
   setTimeout(resolve, 10, events)
 ); 
