from django.shortcuts import render

def view(request):
    template = "proba.html"
    return render(request, template, {})