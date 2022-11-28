// Function will invoke pseudo load-testing effect
export default function loadtest(url: string, concurrency: string, rps: string, duration:string) {

  // Helper function to create an array of unresolved promises. Each element is an unresolved GET request a URL.
  function getRequests(url: string, concurrency: number): Promise<void>[] {
    return new Array(concurrency).fill(
      new Promise((resolve) => {
        const res = fetch(url, {
          mode: "no-cors"
        });
        return resolve(res);
      })
    );
  }

  // Set an infinite time-interval in which to create and resolve all the GET reqeusts from invoking helper function
  const siegeInterval = setInterval(async () => {
    await Promise.all(getRequests(url, Number(concurrency)));
  }, 1000 / Number(rps));

  // After a set duration of time, clear the inifinite interval
  setTimeout( ()=>  clearInterval(siegeInterval) , Number(duration)*1000)

}
