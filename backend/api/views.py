from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import generics
from .serializers import userSerializer
from rest_framework.permissions import AllowAny
import joblib
import numpy
import json

model = joblib.load('MLmodel.pkl')

def resultJson(request):
    print(request.body)
    data = json.loads(request.body)
    data_2 = dict(data)

    info = []
    for value in data_2.values():
        info.append(float(value))
    features = numpy.asarray(info, dtype=numpy.float32)
    prediction = model.predict(features.reshape(1, -1))
    if prediction[0]:
        return JsonResponse({'result': 'The machine learing model has predicted that you are less likely to have cardiovascular disease.'})
    return JsonResponse({'result': 'The machine learing model has predicted that you are more likely to have cardiovascular disease. Please consider seeking further examination by a medical professional.'})
    

# View for creating a new user
class CreateUserView(generics.CreateAPIView):
    querySet = User.objects.all()
    serializer_class = userSerializer
    permission_classes = [AllowAny]