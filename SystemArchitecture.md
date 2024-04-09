# CCNY Bus Track Architecture
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
