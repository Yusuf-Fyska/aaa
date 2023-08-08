from django.shortcuts import render, redirect
from .forms import ImageUploadForm


def index(request):
    return render(request, 'index.html')

def upload(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('success_page') 
    else:
        form = ImageUploadForm()
    return render(request, 'upload.html', {'form': form})