const fs = require('fs');
const assignShipmentsToDrivers = require('../src/routeAssignations');

jest.mock('fs');

test('should assignShipmentsToDrivers at leaste one route and driver', () => {
    fs.readFileSync.mockReturnValueOnce('shipment1\nshipment2\nshipment3');
    fs.readFileSync.mockReturnValueOnce('driver1\ndriver2\ndriver3');

    const result = assignShipmentsToDrivers('shipments.txt', 'drivers.txt');

    expect(result.routeAssignments).not.toBeNull();
});

test('should calculate the Global Suitability Score correctly', () => {
    fs.readFileSync.mockReturnValueOnce('shipment1\nshipment2\nshipment3');
    fs.readFileSync.mockReturnValueOnce('driver1\ndriver2\ndriver3');

    const result = assignShipmentsToDrivers('shipments.txt', 'drivers.txt');

    expect(result.globalSS).toBe(15);
});

