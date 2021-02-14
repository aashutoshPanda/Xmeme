from rest_framework.viewsets import ModelViewSet
from django.conf import settings
from .serializers import MemeSerializer
from .models import Meme
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .utils import CustomPagination


class MemeViewSet(ModelViewSet):
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()
    # to change default formating of response
    pagination_class = CustomPagination
    pagination_class.page_size = settings.PAGINATION_SIZE

    def create(self, request, *args, **kwargs):
        """
            to return HTTP STATUS CODE 409 instead of django's default 400 for duplicate post requests
        """
        serializer = self.get_serializer(data=request.data)
        results = Meme.objects.filter(**request.data)

        if results.count() > 0:
            return Response(
                {"detail": "Duplicate POST requests with the same payload"},
                status.HTTP_409_CONFLICT
            )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        """
            Don't Allow PUT only PATCH should be there for updates
            Name should not be allowed to be updated
        """
        if(request.method == "PUT"):
            raise MethodNotAllowed(
                method='PUT', detail='Method "PUT" not allowed')

        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        if("name" in request.data.keys()):
            name_in_db = instance.name
            print(name_in_db, request.data["name"])
            if(name_in_db != request.data["name"]):
                return Response(
                    {"detail": "Name Can't be updated again"},
                    status.HTTP_403_FORBIDDEN
                )
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)


class PaginatedMemes(ListAPIView):
    """
        for retrieveing resutls in default DRF pagination format
        to list in frontend
    """
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()
    pagination_class = PageNumberPagination
    pagination_class.page_size = settings.PAGINATION_SIZE
