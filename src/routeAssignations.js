const fs = require("fs");
const suitabilityScore = require('./suitabilityScore');

function assignShipmentsToDrivers(shipmentsFile, driversFile) {
    const shipments = fs.readFileSync(shipmentsFile, "utf-8")?.split("\n");
    const drivers = fs.readFileSync(driversFile, "utf-8")?.split("\n");

    let globalSS = 0;
    let routeAssignments = [];

    for (const shipment of shipments) {
        let TopSS = 0;
        let bestDriver = null;
        let driverIndex = 0;

        drivers.forEach((driver, index) => {
            const SS = suitabilityScore(shipment.length, driver);

            if (SS > TopSS) {
                TopSS = SS;
                bestDriver = driver;
                driverIndex = index;
            }
        });

        if (bestDriver) {
            globalSS += TopSS;
            routeAssignments.push({ shipment, driver: bestDriver });
            drivers.splice(driverIndex, 1);
        }
    }

    return { globalSS, routeAssignments };
}

module.exports = assignShipmentsToDrivers
