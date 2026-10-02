# Nextjs-PostgreSQL-APIs
[DOCUMENTATION](https://docs.google.com/document/d/1OhbD-u22NT2IBYH49UhsAx-CwUYKfLt3wjHiVsytMR0/edit?usp=sharing)

## Steps for Running
1. In VS Code, open your terminal.
2. Enter the following commands:
* ```git clone https://github.com/sorayaboza/Nextjs-PostgreSQL-APIs.git```
* ```cd .\Nextjs-PostgreSQL-APIs\```
* ```npm i```
* ```psql -U [your postgres username] -f src/app/data/database.sql```

3. Under the main folder (NextJs-PostgreSQL-APIs), add a ```.env``` file.
4. In the ```.env``` file, add the following content:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=[your postgre username]
DB_PASSWORD=[your postgre password]
DB_NAME=my_database
DATABASE_URL=postgresql://[your postgre username]:[your postgre password]@localhost:5432/my_database
```

5. Once this is set up, you can run the app using ```npm run dev```.

Note: If you're unsure what your postgres username is, it may 'postgres'.