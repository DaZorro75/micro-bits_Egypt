# Musterlösung für Code der Station 1 (Variablenkonzept):

def on_button_pressed_a():
    led.plot(SchritteNachRechts, SchritteNachUnten)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.plot(3, 3)
input.on_button_pressed(Button.B, on_button_pressed_b)

SchritteNachRechts  =  0
SchritteNachUnten   =  0
SchritteNachUnten   =  0
SchritteNachRechts  =  0
SchritteNachRechts +=  1
SchritteNachRechts +=  1
SchritteNachRechts +=  1
SchritteNachUnten  +=  1
SchritteNachUnten  +=  1
SchritteNachRechts += -1
SchritteNachUnten  +=  1
SchritteNachRechts +=  1
SchritteNachRechts +=  1
SchritteNachUnten  += -1
SchritteNachRechts += -1
SchritteNachUnten  +=  1

