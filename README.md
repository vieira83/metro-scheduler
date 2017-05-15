# Metro Schedule App

## Set-up Local environment

### Set up a virtual environment
1. The virtualenv tool keeps the dependencies required by different projects isolated, by creating virtual environments for them. To use it, install virtualenv.
    $ pip install virtualenv
2. In the top-level directory of your project, create a virtual environment for your project.
    $ virtualenv metro
3. Activate the virtual environment.
If you are not using Windows, run this command.
    $ source metro/bin/activate

### Install dependencies

Install all the dependencies
   $ pip install -r  requirements.txt

### Setup Database with posgres

  1. Install PostgreSQL
  2. export PATH=/Applications/Postgres.app/Contents/Versions/9.6/bin:$PATH to bash_profile
  3. Create a PostgreSQL Database:
      3.1 Go to PSQL command line:

        $ psql -h localhost

      3.2 Create dabase metro_db

        $ CREATE DATABASE metro_db;

      3.3 Create Database owner

        $ CREATE ROLE myusername WITH LOGIN PASSWORD 'mypassword';
        $ ALTER USER myusername CREATEDB;

      3.4 Grant all privileges to user:

        $ GRANT ALL PRIVILEGES ON DATABASE metro_db TO myusername;

  4. Configure the Django Database Settings
  
     $ 'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': get_env_variable('DATABASE_NAME'),
        'USER': get_env_variable('DATABASE_USER'),
        'PASSWORD': get_env_variable('DATABASE_PASSWORD'),
        'HOST': '',
        'PORT': '',
    }
  5.  python manage.py createsuperuser
  6.  python manage.py makemigrations
  7.  python manage.py migrate

## Set-up Heroku environment
1. Follow the steps below
- https://devcenter.heroku.com/articles/deploying-python

## Features

- Production-ready configuration for Static Files, Database Settings, Gunicorn, etc.
- Enhancements to Django's static file serving functionality via WhiteNoise.
- Latest Python 3.6 runtime environment. 

## How to Use

To use this project, follow these steps:

1. Create your working environment.
2. Install Django (`$ pip install django`)
3. Create a new project using this template

## Creating Your Project

Using this template to create a new Django app is easy::

    $ django-admin.py startproject --template=https://github.com/heroku/heroku-django-template/archive/master.zip --name=Procfile helloworld

(If this doesn't work on windows, replace `django-admin.py` with `django-admin`)

You can replace ``helloworld`` with your desired project name.

## Deployment to Heroku

    $ git init
    $ git add -A
    $ git commit -m "Initial commit"

    $ heroku create
    $ git push heroku master

    $ heroku run python manage.py migrate

See also, a [ready-made application](https://github.com/heroku/python-getting-started), ready to deploy.

## Using Python 2.7?

Just update `runtime.txt` to `python-2.7.13` (no trailing spaces or newlines!).


## License: MIT

## Further Reading

- [Gunicorn](https://warehouse.python.org/project/gunicorn/)
- [WhiteNoise](https://warehouse.python.org/project/whitenoise/)
- [dj-database-url](https://warehouse.python.org/project/dj-database-url/)
