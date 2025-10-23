from django import forms

class Sending(forms.Form):
    from_email = forms.EmailField()
    to_email = forms.EmailField()
    message = forms.TextField()

class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ('name', 'email', 'body')
