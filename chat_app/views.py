from django.shortcuts import render, redirect


def home_page():
    return redirect('index.html')