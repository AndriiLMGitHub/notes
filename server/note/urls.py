from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_notes_and_create_note),
    path('<str:pk>', views.get_update_delete_note)
]
