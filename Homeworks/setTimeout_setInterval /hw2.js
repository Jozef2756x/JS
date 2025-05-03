function countdown(n) {
    const intervalId = setInterval(() => {
      console.log(n)
      n--
  
      if (n < 0) {
        clearInterval(intervalId)
        console.log("Time's up!")
      }
    }, 1000)
  }
  
countdown(5)  