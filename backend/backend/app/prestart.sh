#! /usr/bin/env bash

## Let the DB start
python app/backend_pre_start.py


# alembic revision --autogenerate -m "initial revision"


## Run migrations
alembic upgrade head


## Create initial data in DB
python ./app/initial_data.py
