from .views import MemeViewSet, PaginatedMemes
from rest_framework.routers import SimpleRouter
from django.urls import path

router = SimpleRouter()
router.register("memes", MemeViewSet)

urlpatterns = router.urls
urlpatterns += [
    path("paginated-memes/", PaginatedMemes.as_view(),
         name="paginated-memes"),
]
