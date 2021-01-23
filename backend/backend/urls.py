from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("runcommand/", include("runcommand.urls")),
]
