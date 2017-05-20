# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from metro.models import Account

# Register your models here.
class AccountAdmin(admin.ModelAdmin):
    pass

admin.site.register(Account, AccountAdmin)