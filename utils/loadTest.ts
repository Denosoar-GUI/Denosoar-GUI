export default function loadtest(url: string, concurrency: string, rps: string, duration:string) {

  const n = 1000;
  let count = 0;

  function getRequests(url: string, concurrency: number): any[] {
    // console.log('L13 : now Invoking getRequests');
    return new Array(concurrency).fill(
      new Promise((resolve) => {
        const res = fetch(url, {
          mode: "no-cors"
        });
        return resolve(res);
      })
    );
  }

  const siegeInterval = setInterval(async () => {
    const response = await Promise.all(getRequests(url, Number(concurrency)));
    // console.log(response);
    
    for (let res of response) {
      count++
    }
  }, n / Number(rps));

  setTimeout( ()=> { console.log(count); return clearInterval(siegeInterval)} , Number(duration)*1000)

}
