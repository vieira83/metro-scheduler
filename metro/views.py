# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


# Create your views here.
def homepage(request, path=None):
    return render(request, 'main.html')

