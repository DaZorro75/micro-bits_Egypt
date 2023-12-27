def holeEingabe():
    global Index
    while True:
        if input.button_is_pressed(Button.A):
            Index += 1
            if Index == 5:
                Index = 0
            Symbole[Index].show_image(0)
        elif input.button_is_pressed(Button.B):
            EingegebeneKombination.append(Index)
            for index in range(3):
                Symbole[Index].show_image(0)
                basic.clear_screen()
                basic.pause(500)
            break
EingegebeneKombination: List[number] = []
Symbole: List[Image] = []
Index = 0
LängeEingabe = 0
Index = -1
Symbole = [images.icon_image(IconNames.PITCHFORK),
    images.icon_image(IconNames.SMALL_DIAMOND),
    images.icon_image(IconNames.SNAKE),
    images.icon_image(IconNames.SMALL_SQUARE),
    images.icon_image(IconNames.TARGET)]
for index2 in range(3):
    holeEingabe()
if EingegebeneKombination[0] == 0 and EingegebeneKombination[1] == 4 and EingegebeneKombination[2] == 1:
    basic.show_icon(IconNames.HAPPY)
else:
    basic.show_icon(IconNames.SAD)
