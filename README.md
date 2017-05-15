# Metro Schedule App

## Set-up Local environment (Backend)

### Set up a virtual environment

The virtualenv tool keeps the dependencies required by different projects isolated
    $ pip install virtualenv

create a virtual environment for the project.

    $ virtualenv metro

Activate the virtual environment.

    $ source metro/bin/activate

### Install backend dependencies

Install all the python dependencies

    $ pip install -r  requirements.txt

### Setup Database with PostgreSQL

    1. Install PostgreSQL

    2. export PATH=/Applications/Postgres.app/Contents/Versions/9.6/bin:$PATH to bash_profile

    3. Create a PostgreSQL Database:

    Go to PSQL command line:

        $ psql -h localhost

    Create dabase metro_db

        $ CREATE DATABASE metro_db;

    Create Database owner

        $ CREATE ROLE myuser WITH LOGIN PASSWORD 'mypassword';
        $ ALTER USER myuser CREATEDB;

    Grant all privileges to myuser:

        $ GRANT ALL PRIVILEGES ON DATABASE metro_db TO myuser;

    Configure the Django Database Settings (configured)

    Run migration and create super user

    $ python manage.py createsuperuser
    $ python manage.py makemigrations
    $ python manage.py migrate

### Set-up Heroku environment

- https://devcenter.heroku.com/articles/deploying-python

Deployment to Heroku

    $ git init
    $ git add -A
    $ git commit -m "Initial commit"

    $ heroku create
    $ git push heroku master

    $ heroku run python manage.py migrate

Heroku Troubleshoot commands:
   - heroku pg:info
   - heroku logs


## SETUP FRONTEND ENVIRONMENT
Navigate to frontend folder:

    $ cd metro_scheduler/static/app/

Initialize node and install frontend dependencies

    $ npm init
    $ npm install
    $ gulp build-css


## Creating Your Project

Using this template to create a new Django app is easy::

    $ django-admin.py startproject --template=https://github.com/heroku/heroku-django-template/archive/master.zip --name=Procfile helloworld



## License: MIT

## Further Reading

- [Gunicorn](https://warehouse.python.org/project/gunicorn/)
- [WhiteNoise](https://warehouse.python.org/project/whitenoise/)
- [dj-database-url](https://warehouse.python.org/project/dj-database-url/)
