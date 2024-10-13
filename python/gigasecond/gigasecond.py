import datetime as dt

def add(birthdate):
    bd = birthdate
    your_gs = bd + dt.timedelta(0, 10 ** 9)
    return your_gs
