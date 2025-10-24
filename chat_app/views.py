from django.shortcuts import render
from django.http import JsonResponse

def home_page(request):
    return render(request, 'index.html')

def submit_form(request):
    if request.method == "POST":
        name = request.POST.get("name")
        message = request.POST.get("message")
        return JsonResponse({"message": f"Thanks {name}, your message was received!"})
    return JsonResponse({"error": "Invalid request"}, status=400)
