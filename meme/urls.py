from .views import MemeViewSet, PaginatedMemes
from rest_framework.routers import SimpleRouter
from django.urls import path
from rest_framework.routers import SimpleRouter


class OptionalSlashRouter(SimpleRouter):

    def __init__(self):
        super().__init__()
        self.trailing_slash = '/?'


router = OptionalSlashRouter()
router.register("memes", MemeViewSet)

urlpatterns = router.urls
urlpatterns += [
    path("paginated-memes/", PaginatedMemes.as_view(),
         name="paginated-memes"),
]
