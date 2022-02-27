FROM mysql:5.7
RUN sed -i 's/port\s*=\s*3306/port = 3307/' /etc/mysql/my.cnf
CMD ["mysqld"]
EXPOSE 3307