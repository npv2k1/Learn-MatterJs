import cv2 as cv
import numpy as np
img = cv.imread('love.png', 0)


def rescaleFrame(frame, scale=0.75):
    width = int(frame.shape[1]*scale)
    height = int(frame.shape[0]*scale)
    dimensions = (width, height)
    return cv.resize(frame, dimensions, interpolation=cv.INTER_AREA)


img = rescaleFrame(img, 1)


a = set()
w = img.shape[1]
h = img.shape[0]

black = np.zeros((w, h, 3), dtype='uint8')
for x in range(0, w):
    for y in range(0, h):
        if(img[y][x] != 0):

            a.add('{'+f'x:{x},y:{y}'+'},')
            break
for x in range(0, w):
    for y in range(h-1, 0, -1):
        if (img[y][x] != 0):

            a.add('{'+f'x:{x},y:{y}'+'},')
            break
for y in range(0, h):
    for x in range(0, w):
        if(img[y][x] != 0):

            a.add('{'+f'x:{x},y:{y}'+'},')
            break
for y in range(0, h):
    for x in range(w-1, 0, -1):
        if(img[y][x] != 0):

            a.add('{'+f'x:{x},y:{y}'+'},')
            break
with open("c.txt", 'w') as f:
    for i in a:
        f.write(i+'\n')
