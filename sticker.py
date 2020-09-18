# coding=utf-8
import maschine_play

def move_maschine(difficulty, position):
    row, num = maschine_play.maschine(position, difficulty)
    return_list = [row, num]
    return return_list