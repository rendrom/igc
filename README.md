IGC 18.1 lab
============

The site of the IGC laboratory 18.1 (A.P. Vinogradov Institute of Geochemistry SB RAS)

## Used technologies

* Django 1.11.x (+djangorestframework)
* Angular 4.x

## Requirements

* Python 2.7.x
* Node.js >=6.11.x

## Installation

    $ git clone https://github.com/rendrom/igc.git
    $ cd ./igc
    $ virtualenv ./.env
    $ . ./.env/bin/activate # (./.env/Scripts/activate for Windows)
    $ pip install -r ./requirements.txt
    $ python manage.py migrate
    $ cd ./client
    $ npm i
    & npm run prod
    $ cd ../
    $ python manage.py runserver

     
