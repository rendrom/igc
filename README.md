# IGC COMMUNITE

The site of the IGC Community (A.P. Vinogradov Institute of Geochemistry SB RAS)

## Used technologies

* Django 2.xx.x (+djangorestframework)
* Angular 5.x

## Requirements

* Python 2.7.x
* Node.js >=6.11.x

## Installation

    $ git clone https://github.com/rendrom/igc.git
    $ cd ./igc
    $ python3 -m venv ./.env
    $ . ./.env/bin/activate # (for Windows ./.env/Scripts/activate)
    $ pip install -r ./requirements.txt
    $ python manage.py migrate
    $ cd ./client
    $ npm i
    & npm run prod
    $ cd ../
    $ python manage.py runserver

Posix

    bash/zsh    $ source <venv>/bin/activate
    fish        $ . <venv>/bin/activate.fish
    csh/tcsh    $ source <venv>/bin/activate.csh

Windows

    cmd.exe      C:\> <venv>\Scripts\activate.bat
    PowerShell   PS C:\> <venv>\Scripts\Activate.ps1

### Windows only

For power shell

    Set-ExecutionPolicy Unrestricted -Force
