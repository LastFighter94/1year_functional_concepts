FROM openjdk

COPY . /java

WORKDIR /java

EXPOSE 8008

RUN javac Main.java

CMD [ "java", "Main" ]