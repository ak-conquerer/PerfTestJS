# PerfTestJS

Framework  - k6 (by Grafana) + JavaScript 

Installation - 
brew install k6

To run -
k6 run <fileName> - prints output to stdout
k6 run <fileName> --out json=results.json -> exports results to json
k6 run <fileName> --out csv=results.csv -> exports results to csv

Folder Structure - 
TESTS - Contains test cases for different APIs
UTILS - Contains url endpoints, run configurations
