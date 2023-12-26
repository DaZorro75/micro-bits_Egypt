AnzahlSchlangen = 0

def on_forever():
    global AnzahlSchlangen
    if input.button_is_pressed(Button.A):
        AnzahlSchlangen += 1
        basic.show_number(AnzahlSchlangen)
        basic.pause(500)
        basic.clear_screen()
    elif input.button_is_pressed(Button.B):
        if AnzahlSchlangen / 2 == 2:
            basic.show_icon(IconNames.HAPPY)
        else:
            basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
