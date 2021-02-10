from rest_framework.viewsets import ModelViewSet

from .serializers import MemeSerializer
from .models import Meme
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings

class MemeViewSet(ModelViewSet):
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        results = Meme.objects.filter(**request.data)
        if results.count()>0:
            return Response(
                {"detail":"Duplicate POST requests with the same payload"}, 
                status.HTTP_409_CONFLICT
            )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
