sudo docker build -t manupaisable/flightrep-landing .
sudo docker run -it --rm -p 3000:3000 -p 3001:3001 --name run-flightrep-landing manupaisable/flightrep-landing
