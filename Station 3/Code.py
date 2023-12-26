AnzahlSchlangen = 0

def on_button_pressed_a():
    global AnzahlSchlangen
    AnzahlSchlangen = 0
    for index in range(AnzahlSchlangen):
        for index2 in range(5):
            basic.show_icon(IconNames.SNAKE)
            basic.pause(1000)
            basic.clear_screen()
            basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)
