from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from django.http import Http404
from .runcommand import RunCommand
import logging
import traceback

logger = logging.getLogger("django")

class RunCommandAPIViews(views.APIView):

    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        try:
            command_param = self.request.query_params.get('command')
            if command_param == '':
                return Respose({'message': 'Invalid query request.'}, status=status.HTTP_400_BAD_REQUEST)
            rc = RunCommand()
            response = rc.run(command_param)
            return Response(response, status=status.HTTP_200_OK)
        except Exception as e:
            message = traceback.format_exc()
            logger.error(message)
            response = {'message': message}
            return Response(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, format=None):
        try:
            if request.data == '':
                return Respose({'message': 'Not allowed no data request.'}, status=status.HTTP_400_BAD_REQUEST)
            rc = RunCommand()
            response = rc.run(command=request.data['command'])
            return Response(response, status=status.HTTP_200_OK)
        except Exception as e:
            message = traceback.format_exc()
            logger.error(message)
            response = {'message': message}
            return Response(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
