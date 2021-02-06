from rest_framework.viewsets import ModelViewSet

from .serializers import MemeSerializer
from .models import Meme


class MemeViewSet(ModelViewSet):
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()
