default:
    just --list

server:
    cd ./src && python -m http.server 3000
