FROM postgres:14-alpine
COPY ./src/database/init.sql /docker-entrypoint-initdb.d/
