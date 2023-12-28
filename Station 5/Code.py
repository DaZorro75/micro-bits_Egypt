Schritte = 0
FelsenOrte = [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0]
while Schritte != 15:
    basic.clear_screen()
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.ROLLERSKATE)
        basic.pause(500)
        basic.clear_screen()
        basic.pause(500)
        Schritte += 1
        if FelsenOrte[Schritte - 1] == 1:
            basic.show_leds("""
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                """)
            basic.pause(500)
            basic.clear_screen()
            basic.pause(500)
            while True:
                if input.button_is_pressed(Button.B):
                    basic.show_icon(IconNames.SURPRISED)
                    break
