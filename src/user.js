const user = {name : "Jean Dupont"}


export const user$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 10, user)
); 