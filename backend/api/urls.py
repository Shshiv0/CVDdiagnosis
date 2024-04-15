from django.urls import path
from . import views
from api import views
from django.views.decorators.csrf import csrf_exempt

# Create url patterns for creating/deleting data
urlpatterns = [ path("resultJson", csrf_exempt(views.resultJson), name="results") ]