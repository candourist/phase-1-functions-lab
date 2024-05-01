// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42; // Assuming the headquarters is located at block 42
    return Math.abs(blocks - hqLocation);
  }
  
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    return distanceFromHqInBlocks(blocks) * blockInFeet;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    return Math.abs(start - destination) * blockInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
  
    if (distance <= 400) {
      farePrice = 0;
    } else if (distance <= 2000) {
      farePrice = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      farePrice = 25;
    } else {
      farePrice = "cannot travel that far";
    }
  
    return farePrice;
  }