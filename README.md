# Migaku Learning Platform 📖

This project submitted in partial fulfillment of
the requirements for ITCS212 Web Programming, Faculty of Information Communication and Techonology, Mahidol University

### Project/Repository Description

- This project aims to simulate the development process of a full-stack E-Learning platform open to students and teachers. This platform is equipped with a wide range of features.
- **This repository hold only client side app**

#### Features

- **For Student**
  - Browse all available courses taught by instructors.
  - Search courses by course name, instructor name, or category.
  - Sort search results in ascending or descending order.
- **For Instructor**
  - Exclusive access to the course management tab.
  - Publish, update, and delete courses.
  - Manage users in the "users" tab, including deleting accounts or updating permissions.

### Key Points

- Flexible learning experience for students.
- Easy course publishing for instructors.
- Follows best UX/UI practices for enhanced user experience.
- Responsive design for accessibility across all devices.

### Setup Instruction (Client)

<!-- setup instruction info  -->

1. Clone project

```bash
git clone https://github.com/Yoboba/ict-itcs212-migaku-client.git
```

2. install dependencies from package.json

```bash
npm install
```

3. try run on development stage

```bash
npm run dev
```

- **Note that this will exclude server side except you follow the below instruction**

### Setup Instruction (Client + Server)

<!-- setup instruction info  -->

1. Clone client side repository

```bash
git clone https://github.com/Yoboba/ict-itcs212-migaku-client.git
```

2. Clone server side repository

```bash
git clone https://github.com/S4NHXNU1/ict-itcs212-migaku-server.git
```

3. install dependencies of both client and server side from "package.json" file.

```bash
npm install
```

1. run both client and server side repository, **client port : 3000**, **server port : 3001**

```bash
npm run dev
```

#### Admin and User testing account

- **Teacher**
  username : dummyUser2
  password : Password
- **Student**
  username : Yobubble
  password : 123@@#awdawd

##### note that

- _you may need to use wifi that isn't MU-WIFI or any secure wifi because they may block our database connection since it is hosted on one of our team server_
- _the database server might be down everytime so if something don't go as expected it is due to our database_
