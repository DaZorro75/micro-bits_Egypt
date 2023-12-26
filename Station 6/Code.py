Labyrinth = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0]

def on_forever():
    for Index in range(21):
        basic.show_arrow(ArrowNames.NORTH)
        while True:
            if Labyrinth[Index] == 1:
                basic.show_icon(IconNames.STICK_FIGURE)
                if input.button_is_pressed(Button.A):
                    basic.show_icon(IconNames.SKULL)
                    basic.pause(500)
                    control.reset()
                    break
                elif input.button_is_pressed(Button.B):
                    basic.show_arrow(ArrowNames.EAST)
                    basic.pause(500)
                    basic.clear_screen()
                    break
            else:
                basic.show_icon(IconNames.PITCHFORK)
                if input.button_is_pressed(Button.A):
                    basic.show_arrow(ArrowNames.WEST)
                    basic.pause(500)
                    basic.clear_screen()
                    break
                elif input.button_is_pressed(Button.B):
                    basic.show_icon(IconNames.SKULL)
                    basic.pause(500)
                    control.reset()
                    break
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(5000)
basic.forever(on_forever)
