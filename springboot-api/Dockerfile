FROM eclipse-temurin:17-alpine

WORKDIR /app

COPY /target/performance-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8087

CMD ["java", "-jar", "app.jar"]
