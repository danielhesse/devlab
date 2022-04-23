## Dev Lab
![Badge](https://img.shields.io/static/v1?label=DH&message=DOSOMETHINGGREAT&color=0070f3&style=<0070f3>&logo=rocket)

### Project

Devlab is an application developed on the Edition #1 of Rocketseat's Ignite Lab. A teaching platform, where at the time of teaching, online resources were offered in the purchase and until the moment of the online courses.

A project that aims to show the use of GraphQL with NestJS within a microservices architecture also using Auth0 as an authenticator.

### Technologies

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apache Kafka](https://kafka.apache.org/)
- [Prisma](https://www.prisma.io/)
- [Next.js](https://nextjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Auth0](https://auth0.com/)

### Code Standards

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Getting Started

Before you begin, you will need to have the following tools installed on your machine:
- [Git](https://git-scm.com)

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

Npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer.
- [Node.js v16.14.0](https://nodejs.org/) or heigher.

As mentioned before, we are using Apache Kafka to handle the communication between the services and Postgres to the database, and the best way to run these environments locally is using Docker, for that you will need to have it installed on your machine.
- [Docker](https://www.docker.com/)

Also, it’s good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

### :information_source: How to run

Follow the instructions below to download and use the project from this repository:

```bash
# Clone this repository using SSH
$ git clone git@github.com:danielhessell/devlab.git
# or clone using https
$ git clone https://github.com/danielhessell/devlab.git

# Go into the repository
$ cd devlab
```

Now we need to lift the containers contained in the ```docker-compose.yml``` file so that they continue to run the project.

```bash
$ docker-compose up -d
```

With containers running, wait at least 30 seconds to ensure the database is running as well as the Kafka UI on port 8080.

Before proceeding, you may have already realized that within this you must follow both the backend services and the frontend, so you need to start each process separately as follows:

###### purchases service
```bash
# Go into purchases repository
$ cd purchases

# Install dependencies
$ npm install

# Run migrations
$ npx prisma migrate dev

# Run project
$ npm run start:dev
```

###### classroom service
```bash
# Go into purchases repository
$ cd classroom

# Install dependencies
$ npm install

# Run migrations
$ npx prisma migrate dev

# Run project
$ npm run start:dev
```

###### gateway service
```bash
# Go into purchases repository
$ cd gateway

# Install dependencies
$ npm install

# Run project
$ npm run start:dev
```

###### web service
```bash
# Go into purchases repository
$ cd web

# Install dependencies
$ npm install

# Run project
$ npm run dev
```

For the project to run, we would still need to go to Auth0, create an application and add its keys for use in this project's environments. In addition, we would have to have some data previously registered so that we can run the project as soon as we run it. Because of that, I decided to deploy the above services so you can access them without going through the steps above.
It will soon be available here.

---

Made with :blue_heart: by Daniel Hessel :wave:
