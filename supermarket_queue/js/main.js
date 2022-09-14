function queueTime(customers, n) {
  let time = 0;
  let queue = [];
  //while there are customers waiting for a till
  while(customers.length > 0){
    //fill the queues
    while (queue.length < n){
      queue = queue.concat(customers.shift())
    }
    //remove empty tills
    queue = queue.filter(e => e);
    //process the queue
    const checkOut = Math.min(...queue);
    //add checkout time to total time
    time += checkOut;
    //subtract checkout times from queue, remove 0s
    queue = queue.map(e => e-checkOut).filter(e => e !== 0);
  };
  //finish remaining tills
  if (queue.length > 0){
    time += Math.max(... queue);
  }
  return time;
}