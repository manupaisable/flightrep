sudo docker run -it --rm -p 3000:3000 -v $(dirname $PWD):/usr/src/flightrep --name run-flightrep-landing manupaisable/flightrep-landing
