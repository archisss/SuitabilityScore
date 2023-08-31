# SuitabilityScore
This is a code exercise for Platform Science about to calculate the suitability score from two files, one from the list of possible routes and the other with the name of the possible drivers per day  

# Requeriments
* node 18.x
* npm 9.x

# Installation at Command Line (Terminal)
1. Select the location in your computer and clone the repository project
  ```
   git clone
  ```
2. Access to the folder of the project
  ```
cd [ Project_Name ]
  ```
3. Update the files in files folder (destination.txt and drivers.txt)
   __IMPORTANT:__ Both files must be updated or if create new ones just use same names for files
  ```
cd files 
  ```
4. Install project dependencies
  ```
npm install 
```
5. Execute project test
  ```
npm run test
```
6. Execute the suitability score mathematical model
```
npm index.js
```
# Overview
* `routeAssignation` : This function is the main function of the code, here we get the txt files with the routes and drivers to calculare the suitability score, internally we iterate for each of the routes and we get the suitability score for each drivers base is the mathematical algorith created base if the route name is even or odd and getting extra porcentage in case the length of the driver and the route has more than one common factor.
*  `suitabilityScore` : This function gets the route and the driver name and base in the length of the route using the algorith for even or odd calculates the suitability score for each route and driver. 
*  `hasCommonFactor` : This is a helper function from `suitabilityScore` to validate if the route and the driver base in the algorithm has more than 1 as a common factor. 

# Personal approach
As a developer every time I need to solve a problem first I understand what the problems for, what's I need to address to consider this problem solve, in this case we have the alagorith we need to implement base in the files we get with routes and drivers information, in this case I solve this problem following this path:
* Convert the files informtion into a arrays ( destinations and drivers) so I can work with the validations for each route with each driver
* When I got the information in arrays I need to pass all the destinations one by one and calculate the suitability score for each driver, after validate all the drivers; the one with the top suitability score (SS) is added to a new object linking each destination with the topSS driver and the driver with the highst SS is deleted from the drivers array because just one driver can be assigne to each destination.
* After finish the destination files, we will end with the most suitable route base on the destination name and the driver name.
* I decide to create different files for each part of the process to calculate the suitability score because in that way my test suite will be organice in a better manner.

# Problem Statement
Our sales team has just struck a deal with Acme Inc to become the exclusive provider for routing their product shipments via 3rd party trucking fleets. The catch is that we can only route one shipment to one driver per day.

Each day we get the list of shipment destinations that are available for us to offer to drivers in our network. Fortunately our team of highly trained data scientists have developed a mathematical model for determining which drivers are best suited to deliver each shipment.

With that hard work done, now all we have to do is implement a program that assigns each shipment destination to a given driver while
maximizing the total suitability of all shipments to all drivers.

The top-secret algorithm is:

* If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
* If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
* If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.

Write an application in the language of your choice that assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver. Your program should run on the command line and take as input two newline separated files, the first containing the street addresses of the shipment destinations and the second containing the names of the drivers. The output should be the total SS and a matching between shipment destinations and drivers. You do not need to worry about malformed input, but you should certainly handle both upper and lower case names.

