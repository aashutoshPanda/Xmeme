from .views import MemeViewSet
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register("memes", MemeViewSet)

urlpatterns = router.urls
