
# How to run the project in yout device.
1. Make sure you have a Database created in mySQL, in which we will store our data.
2. Configure your .env file according to your equipment, which should contain the following content.

# DB_USER=root
# DB_PASSWORD=root
# DB_NAME=romeriaLocal
# TOKEN_KEY=token
# DATABASE_URL="mysql://root:root@localhost:3306/romeriaLocal"

3. Once your DB is created and your .env file is configured, we will enter our terminal and we will do the followi

    npm install 
    npx prisma migrate dev
    npx prisma db seed
    npm start

# npm install -> Install the necessary dependencies and libraries to be able to work.

# npx prisma migrate dev -> Generate the content of our DB according to the content inside our schema.prisma file (If this command fails, check the content of your .env file, because the project can't access your database).

# npx prisma db seed -> create the content inside the tables (seed.js file)

# npm start -> Run our project
