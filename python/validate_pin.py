"""""
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
"""""

def validate_pin(pin):
    l = len(pin)
    if l == 6 or l == 4:
        return pin.isdigit()
    else:
        return False
