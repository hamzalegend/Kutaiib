from django.urls import path

from . import views

urlpatterns = [
    path("", views.ItemView.as_view(), name="json View for Items"),
]
