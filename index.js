const assignShipmentsToDrivers = require('./src/routeAssignations');
const destinations = "./files/destinations.txt";
const drivers = "./files/drivers.txt";


const result = assignShipmentsToDrivers(destinations, drivers);

console.log("Total suitabilityScore:", result.globalSS);
console.log("Best Routes:", result.routeAssignments);