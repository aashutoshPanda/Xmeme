from django.contrib import admin
from django.urls import path, include,re_path        # <ADD> repath....
from django.views.generic import TemplateView          # <ADD>

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),       # <ADD>
]