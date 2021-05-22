# polaris
django-admin startproject mysite

python manage.py startapp myapp

* settings.py
TEMPLATES_DIR = os.path.join(BASE_DIR, "template")
STATIC_DIR = os.path.join(BASE_DIR, "static")

ALLOWED_HOSTS = ['*']

STATICFILES_DIRS = [
    STATIC_DIR,
]

** Inside templates list
'DIRS': [
            TEMPLATES_DIR
        ],
DJANGO_ICONS = {
    "ICONS": {
        "edit": {"name": "far fa-pencil"},
        "create": {"name": "far fa-plus"},
        "delete": {"name": "far fa-trash"},
        "goto": {"name": "far fa-external-link"},
        "read": {"name": "far da-info-circle"}
    },
}

INSTALLED APPS

* urls.py
--------------------------------------
re_path(r"^ct/", include("evento.urls")),

* app/urls.py
# -*- coding: utf-8 -*-
from django.urls import path
from . import views

app_name = "evento"

urlpatterns = [
    path('', views.index, name="index"),
]

----------------
* Or
from evento import views as views
path('', views.EventoList.as_view(), name="index"),

* odoorpc
pip install OdooRPC

-------------- views
from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import CreateView, DetailView, DeleteView, UpdateView
from django.views.generic.base import View
from django.views.generic.list import ListView
from django.urls import reverse_lazy
from django.core import serializers
from . import models
from . import forms
from . import antares_connect
----------------forms
# -*- coding: utf-8 -*-
from django import forms
from django.forms import fields
from django.forms import widgets
from django.forms.models import model_to_dict
from datetime import date

from django.forms.widgets import ChoiceWidget, ClearableFileInput, DateInput, DateTimeInput, HiddenInput, Select, SelectDateWidget, SplitDateTimeWidget, TimeInput
from . import models

* models.py
from django.db import models
from django.urls.base import resolve
from django.utils import timezone
from django.db.models.deletion import CASCADE
from django.urls import reverse_lazy, reverse
import odoorpc as antaresrpc
from . import antares_connect

* antares connect
import odoorpc as antaresrpc

class antares:
    def __init__(self, url="localhost", port="7073", username="admin@hacienda", passwd="hacienda2019", database="hacienda"):
        self.url = url
        self.port = port
        self.username = username
        self.passwd = passwd
        self.database = database

    def getConnection(self):
        conn = antaresrpc.ODOO(self.url, port=self.port)
        conn.login(self.database, self.username, self.passwd)
        return conn

    * Copy templates folder
    * Copy assets folder
