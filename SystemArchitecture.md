# CCNY Bus Track Architecture

# Highlevel Component Diagram
![CCNY Bus Track](https://github.com/udevii/ccny-bus-track/assets/47542935/bb0791d7-02f8-4b22-bd86-324083dde1de)
Web Client: 

-Communicates with the Gateway Server using HTTP/JSON.

Gateway Server: 

-Receives HTTP/JSON requests from the Web Client.

-Forwards requests to the API Server using HTTPS/Proto.

API Server:

-Processes user requests.

-Queries Data Server for bus data using HTTPS/BSON.

-Consumes/Produces data for MapBox API.

Data Server:

-Stores and manages bus-related data.

-Interacts with the API Server using HTTPS/BSON.

MapBox API:

-Consumes and produces data with the API Server.

# Relationship Diagram

![untitled](https://github.com/udevii/ccny-bus-track/assets/47542935/4b976692-953f-418e-9b69-11fdf918862d)
The User entity represents the users of the application, differentiated by their UserType (Student or Bus Driver). Each user can have multiple BusArrivalEstimate entries and can also have a UserLocation to help determine the estimated arrival times of buses.

The Bus entity stores information about each bus, including its current location and status (Running/Not Running). Each bus is associated with a BusRoute, which contains details about the route the bus is following and its stops. This establishes a one-to-many relationship between the Bus and BusRoute entities.

The BusArrivalEstimate entity is crucial as it provides estimated arrival times for buses. It is linked to the Bus and BusRoute entities to determine the estimated times based on the bus's current location and the route's schedule.
